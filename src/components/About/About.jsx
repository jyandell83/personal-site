const About = () => {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="section-header">
        <p className="section-label">About</p>
        <h2 id="about-heading">
          Frontend engineer with a product-minded approach.
        </h2>
      </div>

      <div className="about-content">
        <p>
          I’m a frontend-focused software engineer with 5+ years of experience
          building production web applications in enterprise fintech
          environments.
        </p>

        <p>
          My work has focused on turning complex data, workflows, and business
          requirements into clean, maintainable user interfaces used by real
          clients and internal teams.
        </p>

        <p>
          I’m especially interested in data-heavy interfaces, thoughtful UI
          architecture, API-driven applications, and building software that
          feels clear and reliable for users.
        </p>
      </div>
    </section>
  );
};

export default About;
