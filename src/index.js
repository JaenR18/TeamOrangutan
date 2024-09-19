import React from "react";
import ReactDOM from "react-dom/client";

// Aplicacion inicial Elemento Root
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

function Greeting() {

    return <h1>Hello World {}</h1>;
}

root.render(Greeting());
