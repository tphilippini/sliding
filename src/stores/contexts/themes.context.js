import { createContext } from "react";

export const themes = {
  sea: {
    backgroundColor: "rgba(107, 202, 226, 0.9)",
    fontColor: "#ffeed9",
  },
  light: {
    backgroundColor: "rgba(247, 247, 247, 0.99)",
    fontColor: "rgba(64, 64, 64)",
  },
  lilac: {
    backgroundColor: "rgba(173, 143, 219, 0.9)",
    fontColor: "#ffeed9",
  },
  mint: {
    backgroundColor: "rgba(111, 220, 191, 0.9)",
    // fontColor: "rgba(247, 247, 247)",
    fontColor: "#ffeed9",
  },
  dark: {
    backgroundColor: "rgba(64, 64, 64, 0.99)",
    fontColor: "#ffeed9",
  },
};

const ThemesContext = createContext(null);
export default ThemesContext;
