import React, { useContext } from "react";
import ThemeContext, { themes } from "../stores/contexts/themes.context";

const ThemeSelector = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (e) => {
    e.preventDefault();
    if (theme !== e.target.dataset.value) {
      setTheme(e.target.dataset.value);
      localStorage.APP_THEME = e.target.dataset.value;
    }
  };

  return (
    <div className='theme-selector'>
      {Object.keys(themes).map((color, i) => (
        <div
          key={i}
          className={`btn-color ${color}`}
          data-value={color}
          onClick={toggleTheme}
        ></div>
      ))}
    </div>
  );
};

export default ThemeSelector;
