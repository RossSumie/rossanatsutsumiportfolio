import styled from 'styled-components';

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary.dark};
    font-family: 'Playfair Display';
    font-size: 30px;
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
