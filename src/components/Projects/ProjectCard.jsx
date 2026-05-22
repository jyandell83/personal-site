const ProjectCard = ({ project }) => {
  return (
    <article className="project-card">
      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <ul className="tech-list">
          {project.tech.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="project-links">
        <a href={project.liveUrl} target="_blank" rel="noreferrer">
          Live Site
        </a>

        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          GitHub
        </a>
      </div>
    </article>
  );
};

export default ProjectCard;
