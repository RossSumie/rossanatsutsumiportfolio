/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import * as S from './styles';

export type SeeMoreButtonProps = {
    text: string;
    teal: boolean;
    href: string;
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ text, teal, href }) => {
    const router = useRouter(); // Initialize router

    const handleClick = () => {
        router.push(href); // Redirect to the specified route
    };

    return (
        <S.Button onClick={handleClick}>
            {teal ? (
                <>
                    <S.ButtonTextTeal>{text}</S.ButtonTextTeal>
                    <img
                        src="/assets/right_arrow_teal.svg"
                        height={24}
                        alt="logo"
                    />
                </>
            ) : (
                <>
                    <S.ButtonText>{text}</S.ButtonText>
                    <img
                        src="/assets/right_arrow_orange.svg"
                        height={24}
                        alt="logo"
                    />
                </>
            )}
        </S.Button>
    );
};

export default SeeMoreButton;
