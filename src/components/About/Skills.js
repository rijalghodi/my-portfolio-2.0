import React from "react";
import "./Skills.css";
import skillsData from "../../store/skillsData";

export default function Skills() {
  return (
    <div id="skills" className="container pt-5 pb-3 px-0 py-0">
      <div className="section-title">
        <h2>My Skills</h2>
      </div>
      <div className="row gx-0 gy-0">
        {skillsData &&
          skillsData.map(({ icon: Icon, category, skills }) => (
            <div key={category} className="skill-bundle col-lg-4 col-md-12">
              <div className="skills-icon">
                <Icon />
              </div>
              <h3>{category}</h3>
              <ul>
                {skills &&
                  skills.map(({ app, checklist, projects }) => (
                    <li key={app}>
                      <a href="#skills">{app}</a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
}
