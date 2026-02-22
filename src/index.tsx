import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx"; // Make sure this matches your main component filename

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
