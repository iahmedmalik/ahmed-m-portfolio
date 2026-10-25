import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahmed M. — Software Engineer & Project Coordinator",
  description: "Ahmed M., software engineer in Lahore. TypeScript and Next.js development, software QA, automated testing, requirements analysis and project coordination. Explore projects, demo films and test evidence.",
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#1c1e1b" };

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <div hidden dangerouslySetInnerHTML={{__html: "<!-- THESIS: Ahmed’s work as a film studio and project gallery. OWN-WORLD: charcoal, warm white, chartreuse, Barlow Condensed and Chivo; thin seams and real app imagery. STORY: watch a film, inspect a project, review evidence, contact Ahmed. FIRST VIEWPORT: direct two-line headline, introduction and a side-positioned illustrated avatar in an interactive checkerboard room, then four independent project films and descriptions. FORM: user-selected film studio with restored full project showcases and Three.js depth; seed 50121416 overridden by explicit user preference. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance -->"}} />
        {children}
      </body>
    </html>
  );
}
