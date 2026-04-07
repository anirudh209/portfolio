(function(){
  const data = window.PORTFOLIO_DATA;
  const root = document.documentElement;

  function setYear(){
    document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  }

  function renderHeader(){
    const site = data.site;
    const navTargets = [
      ['Home','/index.html'],
      ['Capabilities','/index.html#capabilities'],
      ['Why Me','/index.html#benefits'],
      ['Projects','/index.html#projects'],
      ['Engagement','/index.html#engagement'],
      ['Highlights','/index.html#highlights'],
      ['FAQs','/index.html#faqs'],
      ['Contact','/index.html#contact']
    ];
    document.querySelectorAll('[data-header]').forEach(target => {
      target.innerHTML = `
        <div class="topbar">
          <div class="container nav">
            <a href="/index.html" class="brand">
              <span class="brand-mark"></span>
              <span>${site.name}</span>
            </a>
            <nav class="desktop-links">
              ${navTargets.map(([label, href]) => `<a href="${href}">${label}</a>`).join('')}
            </nav>
            <a class="btn btn-primary" href="/index.html#contact">Get in Touch</a>
            <button class="menu-btn" type="button" data-menu-open>Menu</button>
          </div>
        </div>
      `;
    });
  }

  function renderMobileMenu(){
    const site = data.site;
    document.querySelectorAll('[data-mobile-menu]').forEach(target => {
      target.innerHTML = `
        <div class="mobile-sheet" aria-hidden="true">
          <div class="mobile-panel">
            <div class="brand"><span class="brand-mark"></span><span>${site.name}</span></div>
            <a href="/index.html">Home</a>
            <a href="/index.html#capabilities">Capabilities</a>
            <a href="/index.html#benefits">Why Me</a>
            <a href="/index.html#projects">Projects</a>
            <a href="/projects/index.html">Projects Index</a>
            <a href="/industries/index.html">Industries</a>
            <a href="/reviews/index.html">Reviews</a>
            <a href="/faqs/index.html">FAQs</a>
            <a href="/legal/index.html">Legal</a>
            <div class="mobile-actions">
              <a class="btn btn-primary" href="/index.html#contact">Contact</a>
              <button class="btn btn-secondary" type="button" data-menu-close>Close</button>
            </div>
          </div>
        </div>
      `;
    });

    document.addEventListener('click', e => {
      if (e.target.closest('[data-menu-open]')) document.body.classList.add('menu-open');
      if (e.target.closest('[data-menu-close]')) document.body.classList.remove('menu-open');
      if (e.target.classList.contains('mobile-sheet')) document.body.classList.remove('menu-open');
    });
  }

  function renderFooter(){
    document.querySelectorAll('[data-footer]').forEach(target => {
      target.innerHTML = `
        <div class="footer">
          <div class="container footer-box">
            <div>
              <div class="brand"><span class="brand-mark"></span><span>${data.site.name}</span></div>
              <div class="footer-copy">Generative AI engineer building LLM pipelines, diffusion workflows, agentic systems, and polished AI product experiences.</div>
              <div class="legal-row">
                <a href="${data.site.github}" target="_blank" rel="noreferrer">GitHub</a>
                <a href="${data.site.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="mailto:${data.site.email}">${data.site.email}</a>
              </div>
            </div>
            <div>
              <div class="footer-links">
                <a href="/projects/index.html">Projects</a>
                <a href="/industries/index.html">Industries</a>
                <a href="/reviews/index.html">Reviews</a>
                <a href="/faqs/index.html">FAQs</a>
                <a href="/legal/privacy-policy.html">Privacy Policy</a>
                <a href="/legal/terms-of-service.html">Terms of Service</a>
              </div>
              <div class="footer-copy" style="margin-top:18px;">© <span data-year></span> ${data.site.name}. Built as a portfolio-style Framer-inspired static site.</div>
            </div>
          </div>
        </div>
      `;
    });
  }

  function renderProjectsGrid(selector, items){
    const target = document.querySelector(selector);
    if (!target) return;
    target.innerHTML = items.map(project => `
      <a class="project-card" href="/projects/${project.slug}.html">
        <div class="project-art ${project.art}">
          <div class="art-inner">
            <div class="art-label"><span class="brand-mark" style="background:#fff;"></span>${project.category}</div>
            <div class="art-title">${project.title}</div>
            <div class="art-sub">${project.subtitle}</div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-meta">
            <span>${project.industry}</span>
            <span>${project.year}</span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.intro}</p>
          <div class="tag-row">
            ${project.stack.slice(0,4).map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="link-line">
            <span>View project</span>
            <span class="link-arrow">→</span>
          </div>
        </div>
      </a>
    `).join('');
  }

  function renderHome(){
    if (!document.body.matches('[data-page="home"]')) return;
    const featured = data.projects.filter(p => p.featured).slice(0, 3);
    renderProjectsGrid('#featured-projects', data.projects);

    const cap = document.querySelector('#capability-grid');
    cap.innerHTML = data.capabilities.map(item => `
      <article class="info-card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
        <div class="tag-row">${item.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      </article>
    `).join('');

    const ben = document.querySelector('#benefits-grid');
    ben.innerHTML = data.benefits.map(item => `
      <article class="info-card">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>
    `).join('');

    const stats = document.querySelector('#stats-grid');
    stats.innerHTML = data.stats.map(item => `
      <article class="metric">
        <div class="metric-value">${item.value}</div>
        <div class="metric-label">${item.label}</div>
      </article>
    `).join('');

    const pricing = document.querySelector('#engagement-grid');
    pricing.innerHTML = data.workModes.map(item => `
      <article class="price-card">
        <h3>${item.title}</h3>
        <div class="price">${item.price}</div>
        <div class="sub">${item.subtitle}</div>
        <ul class="checklist">${item.bullets.map(line => `<li>${line}</li>`).join('')}</ul>
      </article>
    `).join('');

    const highlights = document.querySelector('#highlights-grid');
    highlights.innerHTML = `
      <article class="highlight-lead">
        <div>
          <div class="kicker">Profile signals</div>
          <h3>Built for AI products that need real systems.</h3>
        </div>
        <p>This section keeps the same proof-style energy as the reference template, but uses factual project and resume-based highlights instead of invented testimonials.</p>
      </article>
      ${data.highlights.slice(0,3).map(item => `
        <article class="highlight-card">
          <div class="quote">“${item.quote}”</div>
          <div class="meta">${item.title} · ${item.meta}</div>
        </article>
      `).join('')}
    `;

    const faq = document.querySelector('#faq-grid');
    faq.innerHTML = data.faqs.map((item, idx) => `
      <article class="faq-item ${idx===0 ? 'active' : ''}">
        <button class="faq-trigger" type="button">
          <span>${item.q}</span>
          <span class="faq-plus">${idx===0 ? '−' : '+'}</span>
        </button>
        <div class="faq-answer">${item.a}</div>
      </article>
    `).join('');

    const detail = document.querySelector('#contact-details');
    detail.innerHTML = `
      <div>
        <div class="contact-label">Email</div>
        <div class="contact-value"><a href="mailto:${data.site.email}">${data.site.email}</a></div>
      </div>
      <div>
        <div class="contact-label">GitHub</div>
        <div class="contact-value"><a target="_blank" rel="noreferrer" href="${data.site.github}">github.com/anirudh209</a></div>
      </div>
      <div>
        <div class="contact-label">LinkedIn</div>
        <div class="contact-value"><a target="_blank" rel="noreferrer" href="${data.site.linkedin}">linkedin.com/in/anirudh-k-86a27528b</a></div>
      </div>
      <div>
        <div class="contact-label">Location</div>
        <div class="contact-value">${data.site.location}</div>
      </div>
    `;

    document.addEventListener('click', e => {
      const trigger = e.target.closest('.faq-trigger');
      if (!trigger) return;
      const item = trigger.closest('.faq-item');
      document.querySelectorAll('.faq-item').forEach(node => {
        const same = node === item;
        node.classList.toggle('active', same ? !node.classList.contains('active') : false);
        const plus = node.querySelector('.faq-plus');
        plus.textContent = node.classList.contains('active') ? '−' : '+';
      });
    });

    // hero project references
    document.querySelectorAll('[data-hero-link]').forEach((node, idx) => {
      const project = featured[idx % featured.length];
      node.href = `/projects/${project.slug}.html`;
      node.querySelector('.art-title').textContent = project.title;
      node.querySelector('.art-sub').textContent = project.subtitle;
      node.querySelector('.art-label span:last-child').textContent = project.category;
    });
  }

  function renderCollectionPage(type){
    const page = document.body.dataset.page;
    if (!['projects-index','industries-index','reviews-index','faqs-index','legal-index'].includes(page)) return;

    if (page === 'projects-index') {
      renderProjectsGrid('#collection-root', data.projects);
      document.querySelector('[data-page-title]').textContent = 'Projects Index';
      document.querySelector('[data-page-copy]').textContent = 'A Framer-style project collection page populated with GitHub repositories and resume-backed case studies.';
    }

    if (page === 'industries-index') {
      const root = document.querySelector('#collection-root');
      root.className = 'collection-grid';
      root.innerHTML = data.industries.map(item => `
        <a class="collection-card" href="/industries/${item.slug}.html">
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        </a>
      `).join('');
      document.querySelector('[data-page-title]').textContent = 'Industries';
      document.querySelector('[data-page-copy]').textContent = 'A lightweight collection matching the requested CMS-style structure from the reference site.';
    }

    if (page === 'reviews-index') {
      const root = document.querySelector('#collection-root');
      root.className = 'collection-grid';
      root.innerHTML = data.highlights.map(item => `
        <article class="collection-card">
          <h3>${item.title}</h3>
          <p>“${item.quote}”</p>
          <p style="margin-top:14px;font-size:13px;">${item.meta}</p>
        </article>
      `).join('');
      document.querySelector('[data-page-title]').textContent = 'Reviews';
      document.querySelector('[data-page-copy]').textContent = 'To avoid fabricating endorsements, this build uses factual highlight cards instead of made-up client testimonials.';
    }

    if (page === 'faqs-index') {
      const root = document.querySelector('#collection-root');
      root.className = 'accordion';
      root.innerHTML = data.faqs.map((item, idx) => `
        <article class="faq-item ${idx===0 ? 'active' : ''}">
          <button class="faq-trigger" type="button">
            <span>${item.q}</span>
            <span class="faq-plus">${idx===0 ? '−' : '+'}</span>
          </button>
          <div class="faq-answer">${item.a}</div>
        </article>
      `).join('');
      document.querySelector('[data-page-title]').textContent = 'FAQs';
      document.querySelector('[data-page-copy]').textContent = 'Everything a recruiter, collaborator, or client might want to know about the portfolio and how it should evolve next.';
    }

    if (page === 'legal-index') {
      const root = document.querySelector('#collection-root');
      root.className = 'collection-grid';
      root.innerHTML = `
        <a class="collection-card" href="/legal/privacy-policy.html">
          <h3>${data.legal.privacy.title}</h3>
          <p>Static-site privacy language ready for later updates when analytics or form integrations are added.</p>
        </a>
        <a class="collection-card" href="/legal/terms-of-service.html">
          <h3>${data.legal.terms.title}</h3>
          <p>Simple terms for portfolio usage, third-party links, and future engagement boundaries.</p>
        </a>
      `;
      document.querySelector('[data-page-title]').textContent = 'Legal';
      document.querySelector('[data-page-copy]').textContent = 'Essential pages matching the requested site structure.';
    }

    document.addEventListener('click', e => {
      const trigger = e.target.closest('.faq-trigger');
      if (!trigger) return;
      const item = trigger.closest('.faq-item');
      item.classList.toggle('active');
      item.querySelector('.faq-plus').textContent = item.classList.contains('active') ? '−' : '+';
    });
  }

  function renderProjectDetail(){
    if (document.body.dataset.page !== 'project-detail') return;
    const slug = document.body.dataset.slug;
    const project = data.projects.find(p => p.slug === slug);
    if (!project) {
      window.location.href = '/404.html';
      return;
    }

    document.querySelector('[data-project-breadcrumb]').textContent = project.title;
    document.querySelector('[data-project-title]').textContent = project.title;
    document.querySelector('[data-project-sub]').textContent = project.intro;
    const art = document.querySelector('[data-project-art]');
    art.classList.add(project.art);
    art.innerHTML = `
      <div class="art-inner">
        <div class="art-label"><span class="brand-mark" style="background:#fff;"></span>${project.category}</div>
        <div class="art-title">${project.title}</div>
        <div class="art-sub">${project.subtitle}</div>
      </div>
    `;

    document.querySelector('[data-project-overview]').innerHTML = `
      <p>${project.solution}</p>
      <div class="detail-stack">${project.stack.map(t => `<span class="tag">${t}</span>`).join('')}</div>
    `;

    document.querySelector('[data-project-details]').innerHTML = `
      <article class="detail-card">
        <div class="contact-label">Challenge</div>
        <h3 style="margin:10px 0 0;font-size:28px;letter-spacing:-0.04em;">What needed to change</h3>
        <p style="color:var(--muted);">${project.challenge}</p>
      </article>
      <article class="detail-card">
        <div class="contact-label">Approach</div>
        <h3 style="margin:10px 0 0;font-size:28px;letter-spacing:-0.04em;">How the build was structured</h3>
        <p style="color:var(--muted);">${project.solution}</p>
      </article>
      <article class="detail-card">
        <div class="contact-label">Outcomes</div>
        <h3 style="margin:10px 0 0;font-size:28px;letter-spacing:-0.04em;">What this project demonstrates</h3>
        <ul class="list">${project.outcomes.map(line => `<li>${line}</li>`).join('')}</ul>
      </article>
    `;

    document.querySelector('[data-project-side]').innerHTML = `
      <article class="detail-card">
        <div class="contact-label">Project Info</div>
        <div class="legal-row" style="margin-top:16px;">
          <span>${project.industry}</span>
          <span>${project.year}</span>
          <span>${project.category}</span>
        </div>
      </article>
      <article class="detail-card">
        <div class="contact-label">Links</div>
        <div style="display:grid;gap:10px;margin-top:16px;">
          ${project.links.github ? `<a class="btn btn-secondary" target="_blank" rel="noreferrer" href="${project.links.github}">Open GitHub</a>` : ''}
          ${project.links.doc ? `<a class="btn btn-primary" target="_blank" rel="noreferrer" href="${project.links.doc}">View Case Study</a>` : ''}
          ${project.links.demo ? `<a class="btn btn-primary" target="_blank" rel="noreferrer" href="${project.links.demo}">Open Interactive Demo</a>` : ''}
          ${project.links.supporting ? `<a class="btn btn-secondary" target="_blank" rel="noreferrer" href="${project.links.supporting}">View Supporting File</a>` : ''}
          ${!project.links.github && !project.links.doc && !project.links.demo ? `<div class="pill">No external links available</div>` : ''}
          <a class="btn btn-secondary" href="/projects/index.html">Back to Projects</a>
        </div>
      </article>
      <article class="detail-card">
        <div class="contact-label">Note</div>
        <p style="color:var(--muted);margin-top:14px;">Replace the gradient placeholder with real screenshots, demo clips, or diagrams for a final production-ready portfolio.</p>
      </article>
    `;
  }

  function renderIndustryDetail(){
    if (document.body.dataset.page !== 'industry-detail') return;
    const slug = document.body.dataset.slug;
    const industry = data.industries.find(i => i.slug === slug);
    if (!industry) {
      window.location.href = '/404.html';
      return;
    }
    document.querySelector('[data-page-title]').textContent = industry.title;
    document.querySelector('[data-page-copy]').textContent = industry.body;
    const projects = data.projects.filter(p => p.industry.toLowerCase().includes(industry.title.split(' ')[0].toLowerCase()) || industry.title.toLowerCase().includes(p.industry.split(' ')[0].toLowerCase()));
    const list = projects.length ? projects : data.projects.slice(0,3);
    renderProjectsGrid('#collection-root', list);
  }

  function renderLegalDetail(){
    if (document.body.dataset.page !== 'legal-detail') return;
    const slug = document.body.dataset.slug;
    const legal = slug === 'privacy-policy' ? data.legal.privacy : data.legal.terms;
    document.querySelector('[data-page-title]').textContent = legal.title;
    document.querySelector('[data-page-copy]').textContent = `Last updated ${legal.updated}`;
    document.querySelector('#legal-body').innerHTML = legal.body.map(p => `<div class="detail-card"><p style="margin:0;color:var(--muted);">${p}</p></div>`).join('');
  }

  renderHeader();
  renderMobileMenu();
  renderFooter();
  renderHome();
  renderCollectionPage();
  renderProjectDetail();
  renderIndustryDetail();
  renderLegalDetail();
  setYear();
})();