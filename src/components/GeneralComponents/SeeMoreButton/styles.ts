import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    background: none;
    border: none;
    align-items: center;
    margin-top: 16px;
`;

export const ButtonText = styled.h1`
    color: ${({ theme }) => theme.colors.secondary.dark};
    font-size: 24px;
    margin-right: 8px;
    font-family: 'Playfair Display';
`;

export const ButtonTextTeal = styled.h1`
    color: ${({ theme }) => theme.colors.primary.dark};
    font-size: 24px;
    margin-right: 8px;
    font-family: 'Playfair Display';
`;
