import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed;
    justify-content: flex-end;
    left: 4vw;
    top: 20vh;
    z-index: 0;
    gap: 100px;
`;

export const Tab = styled.button`
    background: ${({ theme }) => theme.colors.primary.light};
    border-radius: 16px 16px 0 0;
    border: none;
    transform: rotate(270deg);
    padding: 20px;
    transition: transform 0.3s ease-in;
    &: hover {
        transform: scale(1.2) rotate(270deg);
        cursor: pointer;
    }
`;

export const TabText = styled.p`
    font-size: 24px;
    color: ${({ theme }) => theme.colors.primary.dark};
`;
