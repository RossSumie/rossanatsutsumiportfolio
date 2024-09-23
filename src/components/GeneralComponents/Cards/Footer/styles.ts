import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    border-radius: 0 0 16px 16px;
    scroll-snap-align: start;
    display: flex;
    height: 30vh;
    width: 80%;
    flex-direction: column;
    gap: 3rem;
`;

export const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 32px;
    padding: 0 64px 0 64px;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 50%;
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
