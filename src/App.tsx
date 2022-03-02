import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UncontrolledDiagram } from "./components/CustomDiagram";

function App() {
  return (
    <div className="App">
      <header className="App-header">UncontrolledDiagrams</header>
      <main className="App-main">
        <UncontrolledDiagram />
      </main>
    </div>
  );
}

export default App;
