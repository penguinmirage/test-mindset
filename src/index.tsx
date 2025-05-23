import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/app/app";
import "./index.css";

// Get the container element and add non-null assertion operator
const container = document.getElementById("root")!;

// Create root with proper TypeScript type
const root = createRoot(container);

console.log("Hello World, this program is working...");

// Render the App component
root.render(<App />);