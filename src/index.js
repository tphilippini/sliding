import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";

import ThemesProvider from "./stores/providers/themes.provider";

ReactDOM.render(
  <React.StrictMode>
    <ThemesProvider>
      <App />
    </ThemesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
