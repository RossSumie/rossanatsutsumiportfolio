import styled from 'styled-components';

const breakpoints = {
    mobile: '600px',
    tablet: '950px',
    desktop: '1024px',
    desktop_b: '1500px'
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    transition: background-color 0.5s ease; // Suaviza a transição de cor
    width: 100%;
`;
