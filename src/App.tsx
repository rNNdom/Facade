import { useMemo, useState } from "react";
import PowerButton from "./components/Facade";

function App() {
  const facade = useMemo(() => {
    {
      return new PowerButton();
    }
  }, []);

  const [componentState, setComponentState] = useState<string[]>([]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        width: "100vw",
        gap: "1rem",
      }}
    >
      <h1
        style={{
          color: "white",
          padding: "1rem",
          margin: 0,
          fontSize: "2rem",
          fontWeight: "bold",
        }}
      >
        PC GAMER RYZEN 5 5600X - RTX 4090
      </h1>
      <button
        onClick={() => {
          const state = facade.press();
          setComponentState(state);
        }}
      >
        Power
      </button>

      <div>
        {componentState.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
