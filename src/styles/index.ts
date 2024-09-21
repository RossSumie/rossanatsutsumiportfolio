/* eslint-disable camelcase */
import { createGlobalStyle } from 'styled-components';
import defaultTheme from './default.theme';

export { defaultTheme };
export const GlobalStyles = createGlobalStyle`
     *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        font-size: 62.5%;// Isso existe para que 1rem seja igual a 10px, caso não tiver usando rem pode apagar;
    }
    body {
        font-family: 'Lato', sans-serif; 
    }
    h1, h2, h3, h4, h5, {
        font-family: 'Ṕlayfair Display', serif;
    }
    p, span, div, li {
        font-family: 'Lato', sans-serif;
    }
`;
