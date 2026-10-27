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
    status: "Live",
    statusNote: "Live, free sign-up",
    question: "Did version B really win?",
    line: "Product analytics for small apps: funnels, daily active browsers, and A/B tests that give a p-value and a verdict in plain English.",
    did: "I wrote the privacy rule first (no cookies, no page addresses, no free-text field anywhere), put the statistics in one shared package, and tested the API against a real Postgres.",
    stack: ["Next.js", "Express", "Postgres", "TypeScript", "Playwright"],
    tests: [
      { n: "103", label: "core logic tests passed" },
      { n: "155", label: "API and database tests passed" },
      { n: "199", label: "browser test runs passed" },
    ],
    demo: "https://pulsemetrics-delta.vercel.app/",
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
  { role: "Program Consultant (Client Coordination)", org: "HOF Global", dates: "May 2026 – Oct 2026", note: "Client coordination, HubSpot CRM records and document handoffs with case-processing teams.", details: [
    "Explained service options, documentation requirements and next steps so clients understood the process and any outstanding actions.",
    "Maintained client profiles, case notes, follow-up activities and progress updates in HubSpot CRM.",
    "Coordinated document collection and handoffs with case-processing teams, following up on missing information.",
    "Communicated client requirements and case updates between clients and internal colleagues.",
    "Supported onboarding and continuity through organised records, clear expectations and timely follow-through."
  ], focus: ["Client communication", "HubSpot CRM", "Document coordination", "Case handoffs"] },
  { role: "Team Operations Associate (SME)", org: "ibex. Pakistan", dates: "Dec 2024 – May 2026", note: "Promoted to Subject Matter Expert (Operations) on US voice accounts for Walmart and FedEx.", details: [
    "Promoted from Customer Support Representative to Subject Matter Expert (Operations), supporting team operations, issue resolution and service quality on US voice accounts for Walmart and FedEx.",
    "Coordinated real-time operations, including schedule requests, break-related issues and changing floor requirements.",
    "Handled complex customer escalations and reviewed operational reports to help the team lead monitor performance and address recurring issues.",
    "Trained new customer service representatives and coached agents on quality assurance feedback, call handling and process adherence.",
    "Maintained accurate customer records and interaction histories in CRM and ticketing systems to support efficient follow-ups.",
    "Balanced competing priorities in a fast-paced environment while maintaining service quality and attention to detail.",
    "Recognised as a top performer during peak season."
  ], focus: ["Team operations", "Escalations", "Training & QA coaching", "CRM & ticketing"] },
  { role: "Project Manager Intern", org: "iTechGemini Pvt Ltd", dates: "Oct 2024 – Dec 2024", note: "Jira and ClickUp boards, sprint ceremonies, status updates and project records.", details: [
    "Maintained Jira and ClickUp task boards, keeping task status and sprint records current for the delivery team.",
    "Supported stand-ups, sprint planning and retrospectives by recording meeting actions, blockers and follow-up items.",
    "Prepared project status updates covering progress, outstanding tasks and items requiring attention.",
    "Maintained project timelines, risk logs, change records and supporting project documents.",
    "Recorded decisions and tracked agreed next steps to support communication between project participants."
  ], focus: ["Jira", "ClickUp", "Sprint ceremonies", "Status reporting", "Risk logs"] },
  { role: "Outreach Coordinator and Sales Operations", org: "LiveAdmins LLC", dates: "Sep 2023 – Oct 2024", note: "Prospect research, CRM records and discovery meetings with account colleagues.", details: [
    "Researched and qualified prospects using LinkedIn Sales Navigator and Apollo.",
    "Kept CRM records, account information, lead stages and follow-up schedules organised.",
    "Coordinated discovery meetings and follow-up communication between prospects and account colleagues, capturing needs and notes for informed handoffs.",
    "Worked with sales and account colleagues to keep outreach activity and client communication consistent."
  ], focus: ["Prospect research", "Sales Navigator & Apollo", "CRM records", "Discovery meetings"] },
  { role: "Sales Development Representative (Remote)", org: "CallStorm", dates: "May 2023 – Sep 2023", note: "Remote outreach to US-based prospects and organised CRM follow-ups.", details: [
    "Contacted US-based prospects remotely to introduce services, understand their needs and arrange discovery conversations.",
    "Recorded conversations, requirements and next steps in CRM records, keeping call schedules and follow-up calendars organised.",
    "Maintained lead information to support handoffs and ongoing client conversations while working fully remotely."
  ], focus: ["US prospect outreach", "Discovery calls", "CRM records", "Remote work"] },
];

export const recognition = [
  { title: "SQL (Basic), SQL (Intermediate) & SQL (Advanced)", note: "HackerRank certifications" },
  { title: "Project Management Training", note: "Project Management Institute (PMI)" },
  { title: "Merit-based full scholarship", note: "Aitchison College, Lahore" },
  { title: "Exceptional High Achiever Award", note: "Aitchison College, Lahore" },
];

export const toolkit = ["TypeScript", "Next.js", "SQL", "Supabase", "Playwright", "Vitest", "Jira", "ClickUp", "HubSpot"];

export const repoUrl = (repo: string, path?: string) => `${GITHUB}/${repo}${path ? `/blob/main/${path}` : ""}`;
