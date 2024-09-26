/* eslint-disable react/no-unescaped-entities */
import * as S from './styles';

export type SeeMoreButtonProps = {
    text: string;
    text1: string;
    text2: string;
};

const NavBar: React.FC<SeeMoreButtonProps> = ({ text, text1, text2 }) => {
    return (
        <S.Container>
            <S.Tab>
                <S.TabText>{text}</S.TabText>
            </S.Tab>
            <S.Tab>
                <S.TabText>{text1}</S.TabText>
            </S.Tab>
            <S.Tab>
                <S.TabText>{text2}</S.TabText>
            </S.Tab>
        </S.Container>
    );
};

export default NavBar;
