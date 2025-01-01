import "@testing-library/jest-dom";
import { ReactElement } from "react";
import { TextEncoder, TextDecoder } from 'util';

Object.assign(global, { TextDecoder, TextEncoder });

import { BrowserRouter } from "react-router-dom";
import { render, RenderOptions } from "@testing-library/react";


import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyles from "../styles/global";

type CustomRenderProps = Omit<RenderOptions, "queries">;



const customRender = (
  ui: ReactElement,
  { ...renderOptions }: CustomRenderProps = {}
) =>
  render(
    <BrowserRouter basename="/">
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {ui}
      </ThemeProvider>
    </BrowserRouter>,
    renderOptions
  );

export * from "@testing-library/react";
export { customRender as render };