/** Single source of truth for owner facts and placeholders. Nothing here is invented:
 *  every value comes from the CV or is an explicit placeholder awaiting the owner. */
export const site = {
  name: 'Jagdish Chaudhary',
  title: 'AI Solutions Architect · CTO',
  tagline: 'AI that works inside the systems your business already runs.',
  location: 'Ahmedabad, India',
  timezone: 'IST, UTC+5:30',
  linkedin: 'https://linkedin.com/in/jagdish-chaudhary',
  whatsapp: 'https://wa.me/919624064090',
  whatsappDisplay: '+91 96240 64090',
  // Placeholders: replace when the owner supplies them.
  email: null as string | null,
  calendly: null as string | null,
  cvPath: '/jagdish-chaudhary-cv.pdf',
  callLength: '30-minute',
};

export const nav = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export const numerals = [
  { n: '25–50', label: 'Engineers led' },
  { n: '8', label: 'Industries delivered for' },
  { n: '5', label: 'LLM families in use' },
  { n: '7', label: 'Steps, discovery to support' },
];

export const method = [
  [
    'Discovery',
    'Understand the business problem, the existing systems and where the process slows down.',
  ],
  [
    'Use-case assessment',
    'Rank AI opportunities by feasibility, data readiness, business value and expected ROI.',
  ],
  [
    'Feasibility and cost',
    'Review security, privacy and access-control needs, plus infrastructure and running costs.',
  ],
  [
    'Solution architecture',
    'Design the approach across RAG, model selection, integrations, APIs and cloud deployment.',
  ],
  [
    'Proof of concept',
    'Test on real data, evaluate models and validate results with business users.',
  ],
  [
    'Build and roll out',
    'Deliver in phases, with human review wherever AI output affects decisions.',
  ],
  [
    'Support and improve',
    'Track accuracy, cost and performance after go-live and refine the system.',
  ],
] as const;

export const industries = [
  [
    'Export and trade',
    'Export ERP covering orders, documentation, inventory, shipments and finance, with AI document extraction and forecasting',
    'Architecture, team leadership, AI integration',
    'Laravel, LLM APIs, RAG',
  ],
  [
    'Real estate',
    'RAG sales assistant answering buyer questions from brochures and FAQs, with lead capture into the CRM',
    'Solution architecture, CRM integration',
    'RAG, LLM, CRM',
  ],
  [
    'Financial services and trading',
    'Trading analytics with strategy backtesting and entry and exit signals; ledgers and settlements built on immutable financial records',
    'Architecture, data integrity rules, AI workflows',
    'Node.js, Python, MCP',
  ],
  [
    'Transportation and mobility',
    'Multi-tenant fleet and billing SaaS with driver portal, Android app, UPI payments, invoicing and settlement ledgers',
    'Phased roadmap, API design, billing rules',
    'Laravel, Vue 3, React Native',
  ],
  [
    'EdTech',
    'White-label mentorship portal for schools with 5 user roles and an assessment engine; AI assessment tools with generated reports',
    'SRS/PRD, assessment design, integrations',
    'Zoom, SendGrid, LLM APIs',
  ],
  [
    'Event management',
    'Event registrations, workshop and retreat bookings, and attendee management workflows',
    'Scope, solution design, delivery',
    'Web platform, payments, CMS',
  ],
  [
    'PropTech and community living',
    'Society management SaaS: dues and levies, income and expense ledger, tenant KYC, facility booking and complaints',
    'Module spec across 5 phases, financial controls',
    'PostgreSQL, React, React Native',
  ],
  [
    'Sales and marketing tech',
    'CRM with automated multi-mailbox email outreach, bounce and reply detection, a task engine and AI tool access',
    'Architecture, task engine, email pipeline',
    'Node.js, Prisma, PostgreSQL',
  ],
] as const;
