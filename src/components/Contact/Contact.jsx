const Contact = () => {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-heading">
      <div className="section-header">
        <p className="section-label">Contact</p>

        <h2 id="contact-heading">Interested in working together?</h2>
      </div>

      <p className="contact-copy">
        I’m currently open to frontend engineering opportunities, especially
        roles focused on React, data-driven interfaces, and thoughtful user
        experiences.
      </p>

      <div className="contact-links">
        <a
          className="btn btn-primary"
          href="https://www.linkedin.com/in/jeremy-yandell"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn
        </a>

        <a
          className="btn btn-secondary"
          href="https://github.com/jyandell83"
          target="_blank"
          rel="noreferrer"
        >
          View GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
