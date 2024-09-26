import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    border-radius: 16px 16px 0 0;
    scroll-snap-align: start;
    display: flex;
    height: 90vh;
    margin-top: 10vh;
    width: 80vw;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    z-index: 2;
    padding: 0 32px 0 32px;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary.dark};
    font-family: 'Playfair Display';
    font-size: 30px;
    text-align: center;
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.primary.dark};
    font-family: 'Lato';
    font-size: 16px;
    text-align: center;
`;
