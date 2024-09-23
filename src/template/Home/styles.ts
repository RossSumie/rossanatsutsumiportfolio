import styled from 'styled-components';

// Wrapper para englobar todo o conteúdo e receber a cor de fundo
export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 440vh; // Garante que a página seja longa para permitir o scroll
    transition: background-color 0.5s ease; // Suaviza a transição de cor
    width: 100%;
`;
