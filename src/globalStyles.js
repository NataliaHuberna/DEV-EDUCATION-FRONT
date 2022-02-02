import { createGlobalStyle } from "styled-components";
import {COLORS} from "./constants/colors";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    height: 100%;
    background: linear-gradient(to right, ${COLORS.startGradient}, ${COLORS.endGradient});
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`