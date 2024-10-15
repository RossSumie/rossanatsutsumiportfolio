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
    background-color: ${({ theme }) => theme.colors.primary.dark};
    width: 100%;
`;

export const Container = styled.div`
    background-color: white;
    border-radius: 16px;
    margin: 10vh 0 10vh 0;
    height: auto;
    width: 70vw;
    @media screen and (max-width: ${breakpoints.desktop_b}) {
        width: 85vw;
    }
    @media screen and (max-width: ${breakpoints.desktop}) {
        width: 80vw;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        margin: 5vh 0 5vh 0;
        width: 90vw;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        margin: 2.5vh 0 2.5vh 0;
        width: 95vw;
    }
`;

export const ContainerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        padding: 48px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        padding: 32px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        padding: 16px;
    }
`;
export const ImageOverlayContainer = styled.div`
    position: relative;
    width: 100%;
    z-index: 0;
`;

export const ImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0); // Semi-transparent dark overlay
    display: flex;
    justify-content: center;
    align-items: flex-start;
    border-radius: 16px 16px 0 0; // Matching border-radius with image
`;

export const MainTitle = styled.div`
    font-family: 'Playfair Display';
    font-size: 56px;
    font-weight: bold;
    text-align: center;
    padding: 0 32px 0 32px;
    color: ${({ theme }) => theme.colors.primary.dark};
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 44px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 40px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 24px;
    }
`;
export const ContentContainer = styled.div`
    display: flex;
    margin: 24px 0 24px 0;
    flex-direction: column;
    width: 100%;
`;

export const Block = styled.div`
    display: flex;
    gap: 32px;
    margin: 8px 0 16px 0;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    @media screen and (max-width: ${breakpoints.tablet}) {
        flex-direction: column;
        gap: 8px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        flex-direction: column;
        gap: 8px;
    }
    }
`;

export const LeftSideBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const RightSideBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Title1 = styled.h1`
    font-family: 'Playfair Display';
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 40px;
    margin-bottom: 16px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 32px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 24px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 20px;
    }
`;
export const Title2 = styled.h2`
    font-family: 'Lato';
    font-size: 28px;
    color: ${({ theme }) => theme.colors.primary.main};
    margin: 24px 0 24px 0;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 24px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 22px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 18px;
    }
`;
export const Title3 = styled.h3`
    font-family: 'Lato';
    font-size: 24px;
    font-weight: bold;
    color: gray;
    margin: 16px 0 16px 0;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 22px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 18px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 16px;
    }
`;

export const Body = styled.p`
    color: black;
    font-family: 'Lato';
    font-size: 20px;
    text-align: justify;
    margin-bottom: 8px;
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

export const Quote = styled.p`
    color: black;
    font-family: 'Playfair Display';
    font-size: 20px;
    text-align: justify;
    font-weight: bold;
    margin: 48px;
    width: 80%;
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
