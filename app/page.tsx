import Contact from "../components/Contact";
import FilmPlayer from "../components/FilmPlayer";
import Installer from "../components/Installer";
import Taskbar from "../components/Taskbar";
import { EMAIL, GITHUB, LINKEDIN, experience, projects, recognition, repoUrl, toolkit } from "../lib/content";

const TitleBar = ({ title, id }: { title: string; id?: string }) => (
  <div className="titlebar" id={id}>
    <span className="titlebar-icon" aria-hidden="true" />
    <span className="titlebar-text">{title}</span>
    <span className="titlebar-btns" aria-hidden="true">
      <i className="tb-min" />
      <i className="tb-max" />
      <i className="tb-close" />
    </span>
  </div>
);

const Banner = ({ pos = "50% 100%" }: { pos?: string }) => (
  <div className="banner" aria-hidden="true">
    <img src="/art/banner.png" alt="" width="120" height="420" style={{ objectPosition: pos }} />
  </div>
);

const Ext = () => (
  <svg className="ext" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M4 2h6v6M10 2 3 9" fill="none" stroke="currentColor" strokeWidth="1.6" />
  </svg>
);

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <main id="main" className="desktop">
        {/* 1. Welcome */}
        <section className="dialog dialog-welcome" id="welcome" aria-labelledby="welcome-title">
          <TitleBar title="Ahmed M. Setup" />
          <div className="dialog-body">
            <Banner pos="50% 100%" />
            <div className="welcome-grid">
              <div className="welcome-copy">
                <h1 id="welcome-title">I'm Ahmed, a software engineer in Lahore who started out on the client side.</h1>
                <p className="lede">
                  I build small web apps around one real question each, like a clinic's "how much longer?" or a kameti's "who paid?". I write the
                  requirements and the tests as well as the code. Before this I worked in sales, immigration cases and project tracking.
                </p>
                <p className="meta">Software engineering · Client and project coordination · Open to remote work</p>
              </div>
              <Installer names={projects.map((p) => ({ name: p.name, file: p.file }))} />
            </div>
          </div>
          <div className="button-bar">
            <span className="step-count">Step 1 of 4</span>
            <span className="btn" aria-disabled="true">
              &lt; Back
            </span>
            <a className="btn btn-default" href="#components">
              Next &gt;
            </a>
            <a className="btn" href={`mailto:${EMAIL}`}>
              Email Ahmed
            </a>
          </div>
        </section>

        {/* 2. Select components */}
        <section className="dialog" id="components" aria-labelledby="components-title">
          <TitleBar title="Ahmed M. Setup · Select Components" />
          <div className="dialog-body">
            <Banner pos="50% 28%" />
            <div className="components">
              <h2 id="components-title">Four projects, each with its code, its documents and its tests.</h2>
              <p className="lede">Every one starts with a question somebody actually asked. Pick one to jump to its demo film, or keep scrolling to see them all.</p>
              <div className="listview" role="table" aria-label="Projects">
                <div className="lv-head" role="row">
                  <span role="columnheader">Component</span>
                  <span role="columnheader">The question it answers</span>
                  <span role="columnheader">Status</span>
                </div>
                {projects.map((p) => (
                  <a className="lv-row" role="row" key={p.id} href={`#${p.id}`}>
                    <span role="cell" className="lv-name">
                      <span className="check" aria-hidden="true" />
                      {p.name}
                    </span>
                    <span role="cell" className="lv-q">
                      {p.question}
                    </span>
                    <span role="cell" className={`lv-status ${p.status === "Live" ? "is-live" : "is-proto"}`}>
                      {p.status}
                    </span>
                  </a>
                ))}
              </div>
              <p className="hint">Plus an optional manual QA sample. Each has a demo film of about half a minute, made from the real app and its demo data.</p>
            </div>
          </div>
          <div className="button-bar">
            <span className="step-count">Step 2 of 4</span>
            <a className="btn" href="#welcome">
              &lt; Back
            </a>
            <a className="btn btn-default" href="#flowplan">
              Next &gt;
            </a>
          </div>
        </section>

        {/* 3. One dialog per project */}
        {projects.map((p, i) => (
          <section className="dialog dialog-project" id={p.id} key={p.id} aria-labelledby={`${p.id}-title`}>
            <TitleBar title={`${p.name} · Component ${i + 1} of ${projects.length}`} />
            <div className="dialog-body project-body">
              <FilmPlayer src={`/videos/${p.name}.mp4`} poster={`/videos/${p.name}-poster.jpg`} title={`${p.name} demo film`} length={p.film} />
              <div className="project-copy">
                <div className="project-head">
                  <h2 id={`${p.id}-title`}>{p.name}</h2>
                  <span className={`chip ${p.status === "Live" ? "is-live" : "is-proto"}`}>{p.statusNote}</span>
                </div>
                <p className="project-q">{p.question}</p>
                <p className="project-line">{p.line}</p>
                <fieldset className="groupbox">
                  <legend>What I did</legend>
                  <p>{p.did}</p>
                </fieldset>
                <dl className="tests">
                  {p.tests.map((t) => (
                    <div key={t.label}>
                      <dt>{t.n}</dt>
                      <dd>{t.label}</dd>
                    </div>
                  ))}
                </dl>
                <p className="stack">
                  <span>Built with</span> {p.stack.join(" · ")}
                </p>
              </div>
            </div>
            <div className="button-bar">
              {p.demo ? (
                <a className="btn btn-default" href={p.demo} target="_blank" rel="noreferrer">
                  Try the demo <Ext />
                </a>
              ) : (
                <span className="btn" aria-disabled="true" title="Not deployed yet">
                  No live demo yet
                </span>
              )}
              <a className={`btn${p.demo ? "" : " btn-default"}`} href={repoUrl(p.repo)} target="_blank" rel="noreferrer">
                Source code <Ext />
              </a>
              {p.docs.map((d) => (
                <a className="btn btn-doc" key={d.path} href={repoUrl(p.repo, d.path)} target="_blank" rel="noreferrer">
                  {d.label} <Ext />
                </a>
              ))}
            </div>
          </section>
        ))}

        {/* QA sample */}
        <section className="dialog dialog-small" id="qa" aria-labelledby="qa-title">
          <TitleBar title="Optional Component · Manual QA" />
          <div className="dialog-body qa-body">
            <svg className="qa-icon" viewBox="0 0 32 32" aria-hidden="true">
              <rect x="5" y="3" width="22" height="26" fill="#fffaf0" stroke="#2a221b" strokeWidth="2" />
              <rect x="11" y="1" width="10" height="5" fill="#c9bfab" stroke="#2a221b" strokeWidth="2" />
              <path d="m9 13 3 3 5-6M9 22h14M19 14h4" stroke="#2a221b" strokeWidth="2" fill="none" />
            </svg>
            <div>
              <h2 id="qa-title">SauceDemo manual QA sample</h2>
              <p>
                Test cases, execution records and defect reports for a public demo shop. Four login cases are recorded as executed; the wider scope is
                written down and marked as planned, not passed.
              </p>
            </div>
            <a className="btn" href={repoUrl("saucedemo-qa-testing")} target="_blank" rel="noreferrer">
              Read the QA sample <Ext />
            </a>
          </div>
        </section>

        {/* 4. Read me */}
        <section className="dialog" id="readme" aria-labelledby="readme-title">
          <TitleBar title="Ahmed M. Setup · Read Me" />
          <div className="dialog-body">
            <Banner pos="50% 62%" />
            <div className="readme">
              <h2 id="readme-title">Most of my work so far has been with clients.</h2>
              <div className="readme-cols">
                <div className="readme-text">
                  <p>
                    Sales calls, immigration cases, sprint boards. Working with prospects, customers and project teams taught me to ask the useful
                    question, make the next step clear and keep the details in order. I build the same way.
                  </p>
                  <p>
                    The part I like most is when a conversation becomes a requirement, the requirement becomes working software, and a test proves the
                    result. Off the clock, it's football.
                  </p>
                  <fieldset className="groupbox">
                    <legend>On my desk</legend>
                    <p>{toolkit.join(" · ")}</p>
                  </fieldset>
                  <fieldset className="groupbox">
                    <legend>Education and recognition</legend>
                    <ul className="plain">
                      <li>Computer Science coursework at UET Lahore; now studying at Virtual University</li>
                      {recognition.map((r) => (
                        <li key={r.title}>
                          <b>{r.title}</b>, {r.note}
                        </li>
                      ))}
                    </ul>
                  </fieldset>
                </div>
                <div className="sunken history" role="region" aria-label="Work history" tabIndex={0}>
                  <table>
                    <caption className="sr-only">Work history</caption>
                    <thead>
                      <tr>
                        <th scope="col">Role</th>
                        <th scope="col">Dates</th>
                      </tr>
                    </thead>
                    <tbody>
                      {experience.map((e) => (
                        <tr key={e.role + e.org}>
                          <td>
                            <b>{e.role}</b>
                            <span className="org" data-dates={e.dates}>{e.org}</span>
                            <span className="note">{e.note}</span>
                          </td>
                          <td className="dates">{e.dates}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="button-bar">
            <span className="step-count">Step 3 of 4</span>
            <a className="btn" href="#components">
              &lt; Back
            </a>
            <a className="btn btn-default" href="#contact">
              Next &gt;
            </a>
            <a className="btn" href={LINKEDIN} target="_blank" rel="noreferrer">
              LinkedIn <Ext />
            </a>
          </div>
        </section>

        {/* 5. Finish */}
        <section className="dialog dialog-finish" id="contact" aria-labelledby="contact-title">
          <TitleBar title="Ahmed M. Setup · Finish" />
          <div className="dialog-body">
            <Banner pos="50% 100%" />
            <div className="finish">
              <h2 id="contact-title">Setup is complete. Let's talk.</h2>
              <p className="lede">A role, a project, or a useful conversation. I'd be glad to hear from you.</p>
              <Contact email={EMAIL} github={GITHUB} linkedin={LINKEDIN} />
            </div>
          </div>
          <div className="button-bar">
            <span className="step-count">Step 4 of 4</span>
            <a className="btn" href="#readme">
              &lt; Back
            </a>
            <a className="btn btn-default" href={`mailto:${EMAIL}`}>
              Finish: send an email
            </a>
          </div>
        </section>

        <p className="colophon">
          Ahmed M. · Lahore, Pakistan · Built with Next.js. The banner art and the demo films were made for this site.{" "}
          <a href={`${GITHUB}/ahmed-portfolio`} target="_blank" rel="noreferrer">
            This site's source
          </a>
        </p>
      </main>
      <Taskbar />
    </>
  );
}
