# A little corner of the internet

Ahmed M.’s portfolio. A builder, a people person, and a football enthusiast in Lahore.

An original miniature studio sets the scene: say hello to the desk avatar, change the lighting, or drag to look around. Pip—the small orange companion—can answer questions about the work. Then get straight to the projects, code, requirements, testing, and experience.

## Have a look locally

```sh
npm ci
npm run dev
```

Open http://127.0.0.1:3107. Node.js 20.9+ required. No API keys or environment variables.

```sh
npm run typecheck
npm run build
npm run start
```

This repository is intentionally **not deployed**. There is no deployment workflow.

## What’s inside

- **Miniature 3D studio:** a hand-built Three.js scene with a stylized character, desk, window, plant and Pip. Drag, wave, evening light, reset. This is an illustrated character, not a photographic likeness.
- **Pip:** a local, curated portfolio guide. Free-text matching and quick questions cover projects, experience, QA, skills, education and contact. Unknown questions get an honest fallback. No LLM, chat service, stored messages, tracking or API cost.
- **Project stories:** real screenshots and direct demo, code and documentation links for FlowPlan, QueueCare and CommitteeKeeper, plus a manual QA sample.
- **Personal details:** football interaction, experience and recognition supplied by Ahmed’s representative and source CVs.
- **Accessible basics:** semantic navigation, keyboard controls, visible focus, responsive layouts, reduced-motion support and a WebGL fallback.

## Where to edit

| File | Purpose |
| --- | --- |
| `app/page.tsx` | Projects, experience, recognition, contact links |
| `components/Sculpture.tsx` | Original 3D scene and interactions |
| `components/Guide.tsx` | Pip’s conversation interface |
| `lib/ahmed.ts` | Curated answers and question matching |
| `components/OffClock.tsx` | Football interaction |
| `app/globals.css` | Colors, type, layout and responsive rules |
| `DESIGN.md` | Design decisions |

Next.js App Router · TypeScript · React · Three.js. Fonts are bundled locally through Fontsource (Space Grotesk and DM Sans).

## Content and sources

Projects are personal portfolio work, not claims of commercial deployments. There are no invented clients, metrics, degrees or certificates. No credential images are included. PF/OOP recognition and football interests were supplied directly; the scholarship and Aitchison award appear in the source CVs. Check issuer wording and evidence before adding certification claims.

Project screenshots were captured from Ahmed’s own public demos. No external portfolio code or art was copied. Inspiration research: [Emma Bostian’s directory](https://github.com/emmabostian/developer-portfolios), [Bruno Simon’s interactive world](https://bruno-simon.com/), and [Brittany Chiang’s readable project stories](https://brittanychiang.com/). The studio composition, avatar and Pip are original code-built assets.

[GitHub](https://github.com/ahmed-malikk) · [LinkedIn](https://www.linkedin.com/in/ahmedmalik494/) · [Email](mailto:ahmedmalikk494@gmail.com)
