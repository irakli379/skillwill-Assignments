import { useEffect } from "react";
import "./App.css";
import useLocalStorage from "./hooks/useLocalStorage";
import useDetectDevice from "./hooks/useDetectDevice";

function App() {
  const [isDark, setIsDark] = useLocalStorage("Mode", false);
  const device = useDetectDevice();

  console.log(device);

  // change background color for dark mode
  const body = document.querySelector("body");

  useEffect(() => {
    if (device === "DESKTOP") {
      if (isDark) body.style.background = "grey";
      if (!isDark) body.style.background = "white";
    }
  }, [isDark, body, device]);

  return (
    <div className="App">
      <button onClick={() => setIsDark((prev) => !prev)}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default App;
