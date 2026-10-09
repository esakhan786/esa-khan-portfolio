import React, { useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  AtSign,
  BrainCircuit,
  Check,
  Code2,
  Download,
  ExternalLink,
  Github,
  Layers3,
  Linkedin,
  MapPin,
  Menu,
  MessageSquareText,
  Network,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import { certifications, profile, projects, skills } from "./content.js";

const navigation = [
  ["About", "about"],
  ["Skills", "skills"],
  ["Projects", "projects"],
  ["Experience", "experience"],
  ["Certifications", "certifications"],
  ["Contact", "contact"],
];

const categoryIcons = {
  brain: BrainCircuit,
  sparkles: Sparkles,
  workflow: Workflow,
  layers: Layers3,
};

function SocialLink({ href, label, children }) {
  if (!href) {
    return (
      <span className="social-link unavailable" aria-label={`${label} URL not added`}>
        {children}
        <span>{label}</span>
      </span>
    );
  }
  return (
    <a className="social-link" href={href} target="_blank" rel="noreferrer">
      {children}
      <span>{label}</span>
      <ArrowUpRight size={14} aria-hidden="true" />
    </a>
  );
}

function Portrait() {
  return (
    <div className="portrait-frame">
      {profile.photo ? (
        <img
          className="portrait-image"
          src={profile.photo}
          alt={`${profile.name} portrait`}
          decoding="async"
          fetchPriority="high"
        />
      ) : (
        <div className="portrait-placeholder" aria-label="Portrait image placeholder">
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <div className="portrait-monogram">EK</div>
          <span className="portrait-caption">YOUR PHOTO HERE</span>
        </div>
      )}
      <div className="portrait-label">
        <span className="status-dot" />
        <span>AI / ML ENGINEER</span>
      </div>
      <div className="portrait-index">01 — 06</div>
    </div>
  );
}

function ProjectVisual({ project }) {
  const { number, screenshot, title, visual: type } = project;

  if (screenshot) {
    return (
      <div className={`project-visual visual-${type}`}>
        <img
          className="project-screenshot"
          src={screenshot}
          alt={`${title} project screenshot`}
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div className={`project-visual visual-${type}`}>
      <div className="visual-grid" />
      <span className="visual-number">{number}</span>
      <div className="visual-content" aria-hidden="true">
      {type === "gigcraft" && (
        <div className="gig-graphic">
          <span className="graphic-label">SKILL MATCH</span>
          <div className="match-ring"><span>AI</span></div>
          <div className="match-lines"><i /><i /><i /></div>
          <div className="match-chip">Career intelligence</div>
        </div>
      )}
      {type === "rag" && (
        <div className="rag-graphic">
          <div className="rag-node node-source"><span>DOCS</span></div>
          <div className="rag-link link-one" />
          <div className="rag-node node-vector"><Network size={19} /><span>VECTOR</span></div>
          <div className="rag-link link-two" />
          <div className="rag-node node-answer"><Sparkles size={18} /><span>ANSWER</span></div>
        </div>
      )}
      {type === "analyzer" && (
        <div className="browser-graphic">
          <div className="browser-top"><i /><i /><i /><span>PAGE INSIGHTS</span></div>
          <div className="browser-content">
            <div className="browser-copy"><b /><i /><i /><i /></div>
            <div className="insight-card"><Sparkles size={16} /><b /><i /><i /></div>
          </div>
        </div>
      )}
      {type === "code" && (
        <div className="code-graphic">
          <div className="code-top"><span /><span /><span /><b>assistant.py</b></div>
          <div className="code-lines">
            <span>01</span><i className="code-blue">def</i> <i>review_code</i>(source):
            <span>02</span><i className="code-purple">  result</i> = model.analyze(source)
            <span>03</span><i className="code-green">  if</i> result.has_errors:
            <span>04</span>    <i className="code-green">return</i> fix(result)
          </div>
          <div className="code-check"><Check size={15} /> iterative review</div>
        </div>
      )}
      {type === "fraud" && (
        <div className="fraud-graphic">
          <div className="chart-head"><span>TRANSACTION SIGNALS</span><span>ML PIPELINE</span></div>
          <div className="chart-columns">{[34, 52, 39, 69, 46, 82, 57, 94, 62, 76, 48, 88].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          <div className="chart-foot"><span>FEATURES</span><ArrowRight size={14} /><span>CLASSIFIER</span><ArrowRight size={14} /><span>REVIEW</span></div>
        </div>
      )}
      {type === "trainer" && (
        <div className="trainer-graphic">
          <div className="trainer-ring"><span>MOVE<br />WITH INTENT</span></div>
          <div className="trainer-stats"><span>MODEL STATUS</span><b><i /> READY</b><span>STREAMLIT APP</span></div>
        </div>
      )}
      {type === "attendance" && (
        <div className="attendance-graphic">
          <div className="attendance-scan"><span /><i /><b>IDENTITY INPUT</b></div>
          <div className="attendance-flow">
            <div><span className="attendance-face">◉</span><b>FACE</b></div>
            <ArrowRight size={16} />
            <div><span className="attendance-wave">)))</span><b>VOICE</b></div>
            <ArrowRight size={16} />
            <div className="attendance-record"><Check size={17} /><b>LOGGED</b></div>
          </div>
        </div>
      )}
      {type === "resume" && (
        <div className="resume-graphic">
          <div className="resume-sheet">
            <div className="resume-sheet-head"><span>PROFILE</span><span>AI ANALYSIS</span></div>
            <div className="resume-profile"><i /><div><b /><i /></div></div>
            <div className="resume-lines"><i /><i /><i /><i /></div>
            <div className="resume-skills"><span>PYTHON</span><span>ML</span><span>NLP</span></div>
          </div>
          <div className="resume-insight"><Sparkles size={15} /><span>SKILLS EXTRACTED</span><b>Profile insights</b></div>
        </div>
      )}
      {type === "blog" && (
        <div className="blog-graphic">
          <span className="blog-label">HUMAN-IN-THE-LOOP WORKFLOW</span>
          <div className="blog-flow">
            <div><Sparkles size={16} /><b>RESEARCH</b></div><ArrowRight size={15} />
            <div><Code2 size={16} /><b>DRAFT</b></div><ArrowRight size={15} />
            <div className="blog-review"><Check size={16} /><b>REVIEW</b></div>
          </div>
          <span className="blog-output">FINAL ARTICLE</span>
        </div>
      )}
      {type === "price" && (
        <div className="price-graphic">
          <div className="price-chart-label"><span>MODEL PREDICTION</span><span>LINEAR REGRESSION</span></div>
          <div className="price-chart">
            <i /><i /><i /><i /><i /><span />
          </div>
          <div className="price-axis"><span>VEHICLE FEATURES</span><ArrowRight size={14} /><b>ESTIMATED PRICE</b></div>
        </div>
      )}
      {type === "spam" && (
        <div className="spam-graphic">
          <span className="spam-label">MESSAGE CLASSIFIER</span>
          <div className="spam-message"><span>INCOMING MESSAGE</span><i /><i /><i /></div>
          <ArrowRight size={17} />
          <div className="spam-result"><Check size={17} /><b>CLASSIFIED</b><span>TF-IDF + MODEL</span></div>
        </div>
      )}
      {type === "plagiarism" && (
        <div className="plagiarism-graphic">
          <span className="plagiarism-label">TEXT SIMILARITY</span>
          <div className="plagiarism-doc"><b>DOCUMENT A</b><i /><i /><i /></div>
          <div className="similarity-core"><Network size={20} /><span>TF-IDF</span></div>
          <div className="plagiarism-doc"><b>DOCUMENT B</b><i /><i /><i /></div>
          <div className="similarity-link" />
        </div>
      )}
      </div>
      <span className="visual-caption">ARCHITECTURE ILLUSTRATION · ADD SCREENSHOT IN CONTENT.JS</span>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectVisual project={project} />
      <div className="project-body">
        <div className="project-heading">
          <div>
            <p className="project-subtitle">{project.subtitle}</p>
            <h3>{project.title}</h3>
          </div>
          <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={19} /></span>
        </div>
        <p className="project-description">{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        <div className="project-actions">
          {project.github ? (
            <a href={project.github} target="_blank" rel="noreferrer"><Github size={15} /> GitHub <ExternalLink size={12} /></a>
          ) : (
            <span className="link-pending"><Github size={15} /> Repository <small>URL not provided</small></span>
          )}
          {project.demo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={14} /></a>
          ) : (
            <span className="link-pending">Live demo <small>not configured</small></span>
          )}
          {project.youtube !== undefined && (
            project.youtube ? (
              <a href={project.youtube} target="_blank" rel="noreferrer">YouTube <ArrowUpRight size={14} /></a>
            ) : (
              <span className="link-pending">YouTube <small>URL not provided</small></span>
            )
          )}
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  function handleContactSubmit(event) {
    event.preventDefault();
    if (!profile.email) {
      setFormMessage("The form is ready, but an email address or form service must be added before messages can be sent.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.get("name")}`);
    const body = encodeURIComponent(
      `${formData.get("message")}\n\nFrom: ${formData.get("name")} (${formData.get("email")})`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setFormMessage("Your email app should open with your message ready to send.");
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Esa Khan, home">
          <span className="wordmark-mark">E<span>.</span></span>
          <span className="wordmark-name">ESA KHAN</span>
        </a>
        <button
          className="mobile-menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
        <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={closeMenu}>{label}</a>
          ))}
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let&apos;s talk <ArrowUpRight size={14} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-shell" id="home">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-line" /> AI / ML ENGINEER <span className="eyebrow-location">— {profile.location}</span></p>
            <h1>AI/ML Engineer<br /><span>GenAI · RAG · AI Agents</span></h1>
            <p className="hero-summary">
              I&apos;m {profile.name}, an AI/ML Engineer building with machine learning, retrieval-augmented generation, large language models, and agentic workflows.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Contact me <ArrowUpRight size={16} /></a>
              {profile.resume ? (
                <a className="button button-quiet" href={profile.resume} download="Esa-Khan-CV.pdf">Download resume <Download size={16} /></a>
              ) : (
                <span className="button button-quiet button-disabled" aria-disabled="true">Resume not configured</span>
              )}
            </div>
            <div className="hero-socials" aria-label="Professional profiles">
              <SocialLink href={profile.github} label={profile.github ? "GitHub" : "GitHub URL not configured"}><Github size={15} /></SocialLink>
              <SocialLink href={profile.linkedin} label={profile.linkedin ? "LinkedIn" : "LinkedIn URL not configured"}><Linkedin size={15} /></SocialLink>
            </div>
            <div className="hero-footnote"><span className="status-dot" /> OPEN TO IMPACTFUL AI / ML OPPORTUNITIES</div>
          </div>
          <div className="hero-art">
            <div className="hero-art-glow" />
            <Portrait />
            <div className="hero-orbit-note note-top"><span>FOCUS</span><b>GenAI · RAG · Agents</b></div>
            <div className="hero-orbit-note note-bottom"><span>BASED IN</span><b>Abbottabad, PK</b></div>
            <span className="hero-coordinate">34°09&apos;N&nbsp; 73°13&apos;E</span>
          </div>
          <a className="scroll-cue" href="#about"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /></a>
        </section>

        <section className="about-section section-shell section-space" id="about">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> A LITTLE ABOUT ME</p>
            <span className="section-count">01 / ABOUT</span>
          </div>
          <div className="about-grid">
            <h2>Making complex<br />technology <span>useful.</span></h2>
            <div className="about-copy">
              <p>
                I&apos;m an AI/ML Engineer who enjoys turning complex problems into practical, AI-powered solutions. My work spans machine learning, Generative AI, large language models, retrieval-augmented generation, AI agents, and automation workflows.
              </p>
              <p>
                I like building intelligent backends, integrating LLMs, and connecting the pieces into end-to-end systems people can actually use. I&apos;m currently studying Computer Science at COMSATS University Islamabad, Abbottabad Campus.
              </p>
              <a className="text-link" href="#experience">A little more about my journey <ArrowRight size={15} /></a>
            </div>
          </div>
          <div className="about-meta">
            <div><span>BASED IN</span><b><MapPin size={14} /> Abbottabad, Pakistan</b></div>
            <div><span>STUDYING</span><b>BS Computer Science</b></div>
            <div><span>GRADUATING</span><b>December 2026</b></div>
            <div><span>CAREER FOCUS</span><b>Real-world AI products</b></div>
          </div>
        </section>

        <section className="skills-section section-shell section-space" id="skills">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> WHAT I WORK WITH</p>
            <span className="section-count">02 / SKILLS</span>
          </div>
          <div className="section-intro">
            <h2>A practical<br /><span>AI toolkit.</span></h2>
            <p>A growing set of tools and techniques for taking AI ideas from experimentation to useful applications.</p>
          </div>
          <div className="skills-grid">
            {skills.map((group, index) => {
              const Icon = categoryIcons[group.icon];
              return (
                <article className="skill-card" key={group.category}>
                  <div className="skill-card-top"><span>0{index + 1}</span><Icon size={19} strokeWidth={1.6} /></div>
                  <h3>{group.category}</h3>
                  <ul>{group.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>
                </article>
              );
            })}
          </div>
        </section>

        <section className="projects-section section-shell section-space" id="projects">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> SELECTED PROJECTS</p>
            <span className="section-count">03 / WORK</span>
          </div>
          <div className="section-intro projects-intro">
            <h2>Ideas, built<br /><span>into systems.</span></h2>
            <p>A selection of AI and machine learning projects centered on practical applications, useful workflows, and thoughtful engineering.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => <ProjectCard project={project} key={project.number} />)}
          </div>
        </section>

        <section className="experience-section section-shell section-space" id="experience">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> WHERE I CONTRIBUTE</p>
            <span className="section-count">04 / EXPERIENCE</span>
          </div>
          <div className="experience-card">
            <div className="experience-marker"><span /></div>
            <div className="experience-company">
              <p className="eyebrow">PART-TIME EXPERIENCE</p>
              <h2>AI/ML Engineer</h2>
              <p className="company-name">TEKJEE</p>
            </div>
            <div className="experience-details">
              <p>Contributing to machine learning and AI-related tasks, practical AI application development, and intelligent solutions.</p>
              <span className="experience-note"><Code2 size={15} /> Building with a product-minded approach</span>
            </div>
          </div>
        </section>

        <section className="education-section section-shell section-space">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> THE FOUNDATION</p>
            <span className="section-count">05 / EDUCATION</span>
          </div>
          <div className="education-card">
            <div className="education-icon"><BrainCircuit size={23} strokeWidth={1.4} /></div>
            <div className="education-main">
              <p className="eyebrow">BACHELOR OF SCIENCE</p>
              <h2>Computer Science</h2>
              <p>COMSATS University Islamabad <span>—</span> Abbottabad Campus</p>
            </div>
            <div className="education-facts">
              <div><span>EXPECTED GRADUATION</span><b>December 2026</b></div>
              <div><span>CGPA</span><b>3.5 <small>/ 4.0</small></b></div>
            </div>
          </div>
        </section>

        <section className="cert-section section-shell section-space" id="certifications">
          <div className="section-heading">
            <p className="eyebrow"><span className="eyebrow-line" /> CONTINUOUS LEARNING</p>
            <span className="section-count">06 / CERTIFICATIONS</span>
          </div>
          <div className="cert-layout">
            <div className="cert-intro">
              <h2>Learning with<br /><span>intention.</span></h2>
              <p>Exploring the systems and ideas shaping practical AI.</p>
            </div>
            <div className="cert-list">
              {certifications.map((certification) => (
                <article className="cert-card" key={`${certification.issuer}-${certification.title}`}>
                  <div className="cert-image">
                    {certification.image ? <img src={certification.image} alt={`${certification.title} certificate`} /> : <Sparkles size={24} strokeWidth={1.5} />}
                  </div>
                  <div className="cert-copy">
                    <span>CERTIFICATE</span>
                    <h3>{certification.title}</h3>
                    <p>{certification.issuer}</p>
                  </div>
                  {certification.verificationUrl ? (
                    <a className="cert-verify" href={certification.verificationUrl} target="_blank" rel="noreferrer" aria-label={`Verify ${certification.title}`}><ArrowUpRight size={18} /></a>
                  ) : <span className="cert-verify pending" title="Add verification URL"><ExternalLink size={17} /></span>}
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section section-shell" id="contact">
          <div className="contact-top">
            <div>
              <p className="eyebrow"><span className="eyebrow-line" /> HAVE A GOOD PROBLEM?</p>
              <h2>Let&apos;s build something<br /><span>that matters.</span></h2>
              <p className="contact-intro">Interested in practical AI, a thoughtful collaboration, or a role where good engineering makes a difference? I&apos;d like to hear from you.</p>
            </div>
            <div className="contact-card">
              <div className="contact-card-icon"><MessageSquareText size={21} /></div>
              <p>OPEN TO A CONVERSATION</p>
              {profile.email ? (
                <a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<ArrowUpRight size={15} /></a>
              ) : (
                <span className="contact-email missing">Add your professional email</span>
              )}
              <div className="contact-divider" />
              <SocialLink href={profile.linkedin} label={profile.linkedin ? "LinkedIn" : "LinkedIn URL to add"}><Linkedin size={15} /></SocialLink>
              <SocialLink href={profile.github} label={profile.github ? "GitHub" : "GitHub URL to add"}><Github size={15} /></SocialLink>
              {profile.phone && <a className="social-link" href={`tel:${profile.phone}`}><AtSign size={15} /><span>{profile.phone}</span></a>}
              <div className="contact-location"><MapPin size={15} /> {profile.location}</div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading">
              <div><span>01</span><h3>Send a message</h3></div>
              <p>No backend is connected yet. Add an email or form service in <code>src/content.js</code> to enable delivery.</p>
            </div>
            <div className="form-fields">
              <label>Your name<input name="name" type="text" placeholder="How should I address you?" required /></label>
              <label>Your email<input name="email" type="email" placeholder="you@company.com" required /></label>
              <label className="message-field">Your message<textarea name="message" rows="4" placeholder="Tell me a little about what you have in mind..." required /></label>
            </div>
            <div className="form-bottom">
              <button className="button button-primary" type="submit">Prepare message <ArrowUpRight size={16} /></button>
              <p className="form-status" role="status" aria-live="polite">{formMessage}</p>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer section-shell">
        <a className="wordmark footer-wordmark" href="#home"><span className="wordmark-mark">E<span>.</span></span><span className="wordmark-name">ESA KHAN</span></a>
        <p>Thoughtfully building useful AI.</p>
        <div className="footer-links">
          {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>}
          {profile.github && <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={16} /></a>}
          {profile.email && <a href={`mailto:${profile.email}`} aria-label="Email"><AtSign size={16} /></a>}
          <a href="#home" aria-label="Back to top"><ArrowUpRight size={16} /></a>
        </div>
        <span className="copyright">© {new Date().getFullYear()} ESA KHAN</span>
      </footer>
    </>
  );
}

export default App;
