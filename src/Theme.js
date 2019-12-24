import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = { 
  fonts: {
    standard: "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Helvetica Neue', Arial, sans-serif" ,
    monospace: "Monaco, Consolas, 'Lucida Console', monospace"
  },
  fontSize: {
    xxs: "0.500rem",
    xs : "0.625rem",
    s  : "0.750rem",
    m  : "1.000rem",
    l  : "1.250rem",
    xl : "1.500rem",
    xxl: "2.000rem"
  },
  fontWeight: {
    light: 300,
    regular: 400,
    bold: 700
  }
}

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;