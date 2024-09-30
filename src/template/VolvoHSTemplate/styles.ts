import styled from 'styled-components';

const breakpoints = {
    mobile: '600px',
    tablet: '900px',
    desktop: '1024px'
};

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 400vh; //
    background-color: ${({ theme }) => theme.colors.secondary.dark};
    width: 100%;
`;

export const Container = styled.div`
    background-color: white;
    border-radius: 16px;
    margin-top: 10vh;
    height: auto;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px;
`;

export const MainTitle = styled.div`
    font-family: 'Playfair Display';
    font-size: 56px;
    margin-bottom: 32px;
    font-weight: bold;
    color: ${({ theme }) => theme.colors.secondary.dark};
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

export const Block = styled.div`
    display: flex;
    gap: 32px;
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
    font-family: 'Lato';
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 40px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 32px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 28px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 24px;
    }
`;

export const Body = styled.p`
    color: black;
    font-family: 'Lato';
    font-size: 20px;
    text-align: justify;
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
