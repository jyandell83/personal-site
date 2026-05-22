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
    ],
  },
  {
    category: "UI / UX",
    skills: [
      "Responsive Design",
      "Accessibility",
      "Cross-Browser Compatibility",
      "Design Systems",
    ],
  },
  {
    category: "Data & APIs",
    skills: ["REST APIs", "JSON", "Async Data Workflows", "Real-Time Data"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "Azure DevOps", "Jira", "Agile Development"],
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
