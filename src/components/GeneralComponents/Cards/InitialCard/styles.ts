import styled from 'styled-components';

const breakpoints = {
    mobile: '600px',
    tablet: '950px',
    desktop: '1024px'
};

export const Container = styled.div`
    background-color: white;
    border-radius: 16px 16px 0 0;
    scroll-snap-align: start;
    display: flex;
    min-height: 100vh;
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
    font-size: 48px;
    text-align: center;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 36px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 32px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 24px;
    }
`;

export const Subtitle = styled.p`
    color: ${({ theme }) => theme.colors.primary.dark};
    font-family: 'Lato';
    font-size: 24px;
    text-align: center;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 16px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 16px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
    }
`;
