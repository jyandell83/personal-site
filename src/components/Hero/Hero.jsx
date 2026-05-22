const Hero = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <p className="hero-label">Senior Frontend Engineer</p>

      <h1 id="hero-heading">
        I build clean, data-driven web applications for complex user workflows.
      </h1>

      <p className="hero-copy">
        Frontend-focused software engineer with 5+ years of experience building
        production web applications in fintech environments. I specialize in
        React, Angular, TypeScript, API integrations, and polished user
        interfaces.
      </p>

      <div className="hero-actions" aria-label="Hero actions">
        <a className="btn btn-primary" href="#projects">
          View Projects
        </a>

        <a
          className="btn btn-secondary"
          href="/Jeremy_Yandell_Resume.pdf"
          target="_blank"
          rel="noreferrer"
        >
          View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
