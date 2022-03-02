import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { UncontrolledDiagram } from "./components/CustomDiagram";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UncontrolledDiagram/>
      </header>
    </div>
  );
}

export default App;
