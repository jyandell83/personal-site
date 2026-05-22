const Experience = () => {
  return (
    <section
      className="experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="section-header">
        <p className="section-label">Experience</p>

        <h2 id="experience-heading">
          Building production software for real users.
        </h2>
      </div>

      <div className="experience-list">
        <article className="experience-item">
          <div className="experience-meta">
            <p className="experience-company">InvestCloud</p>

            <p className="experience-date">2020 — 2026</p>
          </div>

          <div className="experience-content">
            <h3>Senior Frontend Engineer</h3>

            <p>
              Built and maintained enterprise fintech web applications used by
              financial institutions and internal teams. Worked closely with
              product, design, and backend engineers to deliver scalable
              user-facing features and complex workflow interfaces.
            </p>

            <ul>
              <li>
                Led frontend development for goal-based financial planning
                applications.
              </li>

              <li>
                Built reusable UI patterns and scalable frontend workflows for
                enterprise clients.
              </li>

              <li>
                Collaborated across teams to troubleshoot API, authentication,
                and data integration issues.
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experience;
