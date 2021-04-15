import { createGlobalStyle } from "styled-components";
import { themes } from "../stores/contexts/themes.context";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.fontColor};
  }

  .theme-selector {
    position: absolute;
    padding: 0.5rem 1rem;
    top: 0;
    right: 2rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    .btn-color {
      width: 20px;
      height: 20px;
      border-radius: 20px;
      background-color: lightgray;
      cursor: pointer;

      &.mint {
        background-color: ${themes.mint.backgroundColor}
      }
      &.lilac {
        background-color: ${themes.lilac.backgroundColor}
      }
      &.sea {
        background-color: ${themes.sea.backgroundColor}
      }
      &.light {
        background-color: ${themes.light.backgroundColor}
      }
      &.dark {
        background-color: ${themes.dark.backgroundColor}
      }
    }
  }
`;

export default GlobalStyle;
