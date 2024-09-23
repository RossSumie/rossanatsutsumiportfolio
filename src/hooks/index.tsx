import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/default.theme';
import { GlobalStyles } from 'styles';

import React, { ReactNode } from 'react';

type AppProviderProps = {
    children: ReactNode;
};

const AppProvider: React.FC<AppProviderProps> = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default AppProvider;
