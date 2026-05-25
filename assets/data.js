window.PORTFOLIO_DATA = {
  site: {
    name: "Anirudh K",
    role: "Generative AI Engineer",
    location: "Bangalore, India",
    email: "anirudh25isme@gmail.com",
    phone: "+91 63666 22728",
    github: "https://github.com/anirudh209",
    linkedin: "https://www.linkedin.com/in/anirudh-k-86a27528b",
    portfolio: "https://anirudh.ai"
  },
  stats: [
    { value: "2+", label: "years in engineering" },
    { value: "6", label: "portfolio case studies" },
    { value: "4", label: "public GitHub repos" },
    { value: "50–100", label: "students trained" }
  ],
  capabilities: [
    {
      title: "LLM Systems",
      body: "RAG pipelines, agent workflows, embeddings, vector search, Claude-powered automations, and full-stack AI product development.",
      tags: ["RAG", "Agents", "pgvector", "FastAPI"]
    },
    {
      title: "Generative Media",
      body: "Diffusion model fine-tuning, ComfyUI workflows, prompt systems, AI campaign ideation, and end-to-end creative pipelines.",
      tags: ["FLUX.1-dev", "LoRA", "ComfyUI", "Creative AI"]
    },
    {
      title: "Interactive Product Builds",
      body: "Dashboards, evaluation flows, scoring engines, frontend systems, and polished UI layers for AI-first products.",
      tags: ["Next.js", "React", "TypeScript", "Node.js"]
    }
  ],
  benefits: [
    { title: "Product Thinking", body: "I translate technical capability into something users can actually use and teams can ship." },
    { title: "Full-Stack Range", body: "Comfortable across model workflows, backend services, data layers, and frontend product surfaces." },
    { title: "Fast Prototyping", body: "From zero to demo fast — especially for AI workflows, evaluation loops, and applied research products." },
    { title: "Hands-on Delivery", body: "I build systems myself instead of staying only at idea level or mockup level." },
    { title: "AI + Systems Blend", body: "Background in embedded systems and drone engineering adds a practical systems mindset to GenAI work." },
    { title: "Clear Communication", body: "Documentation, workflow thinking, and structured case studies keep complex technical work easy to understand." }
  ],
  workModes: [
    {
      title: "Full-time Roles",
      price: "Open",
      subtitle: "Product, platform, or applied AI engineering",
      bullets: ["AI product engineering", "RAG and agents", "Frontend + backend delivery", "Cross-functional collaboration", "Fast shipping mindset", "Immediate portfolio proof"]
    },
    {
      title: "Freelance Sprint",
      price: "2–6 weeks",
      subtitle: "For teams that need a focused build window",
      bullets: ["Working prototype", "Dashboard or workflow build", "AI pipeline integration", "Case-study-ready handoff", "Async communication", "Flexible scope"]
    },
    {
      title: "Portfolio / Demo Build",
      price: "Custom",
      subtitle: "Landing pages, AI demos, and launch-ready presentation builds",
      bullets: ["Narrative-driven pages", "Project storytelling", "Design-led frontend polish", "Reusable sections", "Static deployable output", "Fast turnaround"]
    }
  ],
  projects: [
    {
      slug: "bill-shield",
      title: "Bill Shield",
      subtitle: "AI-powered medical bill auditing",
      industry: "AI Products",
      category: "LLM Systems",
      art: "art-billshield",
      year: "2026",
      stack: ["Python", "FastAPI", "Claude 3.5 Sonnet", "ChromaDB", "Tesseract OCR"],
      intro: "An intelligent system designed to protect Indian patients from hospital overcharging and wrongful insurance claim rejections by cross-referencing bills against CGHS and NPPA benchmarks.",
      challenge: "Hospital billing in India is often opaque and inflated. Patients and their families frequently face massive bills under time pressure, with no easy way to verify if charges are compliant with government regulations or insurance rules.",
      solution: "Developed a reasoning engine that extracts data from bills and discharge summaries using Claude 3.5 Sonnet, benchmarks it against a 235-record knowledge base of IRDAI rules and CGHS rates, and generates legally-grounded dispute letters.",
      outcomes: [
        "Identified overcharges of up to 7.6x on specific procedures like CT scans in test cases.",
        "Automated the generation of regulatory complaints for the IRDAI 'Bima Bharosa' portal.",
        "Created a unified schema for hospital bills and medical findings to ensure auditability."
      ],
      links: {
        github: "https://github.com/anirudh209/bill-shield-",
        demo: "https://bill-shield-mocha.vercel.app/"
      },
      featured: true
    },
    {
      slug: "shadowshelf-mvp",
      title: "ShadowShelf",
      subtitle: "AI competitive intelligence platform",
      industry: "AI Products",
      category: "LLM Systems",
      art: "art-shadowshelf",
      year: "2026",
      stack: ["Claude API", "FastAPI", "Next.js", "PostgreSQL", "pgvector", "Celery"],
      intro: "A multi-layer intelligence system that tracks competitor movement across earnings calls, job posts, and patents, then turns that raw data into ranked strategic signals.",
      challenge: "Competitive research is slow, fragmented, and noisy. Teams often miss weak signals because evidence is scattered across different sources and reviewed manually.",
      solution: "Built a 4-layer full-stack platform with scraping pipelines, Claude-powered signal extraction, custom chunking + embeddings for vector search, a FastAPI service layer, and a Next.js dashboard with Slack-style alert patterns.",
      outcomes: [
        "Processed 50+ test documents across earnings calls and job postings.",
        "Introduced feedback loops so user validations can improve signal quality over time.",
        "Created a clear dashboard layer for reviewing evidence, confidence, and trend summaries."
      ],
      links: {
        github: "https://github.com/anirudh209/shadowshelf-mvp"
      },
      featured: true
    },
    {
      slug: "elitebuilders",
      title: "EliteBuilders",
      subtitle: "AI builders competition platform",
      industry: "Developer Platforms",
      category: "Product Systems",
      art: "art-elitebuilders",
      year: "2026",
      stack: ["TypeScript", "LLMs", "Node.js", "HTML", "CSS", "JavaScript"],
      intro: "A platform for AI MVP competitions with automated scoring, leaderboards, sponsor-facing dashboards, and proof-pack generation.",
      challenge: "Manual judging for AI competitions is inconsistent and time-consuming, making it difficult to compare product submissions fairly and present results to sponsors.",
      solution: "Built a full-stack scoring and leaderboard workflow with structured evaluation, evidence-based ranking, sponsor dashboards, and generated proof packs designed for hiring and event review.",
      outcomes: [
        "Reduced dependence on manual review by making evaluation more evidence based.",
        "Combined builder submissions, scoring logic, and sponsor reporting into one flow.",
        "Positioned the platform as both event infrastructure and talent discovery tooling."
      ],
      links: {
        github: "https://github.com/anirudh209/EliteBuilders"
      },
      featured: true
    },
    {
      slug: "release-readiness-dashboard",
      title: "Release Readiness Dashboard",
      subtitle: "AI application governance frontend",
      industry: "AI Operations",
      category: "Frontend Systems",
      art: "art-release",
      year: "2026",
      stack: ["HTML", "JavaScript", "CSS"],
      intro: "A frontend dashboard for trace review, evaluator runs, release gating, reporting, and audit tracking in AI application environments.",
      challenge: "Release teams need a single place to review traces, evaluator outputs, gates, and reporting status before AI features go live.",
      solution: "Created a focused frontend dashboard structure designed around release workflows: trace visibility, evaluator management, gate status, reporting layers, and audit-oriented organization.",
      outcomes: [
        "Packaged governance workflows into a single-screen product surface.",
        "Made review status and gating more legible for operational stakeholders.",
        "Served as a clean UI concept for AI release process oversight."
      ],
      links: {
        github: "https://github.com/anirudh209/release-readiness-dashboard"
      },
      featured: true
    },
    {
      slug: "ai-filmmaker-workflow",
      title: "AI Filmmaker Workflow",
      subtitle: "9-phase creative pipeline",
      industry: "Creative AI",
      category: "Generative Media",
      art: "art-filmmaker",
      year: "2025",
      stack: ["Claude API", "Midjourney", "Kling AI", "Higgsfield", "ElevenLabs"],
      intro: "A creative operating system for going from brief to video direction in a compressed AI-assisted workflow.",
      challenge: "Pre-production across concepting, scripting, visuals, voice, and sequencing typically takes days and requires handoffs across multiple tools.",
      solution: "Engineered a 9-phase pipeline and an interactive web app with Demo and Live AI modes to coordinate specialized creative tools across the full ideation-to-edit sequence.",
      outcomes: [
        "Compressed a 2–3 day pre-production workflow to under 30 minutes.",
        "Validated on a real Mokobara campaign brief.",
        "Created a repeatable framework for AI-assisted campaign production."
      ],
      links: {
        demo: "/assets/ai-filmmaker-workflow-demo.html"
      },
      featured: true
    },
    {
      slug: "ai-brand-campaign",
      title: "AI Brand & Ad Campaign",
      subtitle: "Seaborn Club and Mokobara concepts",
      industry: "Brand Systems",
      category: "Creative Strategy",
      art: "art-brand",
      year: "2025",
      stack: ["Claude", "Midjourney", "Brand Strategy"],
      intro: "A full-stack creative exploration using AI tools to develop brand identity, style systems, campaign visuals, scripts, and multi-channel distribution thinking.",
      challenge: "Brand concepting often needs strategy, visual tone, audience thinking, and channel execution — all aligned before production starts.",
      solution: "Used AI across concept, identity, poster generation, scripts, audience planning, and channel distribution to produce polished campaign-direction materials without traditional creative tooling.",
      outcomes: [
        "Built Seaborn Club from zero including style direction and posters.",
        "Produced a full Mokobara campaign concept spanning OOH, reels, and YouTube.",
        "Demonstrated agency-level ideation speed with AI-assisted workflows."
      ],
      links: {
        doc: "https://docs.google.com/document/d/1bGdsl6QFREKnaGnk3F57vNV27Hd2FGdiabcVoN1O9bY/edit?usp=drive_link",
        supporting: "https://drive.google.com/file/d/1wu3v6yj6LCg8rc_NEGG3IG6diI-QUmJL/view?usp=drive_link",
        additional: "https://docs.google.com/document/d/1C1QWG1Rg8w_U8AZJVmHgvnlqPZXRwdur0FQDl4fIDFY/edit?tab=t.0"
      },
      featured: false
    }
  ],
  industries: [
    {
      slug: "ai-products",
      title: "AI Products",
      body: "RAG systems, agentic workflows, signal extraction, evaluation interfaces, and applied AI product surfaces."
    },
    {
      slug: "creative-ai",
      title: "Creative AI",
      body: "Diffusion, LoRA fine-tuning, image generation systems, AI filmmaking workflows, and ad campaign experimentation."
    },
    {
      slug: "developer-platforms",
      title: "Developer Platforms",
      body: "Competition platforms, dashboards, review flows, and experience layers for technical users and sponsor stakeholders."
    },
    {
      slug: "robotics-systems",
      title: "Robotics & Embedded Systems",
      body: "ESP32, Raspberry Pi, drones, sensor systems, real-time workflows, and engineering education."
    }
  ],
  highlights: [
    {
      title: "From embedded systems to GenAI products",
      quote: "2+ years of embedded systems and drone engineering now applied to architecting AI products from zero to production.",
      meta: "Resume signal"
    },
    {
      title: "ShadowShelf platform architecture",
      quote: "Built a 4-layer platform with data pipelines, Claude-based signal extraction, FastAPI backend, and Next.js dashboard.",
      meta: "Project highlight"
    },
    {
      title: "Flux LoRA niche fine-tuning",
      quote: "Created a custom LoRA workflow for futuristic Indian pooja room interiors where existing models were not delivering usable outputs.",
      meta: "Capstone highlight"
    },
    {
      title: "AI filmmaking speedup",
      quote: "Compressed a 2–3 day pre-production process to under 30 minutes using a multi-tool creative pipeline.",
      meta: "Workflow highlight"
    }
  ],
  faqs: [
    {
      q: "What kind of roles is this portfolio designed for?",
      a: "Applied AI engineering, GenAI product engineering, AI product prototyping, and frontend/backend product roles around LLM workflows."
    },
    {
      q: "Does the site only show public GitHub projects?",
      a: "No. Public GitHub repositories are featured prominently, but the portfolio also includes selected case studies derived from resume work to present a fuller story."
    },
    {
      q: "Is this a static site or a CMS-backed build?",
      a: "This build is delivered as a deployable static portfolio with CMS-style collections modeled in shared JavaScript data for easy editing."
    },
    {
      q: "Can this be moved to Framer or Next.js later?",
      a: "Yes. The structure already mirrors a modern portfolio/CMS pattern, so it can be ported later to Framer, React, or Next.js."
    },
    {
      q: "Where should project screenshots go?",
      a: "Replace the placeholder gradient art areas with real dashboard screenshots, product clips, or motion stills for a stronger final portfolio."
    },
    {
      q: "What should be improved next?",
      a: "Add authentic testimonials, live demo links where possible, project screenshots, and analytics/contact form integration before publishing."
    }
  ],
  legal: {
    privacy: {
      title: "Privacy Policy",
      updated: "April 2026",
      body: [
        "This portfolio site is intended to showcase professional work, project summaries, and contact information.",
        "If a visitor submits the contact form, the details provided should only be used for replying to the inquiry.",
        "No sensitive personal data is intentionally collected through this static version of the site.",
        "If analytics, form tools, or newsletter tools are added later, this policy should be updated to reflect the actual services in use."
      ]
    },
    terms: {
      title: "Terms of Service",
      updated: "April 2026",
      body: [
        "The content on this site is provided for portfolio, informational, and professional networking purposes.",
        "Project names, summaries, and visuals should not be reused or republished without permission.",
        "Links to third-party platforms such as GitHub or LinkedIn are provided for convenience and are governed by their own terms.",
        "All future commercial engagements should be defined separately through direct written agreement."
      ]
    }
  }
};