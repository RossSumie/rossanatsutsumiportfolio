import styled from 'styled-components';

const breakpoints = {
    mobile: '600px',
    tablet: '900px',
    desktop: '1024px'
};

export const Container = styled.div`
    background-color: white;
    scroll-snap-align: start;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 3rem;
    width: 80vw;
    z-index: 2;
    min-height: auto;
    padding: 32px 0 32px 0;
    @media screen and (max-width: ${breakpoints.desktop}) {
        min-height: auto;
        padding: 24px 0 24px 0;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        min-height: auto;
        padding: 24px 0 24px 0;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        min-height: auto;
        padding: 16px 0 16px 0;
    }
`;

export const InnerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    gap: 32px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        padding: 0 40px 0 40px;
        flex-direction: row;
        width: 90%;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 0 24px 0 24px;
        flex-direction: column;
        width: 80%;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        padding: 0 8px 0 8px;
        width: 80%;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
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
    align-items: center;
`;

export const Title = styled.h1`
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-family: 'Playfair Display';
    font-size: 56px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 48px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 40px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 32px;
    }
`;

export const SubtitleLato = styled.span`
    color: black;
    font-family: 'Lato';
    font-size: 28px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 22px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 20px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
    }
`;

export const SubtitlePlayfair = styled.span`
    color: black;
    font-family: 'Playfair Display';
    font-style: italic;
    font-weight: bold;
    font-size: 28px;
    margin: 0 6px 0 6px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 22px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 20px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
    }
`;

export const FontCombinationContainer = styled.p`
    margin: 8px 0 16px 0;
    width: 100%;
`;

export const BodyText = styled.span`
    color: black;
    font-family: 'Lato';
    font-size: 20px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 16px;
        line-height: 20px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 16px;
        line-height: 20px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
        line-height: 16px;
    }
`;

export const BoldBodyText = styled.span`
    color: black;
    font-family: 'Lato';
    font-weight: bold;
    margin: 0 6px 0 6px;
    font-size: 20px;
    background: ${({ theme }) => theme.colors.primary.light};
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 16px;
        line-height: 20px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 16px;
        line-height: 20px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
        line-height: 16px;
    }
`;

export const BodyCombinationContainer = styled.p`
    width: 100%;
    text-align: justify;
`;
