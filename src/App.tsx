import { useMemo, useState } from "react";
import PowerButton from "./components/Facade";

function App() {
  const facade = useMemo(() => {
    {
      return new PowerButton();
    }
  }, []);

  const [state, setState] = useState<string[]>([]);
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
          const poto = facade.press();
          setState(poto);
        }}
      >
        Power
      </button>

      <div>
        {state.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </div>
    </div>
  );
}

export default App;
