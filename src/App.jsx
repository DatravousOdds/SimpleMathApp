import "./App.css";
import { useState } from "react";
import Calulator from "./Components/Calulator";
import Header from "./Components/Header";

export default function App() {
  const title = "Simple Math Calculator";

  
  return (
    <main>
      <Header title={title} />
      <Calulator />
    </main>
  );
}
