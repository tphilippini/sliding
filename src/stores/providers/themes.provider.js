import React, { useState, useMemo, useEffect } from "react";
import ThemesContext, { themes } from "../contexts/themes.context";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/GlobalStyle.style";

const ThemesProvider = ({ children }) => {
  const [theme, setTheme] = useState("sea");

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  useEffect(() => {
    if (localStorage.APP_THEME) {
      setTheme(localStorage.APP_THEME);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <ThemesContext.Provider value={value}>
      <ThemeProvider theme={themes[value.theme]}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemesContext.Provider>
  );
};

export default ThemesProvider;
