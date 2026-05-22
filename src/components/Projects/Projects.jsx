import "./Projects.css";

import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "MLB Stats App",
    description:
      "Real-time baseball dashboard built with React and the MLB Stats API featuring live game updates, standings, player statistics, and responsive UI patterns.",
    tech: ["React", "Vite", "REST API", "CSS"],
    liveUrl: "https://live-mlb-dashboard.vercel.app/",
    githubUrl: "https://github.com/jyandell83/mlb-stats-app",
  },
  {
    title: "GuitGuide",
    description:
      "Interactive fretboard visualization tool for scales, tunings, and chord exploration across customizable guitar configurations.",
    tech: ["React", "JavaScript", "CSS"],
    liveUrl: "https://jyandell83.github.io/guit-guide/",
    githubUrl: "https://github.com/jyandell83",
  },
];

const Projects = () => {
  return (
    <section
      className="projects"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="section-header">
        <p className="section-label">Projects</p>

        <h2 id="projects-heading">Selected work and personal projects.</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
