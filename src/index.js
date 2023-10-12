import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

function App() {
  return (
    <div>
      <img src="./me.jpg" />
      <Text />
    </div>
  );
}

function Text() {
  return (
    <div>
      <h1>Hakiki Ahmed Djeber</h1>
      <p>
        🔧 JavaScript Dev | CS Senior 🎓 | Exploring React.js galaxies | Fixing
        bugs & breaking keyboards 💻 | Join my cosmic coding journey! 💫
        #ReactJS #WebDev 🚀
      </p>
    </div>
  );
}

// Call render on the root object
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
