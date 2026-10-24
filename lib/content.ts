// Every fact on the page lives here, sourced from the project repos, their test reports and Ahmed's CVs.
// No invented metrics, clients or credentials. Test numbers are copied from each repo's docs/test-report.

export const GITHUB = "https://github.com/iahmedmalik";
export const LINKEDIN = "https://www.linkedin.com/in/ahmedmalik494/";
export const EMAIL = "ahmedmalikk494@gmail.com";

export type Project = {
  id: string;
  name: string;
  status: "Live" | "Prototype";
  statusNote: string;
  line: string;
  question: string;
  did: string;
  stack: string[];
  tests: { n: string; label: string }[];
  demo?: string;
  repo: string;
  docs: { label: string; path: string }[];
  file: string;
  film: string;
};

export const projects: Project[] = [
  {
    id: "flowplan",
    name: "FlowPlan",
    status: "Live",
    statusNote: "Live demo, no sign-up",
    question: "If one task is late, does the deadline move?",
    line: "A project planner that finds the critical path and shows how far every other task can slip.",
    did: "I wrote the PRD and test plan before the code, kept the scheduling maths in plain TypeScript with no React in it, and used FlowPlan to plan my own three-week portfolio sprint.",
    stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "Vitest", "Playwright"],
    tests: [
      { n: "132", label: "unit tests passed" },
      { n: "99", label: "system test runs passed" },
    ],
    demo: "https://flow-plan-five.vercel.app/",
    repo: "FlowPlan",
    docs: [
      { label: "Product brief (PRD)", path: "docs/PRD.md" },
      { label: "Test report", path: "docs/test-report.md" },
    ],
    file: "flowplan/src/lib/scheduler.ts",
    film: "36 s",
  },
  {
    id: "queuecare",
    name: "QueueCare",
    status: "Live",
    statusNote: "Live demo, public demo accounts",
    question: "How much longer until it's my turn?",
    line: "A live clinic queue: urgent patients first, fair for everyone else, and each patient follows the queue on their own phone.",
    did: "I interviewed a clinic receptionist and three patients in Lahore, turned what they said into a BRD and three priority rules, and kept names off every public screen with row-level security.",
    stack: ["Next.js 16", "Supabase", "Postgres RLS", "Realtime", "Playwright"],
    tests: [
      { n: "86", label: "unit tests passed" },
      { n: "16", label: "security checks passed" },
      { n: "98", label: "system tests passed on the live site" },
    ],
    demo: "https://queuecare-zeta.vercel.app/",
    repo: "QueueCare",
    docs: [
      { label: "Business requirements (BRD)", path: "docs/BRD.md" },
      { label: "Test report", path: "docs/test-report.md" },
    ],
    file: "queuecare/src/lib/priorityQueue.ts",
    film: "32 s",
  },
  {
    id: "committeekeeper",
    name: "CommitteeKeeper",
    status: "Live",
    statusNote: "v1.0 live, not yet used by a real committee",
    question: "Who paid, whose turn is it, and what changed?",
    line: "A tracker for kameti organisers: payments and receipts, turns and draws, and a history nobody can quietly change.",
    did: "I talked to an organiser who runs three or four committees at once, wrote the business rules before any code, and built a hash-chained history that the database refuses to edit or delete.",
    stack: ["Next.js 16", "TypeScript", "Supabase", "Vitest", "Playwright"],
    tests: [
      { n: "189", label: "unit tests" },
      { n: "226", label: "system test runs on the live site" },
    ],
    demo: "https://committeekeeper.vercel.app/",
    repo: "CommitteeKeeper",
    docs: [
      { label: "Business rules", path: "docs/business-rules.md" },
      { label: "Test report", path: "docs/test-report.md" },
    ],
    file: "committeekeeper/src/lib/history.ts",
    film: "37 s",
  },
  {
    id: "pulsemetrics",
    name: "PulseMetrics",
    status: "Prototype",
    statusNote: "Built and tested locally, not deployed yet",
    question: "Did version B really win?",
    line: "Product analytics for small apps: funnels, daily active browsers, and A/B tests that give a p-value and a verdict in plain English.",
    did: "I wrote the privacy rule first (no cookies, no page addresses, no free-text field anywhere), put the statistics in one shared package, and tested the API against a real Postgres.",
    stack: ["Next.js", "Express", "Postgres", "TypeScript", "Playwright"],
    tests: [
      { n: "103", label: "core logic tests passed" },
      { n: "155", label: "API and database tests passed" },
      { n: "199", label: "browser test runs passed" },
    ],
    repo: "PulseMetrics",
    docs: [
      { label: "Product brief (PRD)", path: "docs/PRD.md" },
      { label: "Test report", path: "docs/TEST-REPORT.md" },
    ],
    file: "pulsemetrics/packages/core/src/abtest.ts",
    film: "34 s",
  },
];

export const experience = [
  { role: "Immigration Consultant", org: "HOF Global", dates: "Dec 2025 – Aug 2026", note: "Client communication, CRM records, document follow-up and case handoffs." },
  { role: "Sales Development Representative", org: "ibex. Pakistan", dates: "Dec 2024 – 2025", note: "Prospect conversations, lead qualification, follow-up and handoff notes." },
  { role: "Project Manager Intern", org: "iTechGemini", dates: "May – Aug 2024", note: "Jira and ClickUp tracking, sprint records, meeting actions and status updates." },
  { role: "Sales Development Representative", org: "LiveAdmins / CallStorm", dates: "2023 – 2024", note: "Prospect research, discovery calls, scheduling and client records." },
];

export const recognition = [
  { title: "PF & OOP Star Performer", note: "Programming Fundamentals and Object-Oriented Programming" },
  { title: "Merit-based full scholarship", note: "Aitchison College, Lahore" },
  { title: "Exceptional High Achiever Award", note: "Aitchison College, Lahore" },
];

export const toolkit = ["TypeScript", "Next.js", "SQL", "Supabase", "Playwright", "Vitest", "Jira", "ClickUp", "HubSpot"];

export const repoUrl = (repo: string, path?: string) => `${GITHUB}/${repo}${path ? `/blob/main/${path}` : ""}`;
