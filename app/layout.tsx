import type { Metadata, Viewport } from "next";
import "@fontsource-variable/archivo/wdth.css";
import "@fontsource-variable/pixelify-sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed M. Setup",
  description: "Ahmed M. builds small web apps that answer one stubborn question each: FlowPlan, QueueCare, CommitteeKeeper and PulseMetrics, with demo films, code, documents and tests.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#3a2531" };

const CONTRACT = `<!--
THESIS: The portfolio as a warm shareware setup wizard: a strict running order of dialogs (Welcome, Projects, Read Me, Finish) instead of the category's hero + card grid.
OWN-WORLD: Warm putty dialog chrome with hard bevels on a dithered plum-brown desktop; burnt-orange title bars; block-stepped orange progress; a dithered pixel banner of Lahore at dusk down the left of each dialog; Archivo for reading, Pixelify Sans for chrome; a taskbar as navigation.
STORY: A recruiter sees what Ahmed builds in one sentence, watches each project's 30 s film, checks real tests and documents, reads his client-facing history, and emails him.
FIRST VIEWPORT: Full-width Setup dialog: banner left, H1 claim centre, live install panel right copying the four projects' real source files; Back / Next / Email Ahmed on the button bar; taskbar fixed at the bottom.
FORM: Shareware installer (user-chosen challenger, adopted over the assigned match-day programme). Seed 4c548afb.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
-->`;

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div hidden dangerouslySetInnerHTML={{ __html: CONTRACT }} />
        {children}
      </body>
    </html>
  );
}
