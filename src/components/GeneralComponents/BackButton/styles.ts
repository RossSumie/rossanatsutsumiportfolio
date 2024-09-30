import styled from 'styled-components';

const breakpoints = {
    mobile: '600px',
    tablet: '950px',
    desktop: '1024px'
};
export const Button = styled.button`
    display: flex;
    background-color: white;
    border-radius: 8px;
    border: none;
    align-items: center;
    margin: 16px;
    padding: 8px;
    cursor: pointer;
    z-index: 2;
    position: absolute;
    gap: 16px;
    @media screen and (max-width: ${breakpoints.desktop}) {
        margin: 16px;
        padding: 8px;
        gap: 16px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        margin: 8px;
        padding: 4px;
        gap: 8px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        padding: 4px;
        gap: 8px;
    }
`;

export const ButtonText = styled.h1`
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-size: 16px;
    margin-right: 8px;
    font-family: 'Lato';
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 16px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 14px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
    }
`;

export const ButtonTextTeal = styled.h1`
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 16px;
    margin-right: 8px;
    font-family: 'Lato';
    @media screen and (max-width: ${breakpoints.desktop}) {
        font-size: 16px;
    }
    @media screen and (max-width: ${breakpoints.tablet}) {
        font-size: 14px;
    }
    @media screen and (max-width: ${breakpoints.mobile}) {
        font-size: 14px;
    }
`;
