import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";
import App from "./App";

import ThemesProvider from "./stores/providers/themes.provider";
import IsPlayingProvider from "./stores/providers/playing.provider";

ReactDOM.render(
  <React.StrictMode>
    <ThemesProvider>
      <IsPlayingProvider>
        <App />
      </IsPlayingProvider>
    </ThemesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
