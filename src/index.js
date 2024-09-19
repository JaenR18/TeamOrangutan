import React from "react";
import { App } from "./App";
import ReactDOM from "react-dom/client";

// Aplicacion inicial Elemento Root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
