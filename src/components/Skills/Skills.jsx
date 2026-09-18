const skillGroups = [
  {
    category: "Frontend",
    skills: [
      "React",
      "Angular",
      "JavaScript",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Vite",
      "RxJS",
      "Reactive Forms",
    ],
  },
  {
    category: "Backend",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "REST APIs",
      "JWT Authentication",
      "HTTP-Only Cookies",
    ],
  },
  {
    category: "UI / UX",
    skills: [
      "Responsive Design",
      "Accessibility",
      "Cross-Browser Compatibility",
      "Component Architecture",
      "Design Systems",
    ],
  },
  {
    category: "Data & APIs",
    skills: [
      "REST APIs",
      "JSON",
      "Async Data Workflows",
      "Client-Side State",
      "Real-Time Data",
      "Relational Data Modeling",
    ],
  },
  {
    category: "Testing & Tools",
    skills: [
      "Jest",
      "Supertest",
      "Git",
      "GitHub",
      "Azure DevOps",
      "Jira",
      "Vercel",
      "Railway",
      "Agile Development",
    ],
  },
];

const Skills = () => {
  return (
    <section className="skills" id="skills" aria-labelledby="skills-heading">
      <div className="section-header">
        <p className="section-label">Skills</p>
        <h2 id="skills-heading">Technologies and tools I work with.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-group" key={group.category}>
            <h3>{group.category}</h3>

            <ul className="skill-list">
              {group.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Skills;
