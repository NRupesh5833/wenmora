/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------
 * Edit everything about the business here: name, contact details,
 * WhatsApp number, services, pricing, projects, testimonials, FAQs.
 * Components read from this file - do not hardcode values elsewhere.
 */

export const business = {
  name: "Wenmora",
  legalName: "Wenmora Technologies",
  shortName: "Wenmora",
  tagline: "Design • Develop • Elevate",
  description:
    "Wenmora Technologies combines strategy, design, development and AI to create high-performance digital experiences for modern businesses.",
  positioning: "Creative technology for businesses ready to build what's next.",
  city: "Hyderabad",
  region: "Telangana",
  country: "India",
  postalCode: "500081",
  address:
    "4th Floor, NHeights, Phase 2, Cyber Gateway, Hi-Tech City, Hyderabad – 500081, Telangana, India",
  addressLines: [
    "4th Floor, NHeights",
    "Phase 2, Cyber Gateway",
    "Hi-Tech City",
    "Hyderabad – 500081",
    "Telangana, India",
  ],
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
};

export const contactInfo = {
  email: "wenmoratechnologies@gmail.com",
  phone: "+91 7995445833",
  phoneHref: "+917995445833",
  whatsappNumber: "917995445833",
  whatsappMessage:
    "Hi Wenmora Technologies, I'm interested in discussing a website or digital project for my business. I'd like to know more about your services.",
  mapsEmbedUrl: "",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=" +
    encodeURIComponent("NHeights, Phase 2, Cyber Gateway, Hi-Tech City, Hyderabad 500081, Telangana, India"),
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "GitHub", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

/** Analytics placeholders - add real IDs when available. */
export const analytics = {
  googleAnalyticsId: "", // e.g. "G-XXXXXXXXXX"
  googleTagManagerId: "", // e.g. "GTM-XXXXXXX"
  searchConsoleVerification: "", // meta verification token
};

export function whatsappLink(message?: string) {

  const text = encodeURIComponent(message ?? contactInfo.whatsappMessage);
  const number = contactInfo.whatsappNumber.replace(/\D/g, "");
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
}

/** Credibility signals — capability-based, never invented numbers. */
export const trustStats = [
  { value: "Custom", label: "Designed around the business" },
  { value: "Strategic", label: "Goals before pixels" },
  { value: "AI-assisted", label: "Intelligence used with purpose" },
  { value: "Hyderabad", label: "Working with businesses everywhere" },
];

/** Capability strip shown directly under the hero. */
export const capabilities = [
  "Web Experiences",
  "AI Solutions",
  "Digital Products",
  "Automation",
];

/** The four connected pillars beyond website development. */
export const pillars = [
  {
    num: "01",
    title: "Strategy",
    text: "Business goals, customer journey and digital strategy defined before a single pixel.",
    items: ["Business goals", "Customer journey", "Digital strategy"],
    icon: "Compass",
  },
  {
    num: "02",
    title: "Experience",
    text: "Interfaces and interactions designed to feel effortless and unmistakably yours.",
    items: ["UX", "UI", "Interaction", "Motion"],
    icon: "Layers",
  },
  {
    num: "03",
    title: "Intelligence",
    text: "AI and automation applied where they create genuine value, not novelty.",
    items: ["AI", "Automation", "Smart interfaces"],
    icon: "Sparkles",
  },
  {
    num: "04",
    title: "Growth",
    text: "Search, conversion and analytics wired in so the work keeps compounding.",
    items: ["SEO", "Conversion", "Analytics", "Optimization"],
    icon: "TrendingUp",
  },
];

/** How we think — three principles. */
export const principles = [
  { num: "01", title: "Think", text: "Understand the business before designing anything." },
  { num: "02", title: "Create", text: "Turn strategy into a memorable, deliberate experience." },
  { num: "03", title: "Engineer", text: "Build technology that performs under real conditions." },
];

export const problems = [
  { title: "Outdated design", text: "A dated website quietly tells visitors the business is dated too." },
  { title: "Poor mobile experience", text: "Most visitors arrive on a phone. Broken layouts lose them instantly." },
  { title: "Slow loading", text: "Every extra second of load time costs enquiries you never hear about." },
  { title: "Difficult navigation", text: "If people can't find services or pricing, they leave and compare." },
  { title: "Weak branding", text: "Inconsistent visuals make a capable business look unproven." },
  { title: "No clear call to action", text: "Traffic without a next step never becomes a conversation." },
  { title: "Poor SEO foundations", text: "Missing structure and metadata keep you invisible in search." },
  { title: "Hard to contact", text: "Buried phone numbers and forms are the fastest way to lose a lead." },
];

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: string;
  details: string[];
};

export const services: Service[] = [
  {
    slug: "web-experience-design",
    title: "Web Experience Design",
    description: "Custom websites and digital experiences designed around users and business goals.",
    icon: "PenTool",
    details: [
      "Brand-aligned visual direction and design system",
      "Wireframes and page-level content structure",
      "Desktop, tablet and mobile design",
    ],
  },
  {
    slug: "web-development",
    title: "Web Development",
    description: "Fast, responsive and scalable digital products built on a modern stack.",
    icon: "Code2",
    details: [
      "Component-based, maintainable front-end code",
      "Responsive across every common breakpoint",
      "Performance-conscious build and deployment",
    ],
  },
  {
    slug: "ai-experiences",
    title: "AI-Powered Experiences",
    description: "AI-assisted interfaces, intelligent experiences and practical AI integrations.",
    icon: "Sparkles",
    details: [
      "AI-assisted content and visual generation",
      "Assistants, search and smart interfaces",
      "Model integrations wired into real workflows",
    ],
  },
  {
    slug: "uiux-branding",
    title: "UI/UX & Branding",
    description: "Visual systems, interfaces and brand experiences with a consistent voice.",
    icon: "Palette",
    details: ["Brand and visual identity direction", "Design systems and component libraries", "Interface and interaction design"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce",
    description: "High-performance online stores focused on usability and conversion.",
    icon: "ShoppingBag",
    details: ["Catalogue and product page design", "Checkout and payment integration", "Order and inventory workflows"],
  },
  {
    slug: "automation",
    title: "Business Automation",
    description: "Digital workflows and automation designed to reduce repetitive work.",
    icon: "Workflow",
    details: ["Process mapping and workflow design", "Integrations between the tools you already use", "Automated notifications and reporting"],
  },
  {
    slug: "custom-software",
    title: "Custom Software",
    description: "Web applications and business-specific digital tools built to fit.",
    icon: "Boxes",
    details: ["Web application architecture", "Dashboards, portals and internal tools", "Databases, APIs and integrations"],
  },
  {
    slug: "digital-growth",
    title: "Digital Growth",
    description: "SEO, conversion optimization, analytics and continuous improvement.",
    icon: "TrendingUp",
    details: ["Technical and on-page SEO foundations", "Conversion and funnel optimization", "Analytics, reporting and iteration"],
  },
];

export type Project = {
  slug: string;
  name: string;
  businessType: string;
  description: string;
  technologies: string[];
  isDemo: boolean;
  image: string;
  caseStudy: {
    challenge: string;
    strategy: string;
    design: string;
    development: string;
    outcome: string;
  };
};

export const projects: Project[] = [
  {
    slug: "urban-spice",
    name: "Urban Spice",
    businessType: "Restaurant Website",
    description: "Modern restaurant website focused on menu discovery and WhatsApp reservations.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    isDemo: true,
    image: "work-restaurant",
    caseStudy: {
      challenge:
        "Diners could not browse the menu on a phone and reservation requests were scattered across calls and social media DMs.",
      strategy:
        "Make the menu the centre of the experience and route every intent - table booking, directions, ordering - into one predictable action.",
      design:
        "A warm, photography-led layout with a sticky reservation bar, readable menu categories and generous spacing on mobile.",
      development:
        "Component-driven React build with responsive images, a lightweight menu filter and a pre-filled WhatsApp reservation flow.",
      outcome: "Designed to improve enquiries and make menu discovery and reservations easier.",
    },
  },
  {
    slug: "primenest-realty",
    name: "PrimeNest Realty",
    businessType: "Real Estate Website",
    description: "Property discovery platform with an enquiry-focused design.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Maps API"],
    isDemo: true,
    image: "work-realestate",
    caseStudy: {
      challenge:
        "Listings were hard to compare and enquiry forms sat at the bottom of long pages, far from buying intent.",
      strategy:
        "Build a filter-first discovery flow and place a contextual enquiry action on every listing card and detail view.",
      design:
        "A calm, information-dense layout with clear property hierarchy, map context and trust cues near each CTA.",
      development:
        "Reusable listing components, URL-driven filters for shareable searches and a validated enquiry form.",
      outcome: "Designed to improve enquiries and make property discovery easier.",
    },
  },
  {
    slug: "nextzen-technologies",
    name: "NextZen Technologies",
    businessType: "IT Company Website",
    description: "Professional corporate website for an IT services company.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    isDemo: true,
    image: "work-it",
    caseStudy: {
      challenge:
        "The company's capabilities read as a generic list, giving enterprise buyers no reason to shortlist them.",
      strategy:
        "Lead with outcomes and proof structure - capability pages, engagement models and a clear path to a discovery call.",
      design:
        "A restrained corporate system: strong typography, structured capability cards and disciplined use of accent colour.",
      development: "Static-first rendering, accessible navigation patterns and schema-marked service pages.",
      outcome: "Designed to improve credibility with corporate buyers and simplify capability discovery.",
    },
  },
  {
    slug: "fitcore",
    name: "FitCore",
    businessType: "Fitness Website",
    description: "Conversion-focused fitness website with trial booking.",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
    isDemo: true,
    image: "work-fitness",
    caseStudy: {
      challenge: "Prospective members had to call during working hours to ask about a trial session.",
      strategy: "Make the free trial the single primary action across the site and reduce the form to essentials.",
      design: "High-contrast, energetic layout with programme cards, trainer profiles and a persistent booking CTA.",
      development: "Multi-step trial booking form with validation, plus a WhatsApp fallback for instant questions.",
      outcome: "Designed to improve trial bookings and make programme information easier to compare.",
    },
  },
];

export const whyChooseUs = [
  { title: "Custom", text: "No generic templates. Every experience is designed around one business.", icon: "PenTool" },
  { title: "Strategic", text: "Design begins with business goals, not with a colour palette.", icon: "Compass" },
  { title: "Conversion-focused", text: "Every important interaction on the page has a purpose.", icon: "Target" },
  { title: "Technology-driven", text: "Modern development, clean architecture and real integrations.", icon: "Code2" },
  { title: "AI-assisted", text: "We use AI where it creates genuine value — never as decoration.", icon: "Sparkles" },
  { title: "Long-term", text: "We build relationships that continue well beyond launch day.", icon: "LifeBuoy" },
];

export const processSteps = [
  { step: "01", title: "Discover", text: "Understand the business, the audience and what success means." },
  { step: "02", title: "Strategize", text: "Define goals, positioning and the customer journey." },
  { step: "03", title: "Design", text: "Create the visual direction and the user experience." },
  { step: "04", title: "Build", text: "Develop the digital experience on a modern, scalable stack." },
  { step: "05", title: "Refine", text: "Test, optimize and polish across devices and conditions." },
  { step: "06", title: "Launch", text: "Deploy and connect the systems the business depends on." },
  { step: "07", title: "Evolve", text: "Support, measure and improve continuously after launch." },
];

export const industries = [
  { name: "Technology", text: "Capability-led structure built for procurement-stage and technical buyers." },
  { name: "Restaurants", text: "Menu discovery, photo-led storytelling and one-tap table reservations." },
  { name: "Real Estate", text: "Filterable listings, location context and enquiry forms tied to each property." },
  { name: "Healthcare", text: "Clear service and doctor information with accessible appointment requests." },
  { name: "Education", text: "Course structure, admission enquiry flows and downloadable prospectus." },
  { name: "Fitness", text: "Programme comparison, trainer credibility and free trial booking." },
  { name: "Hospitality", text: "Room and amenity showcases with direct booking enquiries." },
  { name: "IT & Technology", text: "Capability-led corporate structure built for procurement-stage buyers." },
  { name: "Professional Services", text: "Expertise positioning, case detail and consultation scheduling." },
  { name: "Retail", text: "Catalogue browsing, store locators and campaign landing pages." },
  { name: "Startups", text: "Fast, credible launch sites that explain the product and capture waitlist signups." },
];

export const pricingPlans = [
  {
    name: "Starter",
    subtitle: "For small businesses establishing a professional online presence.",
    price: "₹24,999",
    priceNote: "One-time project fee",
    featured: false,
    features: [
      "Professional business website",
      "Up to 5 pages",
      "Custom responsive layout",
      "Mobile, tablet and desktop optimization",
      "Contact form",
      "WhatsApp integration",
      "Google Maps integration",
      "Basic on-page SEO",
      "Social integration",
      "SSL and deployment setup",
      "Basic performance optimization",
      "2 revision rounds",
      "30 days post-launch support",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    subtitle: "For growing businesses that need a stronger digital presence and lead generation.",
    price: "₹49,999",
    priceNote: "One-time project fee",
    featured: true,
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Custom UI/UX",
      "Conversion-focused structure",
      "Advanced responsive design",
      "WhatsApp and lead generation flows",
      "Advanced forms",
      "SEO foundation",
      "Google Analytics setup",
      "Google Search Console setup",
      "Performance optimization",
      "Custom animations and micro-interactions",
      "Portfolio / case-study section",
      "3 revision rounds",
      "60 days post-launch support",
    ],
    cta: "Start Your Project",
  },
  {
    name: "Custom",
    subtitle: "For businesses requiring advanced functionality, integrations or digital products.",
    price: "Starting ₹99,999",
    priceNote: "Scoped after discovery",
    featured: false,
    features: [
      "Custom UI/UX and architecture",
      "Advanced functionality",
      "CMS and database",
      "Authentication where required",
      "E-commerce and payment integrations",
      "API and CRM integrations",
      "Advanced SEO",
      "Custom dashboards",
      "AI integrations and business automation",
      "Advanced analytics",
      "Scalable architecture",
      "Priority support",
    ],
    cta: "Discuss Your Project",
  },
];

/** Optional add-on services. */
export const addOns = [
  { name: "Extra page", price: "₹2,500 / page" },
  { name: "Landing page", price: "Starting ₹7,500" },
  { name: "Additional revision round", price: "₹2,500" },
  { name: "Blog / CMS setup", price: "Starting ₹5,000" },
  { name: "Basic SEO expansion", price: "Starting ₹7,500" },
  { name: "E-commerce add-on", price: "Starting ₹25,000" },
  { name: "Payment gateway integration", price: "Starting ₹7,500" },
  { name: "Custom API integration", price: "Starting ₹10,000" },
  { name: "AI integration", price: "Starting ₹15,000" },
  { name: "Business automation", price: "Starting ₹15,000" },
  { name: "Monthly maintenance", price: "₹4,999 / month" },
];

/** Ongoing care plans. */
export const maintenancePlans = [
  {
    name: "Essential Care",
    price: "₹4,999",
    priceNote: "per month",
    features: [
      "Minor content updates",
      "Technical monitoring",
      "Maintenance checks",
      "Backup monitoring",
      "Small UI and content changes",
      "Basic performance monitoring",
    ],
  },
  {
    name: "Growth Care",
    price: "₹9,999",
    priceNote: "per month",
    features: [
      "Everything in Essential Care",
      "Regular content updates",
      "Conversion improvements",
      "Performance optimization",
      "SEO monitoring",
      "Analytics review",
      "Priority support",
    ],
  },
  {
    name: "Custom Support",
    price: "Custom",
    priceNote: "Scoped to your product",
    features: [
      "Web applications",
      "E-commerce platforms",
      "AI features",
      "Business automation",
      "Dashboards",
      "Ongoing development",
    ],
  },
];

/**
 * Add real testimonials here when available.
 * Leave `isPlaceholder: true` until then - never publish invented reviews.
 */
export type Testimonial = {
  quote: string;
  name: string;
  position: string;
  company: string;
  rating: number | null;
  photo: string | null;
  isPlaceholder: boolean;
};

/** Empty until real, verified client feedback exists. Never publish invented reviews. */
export const testimonials: Testimonial[] = [];

export const faqs = [
  {
    q: "How much does a website cost?",
    a: "Pricing depends on the number of pages, functionality, design requirements and integrations. After a short discovery conversation you receive a fixed, itemised quote so there are no surprises later.",
  },
  {
    q: "How long does a website take?",
    a: "Timeline depends on project complexity and how quickly content is available. A focused business website typically moves faster than a store or a custom platform; you get an agreed schedule before work begins.",
  },
  {
    q: "Do you provide domain and hosting?",
    a: "Yes. You can buy and own the domain and hosting directly, or we can procure and configure them on your behalf and hand over full access. Either way, the accounts belong to your business.",
  },
  {
    q: "Can you redesign my existing website?",
    a: "Yes. We audit the current site, keep what already works, rebuild the structure and design around your business goals, and migrate carefully so existing search rankings are protected.",
  },
  {
    q: "Will the website work on mobile?",
    a: "Yes. Every website is designed mobile-first and tested from small phones through to large desktop screens.",
  },
  {
    q: "Can I update the website myself?",
    a: "Where a project includes a CMS, you can edit text, images, blog posts and listings yourself through a simple dashboard. For static sites, content updates can be handled through a maintenance plan.",
  },
  {
    q: "Do you provide SEO?",
    a: "Technical and on-page SEO fundamentals - metadata, headings, semantic markup, sitemap, schema and performance - are included according to the package you select. Ongoing content and ranking campaigns are scoped separately.",
  },
  {
    q: "Do you provide maintenance?",
    a: "Yes. Optional monthly maintenance plans cover updates, backups, security patches, small content changes and ongoing improvements.",
  },
];

export const budgetRanges = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure",
];

export const preferredContactMethods = ["Email", "Phone call", "WhatsApp"];

export const businessTypes = [
  "Restaurant / Cafe",
  "Real Estate",
  "Clinic / Healthcare",
  "Salon / Spa",
  "Gym / Fitness",
  "Coaching / Education",
  "Hotel / Hospitality",
  "Interior Design",
  "Consulting",
  "IT / Technology",
  "E-commerce / Retail",
  "Other service business",
];

export const projectNeeds = [
  "Website Design",
  "Website Development",
  "UI/UX Design",
  "E-commerce",
  "AI Solutions",
  "Business Automation",
  "Custom Software",
  "SEO & Digital Growth",
  "Other",
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "Process", to: "/process" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
] as const;

export const techStack = [
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { group: "Backend", items: ["Node.js", "Python", "APIs", "Databases"] },
  { group: "Design", items: ["Figma", "UI/UX", "Design systems"] },
  { group: "Deployment", items: ["GitHub", "Vercel", "Cloud platforms"] },
];

export const aiCapabilities = [
  { title: "AI graphic design", text: "Distinctive visual assets produced quickly, then refined by hand.", icon: "Palette" },
  { title: "AI-assisted development", text: "Faster, smarter build workflows without giving up code quality.", icon: "Code2" },
  { title: "AI integrations", text: "Useful intelligent functionality inside the product itself.", icon: "Sparkles" },
  { title: "Automation", text: "Digital workflows that remove repetitive business processes.", icon: "Workflow" },
  { title: "Intelligent interfaces", text: "Interfaces that adapt and make the experience more useful.", icon: "Layers" },
];
