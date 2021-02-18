import react from "react";
import "./styles.css";
import UseContext from "./context/useContext";
import Contador from "./components/Contador";
import Other from "./components/Other";

export default function App() {
  return (
    <div className="App">
      <UseContext>
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <Contador />
        <Other />
      </UseContext>
    </div>
  );
}
