import React from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";
import "./assets/fonts/giveny/Giveny.ttf";

const root = createRoot(document.getElementById("root"));
root.render(<App />);
