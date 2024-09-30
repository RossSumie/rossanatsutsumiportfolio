/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import * as S from './styles';

export type SeeMoreButtonProps = {
    text: string;
    text1: string;
    text2: string;
};

const NavBar: React.FC<SeeMoreButtonProps> = ({ text, text1, text2 }) => {
    const router = useRouter();

    return (
        <S.Container>
            <S.Tab onClick={() => router.push('/VolvoHS')}>
                <S.TabText>{text}</S.TabText>
            </S.Tab>
            <S.Tab onClick={() => router.push('/VolvoHS')}>
                <S.TabText>{text1}</S.TabText>
            </S.Tab>
            <S.Tab onClick={() => router.push('/VolvoHS')}>
                <S.TabText>{text2}</S.TabText>
            </S.Tab>
        </S.Container>
    );
};

export default NavBar;
