import styled from 'styled-components';

const breakpoints = {
    mobile: '600px',
    tablet: '900px',
    desktop: '1024px'
};
export const Container = styled.div`
    background-color: white;
    border-radius: 0 0 16px 16px;
    scroll-snap-align: start;
    display: flex;
    height: auto;
    width: 80vw;
    z-index: 2;
    flex-direction: column;
    gap: 3rem;
    padding: 32px 0 32px 0;
    margin-bottom: 32px;
`;

export const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 16px;
    padding: 0 64px 0 64px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        flex-direction: row;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 50%;
    @media screen and (max-width: ${breakpoints.desktop}) {
        width: 50%;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        width: 100%;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        width: 100%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
`;

export const RightOuter = styled.div`
    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    color: black;
    font-family: 'Playfair Display';
    font-size: 24px;
`;

export const Subtitle = styled.p`
    color: black;
    font-family: 'Lato';
    font-size: 16px;
    margin-top: 6px;
`;
