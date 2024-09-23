/* eslint-disable react/no-unescaped-entities */
import * as S from './styles';

export type SeeMoreButtonProps = {
    text: string;
    teal: boolean;
};

const SeeMoreButton: React.FC<SeeMoreButtonProps> = ({ text, teal }) => {
    return (
        <S.Button>
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
