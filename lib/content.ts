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
  skills: string[];
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
    skills: ["Requirements analysis", "Project planning", "Critical path scheduling", "Automated testing"],
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
    skills: ["Stakeholder interviews", "Business requirements", "Real-time applications", "Access control testing"],
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
    skills: ["Business rules", "Full-stack development", "Data integrity", "End-to-end testing"],
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
    skills: ["Product analytics", "A/B testing", "REST API testing", "Database integration testing"],
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
  { role: "Immigration Consultant · Client Coordination", org: "HOF Global", dates: "Dec 2025 – Aug 2026", note: "Client enquiries, document follow-ups and organised case handoffs.", details: [
    "Handled client enquiries and clarified the information or documents needed for the next step in a case.",
    "Maintained CRM records covering client conversations, document status and outstanding follow-up actions.",
    "Coordinated document follow-ups so case information stayed organised and ready for review.",
    "Prepared clear handoff context, helping the next person pick up a case without losing the conversation history."
  ], focus: ["Client communication", "CRM records", "Document coordination", "Case handoffs"] },
  { role: "Sales Development Representative · Lead Qualification", org: "ibex. Pakistan", dates: "Dec 2024 – 2025", note: "Prospect conversations, lead qualification and consistent follow-through.", details: [
    "Spoke with prospective customers to understand their needs and assess whether a lead was suitable for the next sales step.",
    "Recorded conversation outcomes and relevant customer context for follow-up.",
    "Kept next actions clear through follow-up conversations and organised sales handoff notes.",
    "Built practical experience in asking focused questions, explaining information clearly and handling customer conversations."
  ], focus: ["Lead qualification", "Discovery conversations", "Follow-up", "Sales handoffs"] },
  { role: "Project Management Intern", org: "iTechGemini", dates: "May – Aug 2024", note: "Sprint coordination, project records and action tracking.", details: [
    "Supported task and sprint tracking in Jira and ClickUp, keeping work records organised for the project team.",
    "Maintained sprint notes and project records so progress and next steps were easy to review.",
    "Captured meeting actions and followed their status through subsequent updates.",
    "Helped prepare status updates that kept project discussions connected to tracked work."
  ], focus: ["Jira", "ClickUp", "Sprint records", "Meeting actions", "Status reporting"] },
  { role: "Sales Development Representative · Client Outreach", org: "LiveAdmins / CallStorm", dates: "2023 – 2024", note: "Prospect research, outreach support and client record management.", details: [
    "Researched prospects to prepare for more relevant outreach and discovery conversations.",
    "Supported discovery calls and recorded useful context from prospect discussions.",
    "Scheduled follow-ups and maintained client records to support continuity between conversations.",
    "Developed a foundation in client-facing communication, preparation and consistent follow-through."
  ], focus: ["Prospect research", "Client outreach", "Scheduling", "Client records"] },
];

export const recognition = [
  { title: "PF & OOP Star Performer", note: "Programming Fundamentals and Object-Oriented Programming" },
  { title: "Merit-based full scholarship", note: "Aitchison College, Lahore" },
  { title: "Exceptional High Achiever Award", note: "Aitchison College, Lahore" },
];

export const toolkit = ["TypeScript", "Next.js", "SQL", "Supabase", "Playwright", "Vitest", "Jira", "ClickUp", "HubSpot"];

export const repoUrl = (repo: string, path?: string) => `${GITHUB}/${repo}${path ? `/blob/main/${path}` : ""}`;
