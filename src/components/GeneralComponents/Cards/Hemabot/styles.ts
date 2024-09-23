import styled from 'styled-components';

export const Container = styled.div`
    background-color: white;
    scroll-snap-align: start;
    display: flex;
    height: 100vh;
    width: 80%;
    align-items: center;
    justify-content: center;
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
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 50%;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.primary.main};
    font-family: 'Playfair Display';
    font-size: 56px;
`;

export const SubtitleLato = styled.span`
    color: black;
    font-family: 'Lato';
    font-size: 20px;
`;

export const SubtitlePlayfair = styled.span`
    color: black;
    font-family: 'Playfair Display';
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    margin: 0 6px 0 6px;
`;

export const FontCombinationContainer = styled.p`
    margin: 8px 0 16px 0;
    width: 100%;
`;

export const BodyText = styled.span`
    color: black;
    font-family: 'Lato';
    font-size: 16px;
    line-height: 20px;
`;

export const BoldBodyText = styled.span`
    color: black;
    font-family: 'Lato';
    font-size: 16px;
    font-weight: bold;
    line-height: 20px;
    margin: 0 6px 0 6px;
    background: ${({ theme }) => theme.colors.secondary.light};
`;

export const BodyCombinationContainer = styled.p`
    width: 100%;
    text-align: justify;
`;
