// All copy lives here — edit this file to update the site.
export const profile = {
  name: "Jyon",
  year: 2026,
  role: "Ecommerce marketer",
  tagline:
    "I build Shopify stores, Klaviyo flows and automations that turn first-time visitors into repeat customers.",
  intro:
    "Email, funnels and the systems behind them. I set things up properly, connect the tools, and keep the data clean.",
  // TODO: replace with your real address
  email: "hello@example.com",
  photo: "/profile.webp",
  // Add the profiles you want shown in the hero card. Empty list = email only.
  socials: [] as { label: string; href: string }[],
};

export const stats = [
  { value: "10", label: "Core skills" },
  { value: "6", label: "Tools I work in daily" },
  { value: "4", label: "Steps in my process" },
];

export const services = [
  { title: "Shopify", sub: "Store setup, products and collections", icon: "shopify", tone: "orange" },
  { title: "Klaviyo", sub: "Flows, segments and campaigns", icon: "klaviyo", tone: "lime" },
  { title: "Email marketing", sub: "Newsletters and promos, built and tested", icon: "mail", tone: "orange" },
  { title: "Funnel marketing", sub: "From landing page to checkout", icon: "funnel", tone: "lime" },
  { title: "Automation with Make", sub: "Scenarios that connect your apps", icon: "make", tone: "orange" },
  { title: "Notion systems", sub: "Workspaces, trackers and team wikis", icon: "notion", tone: "lime" },
  { title: "Canva design", sub: "Email banners, ads and social graphics", icon: "canva", tone: "orange" },
  { title: "Office and data entry", sub: "Excel, Word and accurate records", icon: "office", tone: "lime" },
] as const;

export const process = [
  { step: "Step 1", title: "Audit", text: "Look at the store, the list and the tools already in place to find what is missing or broken." },
  { step: "Step 2", title: "Build", text: "Set up the Shopify pages, Klaviyo flows and email templates, written and designed to match your brand." },
  { step: "Step 3", title: "Automate", text: "Connect the apps with Make so orders, leads and tasks move without manual copying." },
  { step: "Step 4", title: "Review", text: "Check the numbers, tidy the data, and adjust what is not working." },
];

export const tools = [
  { name: "Shopify", kind: "Ecommerce platform", tone: "#95bf47" },
  { name: "Klaviyo", kind: "Email and SMS", tone: "#ffffff" },
  { name: "Make", kind: "Automation", tone: "#a259ff" },
  { name: "Notion", kind: "Workspace", tone: "#ffffff" },
  { name: "Canva", kind: "Design tool", tone: "#00c4cc" },
  { name: "Microsoft Office", kind: "Word, Excel, PowerPoint", tone: "#ff5c35" },
];

export const needOptions = [
  "Shopify store",
  "Klaviyo flows",
  "Email campaigns",
  "Funnel build",
  "Automation (Make)",
  "Notion setup",
  "Design (Canva)",
  "Data entry / admin",
  "Something else",
];
