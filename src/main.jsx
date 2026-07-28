import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const profile = {
  name: 'XQ',
  title: 'Computer Science Student, Chongqing University',
  focus: 'Embodied AI · Multimodal Learning · Agent Systems · Computer Architecture',
  email: '38992488@qq.com',
  github: 'https://github.com/XXXXXQ-0206',
};

const researchInterests = [
  'Embodied intelligence systems that perceive, remember, reason, and act in the physical world.',
  'Personalized multimodal understanding with retrieval, verification, temporal evidence, and memory.',
  'Reliable agent workflows for real-world and human-in-the-loop settings.',
  'Computer architecture and embedded systems from RTL design through FPGA and Linux integration.',
];

const projects = [
  {
    name: 'EduMind',
    url: 'https://github.com/XXXXXQ-0206/EduMind',
    description:
      'AI education platform built around RAG, agent workflows, and course-material-aware assistance.',
  },
  {
    name: 'Gokumoku',
    url: 'https://github.com/XXXXXQ-0206/Gokumoku',
    description:
      'Hybrid Gomoku engine that combines proof data and strong search for practical play and analysis.',
  },
  {
    name: 'mips32-five-stage-cpu',
    url: 'https://github.com/XXXXXQ-0206/mips32-five-stage-cpu',
    description:
      'Five-stage pipelined MIPS32 CPU with SRAM-like and AXI interface variants.',
  },
  {
    name: 'zynq-ethernet-switch',
    url: 'https://github.com/XXXXXQ-0206/zynq-ethernet-switch',
    description:
      'Multi-port Ethernet switching with RTL, UIO utilities, and Vivado/PetaLinux integration.',
  },
];

const skills = [
  'Python',
  'C++',
  'C#',
  'React',
  'Vue',
  'FastAPI',
  'Docker',
  'Linux',
  'OpenAI APIs',
  'RAG',
  'LangChain',
  'LangGraph',
  'ROS 2',
  'Verilog',
  'Vivado',
  'PetaLinux',
  'FPGA',
];

function Section({ eyebrow, title, children }) {
  return (
    <section className="section" aria-labelledby={title.toLowerCase().replaceAll(' ', '-')}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={title.toLowerCase().replaceAll(' ', '-')}>{title}</h2>
      {children}
    </section>
  );
}

function App() {
  return (
    <main>
      <header className="hero">
        <nav className="nav" aria-label="Primary navigation">
          <a href="#research">Research</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="hero-grid">
          <div>
            <p className="kicker">Academic Homepage</p>
            <h1>{profile.name}</h1>
            <p className="subtitle">{profile.title}</p>
            <p className="focus">{profile.focus}</p>
            <div className="actions">
              <a className="button primary" href={`mailto:${profile.email}`}>
                Contact Me
              </a>
              <a className="button secondary" href={profile.github}>
                GitHub Profile
              </a>
            </div>
          </div>
          <aside className="profile-card" aria-label="Profile summary">
            <div className="avatar">XQ</div>
            <h2>Research Profile</h2>
            <p>
              I study systems that connect perception, memory, reasoning, and action, with an
              emphasis on grounded multimodal interaction and reliable autonomous behavior.
            </p>
          </aside>
        </div>
      </header>

      <Section eyebrow="About" title="Biography">
        <p>
          I am a Computer Science student in the Excellence Class at Chongqing University. My
          work explores embodied intelligence, personalized multimodal understanding, agentic
          systems, and computer architecture.
        </p>
        <p>
          I have also worked on SSVEP-based brain-computer interaction for humanoid assistance,
          including EEG intent decoding, incremental inverse kinematics with 50 Hz servo control,
          and dexterous-hand control driven by confidence-gated confirmation.
        </p>
      </Section>

      <Section eyebrow="Research" title="Research Interests">
        <ul id="research" className="interest-list">
          {researchInterests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Selected Work" title="Projects">
        <div id="projects" className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <h3>
                <a href={project.url}>{project.name}</a>
              </h3>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Technical Profile" title="Skills">
        <div className="skill-cloud" aria-label="Skills">
          {skills.map((skill) => (
            <span key={skill}>{skill}</span>
          ))}
        </div>
      </Section>

      <Section eyebrow="Contact" title="Get in Touch">
        <div id="contact" className="contact-card">
          <p>
            I am interested in research collaborations around embodied AI, multimodal agents,
            and intelligent systems that bridge software, hardware, and human interaction.
          </p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github}>github.com/XXXXXQ-0206</a>
        </div>
      </Section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
