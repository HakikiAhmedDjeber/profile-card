import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <div className="app">
      <img src="./me.jpg" />
      <Text />
      <div className="skills">
        <Skill name="Html + Css" imoji="🦾" color="#800080" />
        <Skill name="JavaScript" imoji="🥰" color="#DC143C" />
        <Skill name="Git & Github" imoji="⚡" color="#FFD700" />
        <Skill name="React" imoji="🚀" color="#008000" />
        <Skill name="node.js" imoji="💻" color="#4169E1" />
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

function Skill(props) {
  return (
    <span className="skill" style={{ backgroundColor: props.color }}>
      {props.name} {props.imoji}
    </span>
  );
}
// Call render on the root object
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
