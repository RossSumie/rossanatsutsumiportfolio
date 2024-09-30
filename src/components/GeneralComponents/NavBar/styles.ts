import styled from 'styled-components';

const breakpoints = {
    desktop3: '1450px',
    desktop2: '1200px',
    desktop1: '1030px'
};

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: flex-end;
    left: 4vw;
    top: 20vh;
    z-index: 0;
    gap: 100px;

    @media screen and (max-width: ${breakpoints.desktop3}) {
        left: 3.5vw;
        gap: 80px;
    }

    @media screen and (max-width: ${breakpoints.desktop2}) {
        left: 3vw;
        gap: 75px;
    }

    @media screen and (max-width: ${breakpoints.desktop1}) {
        left: 2.5vw;
        gap: 65px;
    }
`;

export const Tab = styled.button`
    background: ${({ theme }) => theme.colors.primary.light};
    border-radius: 16px 16px 0 0;
    border: none;
    transform: rotate(270deg);
    transition: transform 0.3s ease-in;
    padding: 16px;

    &:hover {
        transform: scale(1.2) rotate(270deg);
        cursor: pointer;
    }

    @media screen and (max-width: ${breakpoints.desktop3}) {
        padding: 16px;
    }

    @media screen and (max-width: ${breakpoints.desktop2}) {
        padding: 16px;
    }

    @media screen and (max-width: ${breakpoints.desktop1}) {
        padding: 16px;
    }
`;

export const TabText = styled.p`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary.dark};

    @media screen and (max-width: ${breakpoints.desktop3}) {
        font-size: 20px;
    }

    @media screen and (max-width: ${breakpoints.desktop2}) {
        font-size: 18px;
    }

    @media screen and (max-width: ${breakpoints.desktop1}) {
        font-size: 16px;
    }
`;
