/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------
 * Edit everything about the business here: name, contact details,
 * WhatsApp number, services, pricing, projects, testimonials, FAQs.
 * Components read from this file - do not hardcode values elsewhere.
 */

export const business = {
  /** TODO: replace with your registered business name */
  name: "[YOUR BUSINESS NAME]",
  shortName: "[BRAND]",
  tagline: "Websites Built to Turn Visitors Into Customers.",
  description:
    "We design and develop modern, high-performance websites that help businesses build credibility, generate enquiries and grow online.",
  /** TODO: replace with your city / service area */
  city: "[CITY]",
  region: "[STATE]",
  country: "India",
  /** TODO: replace with your studio address, or leave as remote-first */
  address: "[STREET ADDRESS], [CITY], [STATE] [PIN]",
  hours: [
    { days: "Monday – Friday", time: "10:00 AM – 7:00 PM" },
    { days: "Saturday", time: "10:00 AM – 2:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  foundedYear: "[YEAR]",
};

export const contactInfo = {
  /** TODO: replace with your business email */
  email: "[hello@yourdomain.com]",
  /** TODO: replace with your phone number in international format */
  phone: "[+91 00000 00000]",
  /** TODO: digits only, with country code, no + or spaces. Example: 919876543210 */
  whatsappNumber: "",
  whatsappMessage:
    "Hi, I'm interested in getting a website for my business. I'd like to discuss my requirements.",
  /** TODO: replace with a Google Maps embed URL for your location */
  mapsEmbedUrl: "",
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

export const trustStats = [
  { value: "[XX]+", label: "Projects completed" },
  { value: "[XX]+", label: "Businesses served" },
  { value: "[XX]+", label: "Industries covered" },
  { value: "[XX]%", label: "Client satisfaction" },
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
    slug: "website-design",
    title: "Website Design",
    description: "Custom UI/UX designed around your brand and your customers.",
    icon: "PenTool",
    details: [
      "Brand-aligned visual direction and design system",
      "Wireframes and page-level content structure",
      "Desktop, tablet and mobile design",
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    description: "Fast, responsive and scalable websites built on a modern stack.",
    icon: "Code2",
    details: [
      "Component-based, maintainable front-end code",
      "Responsive across every common breakpoint",
      "Performance-conscious build and deployment",
    ],
  },
  {
    slug: "landing-pages",
    title: "Landing Pages",
    description: "High-converting landing pages for campaigns and lead generation.",
    icon: "Target",
    details: ["Single-goal page structure", "Lead capture forms and tracking hooks", "Ad and campaign ready"],
  },
  {
    slug: "business-websites",
    title: "Business Websites",
    description: "Professional websites for companies and local businesses.",
    icon: "Building2",
    details: ["Service, about and contact architecture", "Local SEO foundations", "Enquiry-first layout"],
  },
  {
    slug: "ecommerce",
    title: "E-commerce Websites",
    description: "Online stores designed for smooth, trustworthy shopping experiences.",
    icon: "ShoppingBag",
    details: ["Catalogue and product page design", "Checkout and payment integration", "Order and inventory workflows"],
  },
  {
    slug: "website-redesign",
    title: "Website Redesign",
    description: "Transform outdated websites into modern digital experiences.",
    icon: "RefreshCw",
    details: ["Audit of the existing site", "Content and structure rework", "Migration without losing search equity"],
  },
  {
    slug: "seo",
    title: "SEO Optimization",
    description: "Technical and on-page SEO foundations for better search visibility.",
    icon: "Search",
    details: ["Metadata, schema and sitemap setup", "Heading and content structure", "Core Web Vitals attention"],
  },
  {
    slug: "maintenance",
    title: "Website Maintenance",
    description: "Ongoing updates, improvements and technical support after launch.",
    icon: "LifeBuoy",
    details: ["Content and section updates", "Security and dependency updates", "Monthly improvement suggestions"],
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
  { title: "Custom Design", text: "Every website is designed around the business, never dropped into a template.", icon: "Sparkles" },
  { title: "Mobile First", text: "Optimized for phones, tablets and desktops from the first wireframe.", icon: "Smartphone" },
  { title: "Conversion Focused", text: "Designed around enquiries, calls, bookings and sales - not decoration.", icon: "TrendingUp" },
  { title: "Fast Performance", text: "Performance-conscious development with lean assets and clean code.", icon: "Zap" },
  { title: "SEO Ready", text: "Built with technical SEO fundamentals in place from day one.", icon: "Search" },
  { title: "Transparent Process", text: "Clear communication, defined scope and no surprises mid-project.", icon: "ShieldCheck" },
  { title: "Ongoing Support", text: "Support and improvements continue after launch day.", icon: "LifeBuoy" },
];

export const processSteps = [
  { step: "01", title: "Discovery", text: "Understand the business, audience and goals." },
  { step: "02", title: "Strategy", text: "Create the sitemap, content structure and conversion strategy." },
  { step: "03", title: "Design", text: "Create the UI/UX and the visual direction." },
  { step: "04", title: "Development", text: "Build the responsive, production-ready website." },
  { step: "05", title: "Testing", text: "Test performance, responsiveness, forms and functionality." },
  { step: "06", title: "Launch", text: "Deploy the website and configure the required services." },
  { step: "07", title: "Support", text: "Provide ongoing maintenance and improvements." },
];

export const industries = [
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

/** Set `price` to a real figure when you are ready. Keep `priceNote` for context. */
export const pricingPlans = [
  {
    name: "Starter",
    subtitle: "For small businesses starting online.",
    price: "[Price]",
    priceNote: "One-time project fee",
    featured: false,
    features: [
      "Professional business website",
      "Up to 5 pages",
      "Responsive design",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO",
      "Deployment",
    ],
    cta: "Get Started",
  },
  {
    name: "Professional",
    subtitle: "For growing businesses.",
    price: "[Price]",
    priceNote: "One-time project fee",
    featured: true,
    features: [
      "Custom UI/UX",
      "Up to 10 pages",
      "Advanced responsive design",
      "WhatsApp integration",
      "Lead forms",
      "Google Maps",
      "SEO setup",
      "Analytics",
      "Performance optimization",
      "Deployment",
    ],
    cta: "Most Popular — Start Your Project",
  },
  {
    name: "Custom",
    subtitle: "For businesses requiring advanced functionality.",
    price: "[Custom Quote]",
    priceNote: "Scoped after discovery",
    featured: false,
    features: [
      "Custom design",
      "Advanced functionality",
      "CMS",
      "Database",
      "E-commerce",
      "API integrations",
      "Advanced SEO",
      "Custom dashboards",
      "Ongoing support",
    ],
    cta: "Discuss Your Project",
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

export const testimonials: Testimonial[] = [
  { quote: "Client testimonial will appear here.", name: "[Client Name]", position: "[Position]", company: "[Company]", rating: null, photo: null, isPlaceholder: true },
  { quote: "Client testimonial will appear here.", name: "[Client Name]", position: "[Position]", company: "[Company]", rating: null, photo: null, isPlaceholder: true },
  { quote: "Client testimonial will appear here.", name: "[Client Name]", position: "[Position]", company: "[Company]", rating: null, photo: null, isPlaceholder: true },
];

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
  "₹1,00,000 – ₹3,00,000",
  "₹3,00,000+",
  "Not sure yet",
];

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
  "A new website",
  "Redesign an existing website",
  "Landing page for a campaign",
  "E-commerce store",
  "SEO improvement",
  "Maintenance & support",
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
