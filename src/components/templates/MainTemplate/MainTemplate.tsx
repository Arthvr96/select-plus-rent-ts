import React, { ReactNode } from 'react';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'assets/styles/theme';
import 'assets/styles/normalize.css';

type MainTemplate = {
  children: ReactNode;
};

const MainTemplate = ({ children }: MainTemplate) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <main>{children}</main>
      </ThemeProvider>
    </>
  );
};

export default MainTemplate;
