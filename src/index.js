import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  const skillsList = skills;
  return (
    <div className="app">
      <img src="./me.jpg" alt="me" />
      <Text />
      <div className="skills">
        {skillsList.map((skill) => (
          <Skill skillObj={skill} key={skill.skill} />
        ))}
        {/* <Skill name="Html + Css" imoji="🦾" color="#800080" />
        <Skill name="JavaScript" imoji="🥰" color="#DC143C" />
        <Skill name="Git & Github" imoji="⚡" color="#FFD700" />
        <Skill name="React" imoji="🚀" color="#008000" />
        <Skill name="node.js" imoji="💻" color="#4169E1" /> */}
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="text">
      <h2>Hakiki Ahmed Djeber</h2>
      <p>
        🔧 JavaScript Dev | CS Senior 🎓 | Exploring React.js galaxies | Fixing
        bugs & breaking keyboards 💻 | Join my cosmic coding journey! 💫
        #ReactJS #WebDev 🚀
      </p>
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <span className="skill" style={{ backgroundColor: skillObj.color }}>
      {skillObj.skill}{" "}
      {skillObj.level === "beginner"
        ? "👶"
        : skillObj.level === "advanced"
        ? "💪"
        : "👍"}
    </span>
  );
}
// Call render on the root object
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
