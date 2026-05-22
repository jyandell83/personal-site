const Hero = () => {
  return (
    <section className="hero">
      <h1 className="eyebrow">Senior Frontend Engineer</h1>

      <p>
        I build clean, data-driven web applications for complex user workflows.
      </p>

      <p className="hero-copy">
        Frontend-focused software engineer with 5+ years of experience building
        production web applications in fintech environments. I specialize in
        React, Angular, TypeScript, API integrations, and polished user
        interfaces.
      </p>

      <div className="hero-actions">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>
        <a className="btn btn-secondary" href="/resume.pdf">
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
