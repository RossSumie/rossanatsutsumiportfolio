import { ThemeProvider } from 'styled-components';
import defaultTheme from 'styles/default.theme';
import { GlobalStyles } from 'styles';

const AppProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        {children}
    </ThemeProvider>
);

export default AppProvider;
