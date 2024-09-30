/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import * as S from './styles';

export type BackButtonProps = {
    teal: boolean;
};

const BackButton: React.FC<BackButtonProps> = ({ teal }) => {
    const router = useRouter(); // Initialize router

    const handleClick = () => {
        router.push('/'); // Redirect to the specified route
    };

    return (
        <S.Button onClick={handleClick}>
            {teal ? (
                <>
                    <img
                        src="/assets/right_arrow_teal.svg"
                        height={24}
                        alt="logo"
                        style={{ transform: 'rotate(180deg)' }}
                    />
                </>
            ) : (
                <>
                    <img
                        src="/assets/right_arrow_orange.svg"
                        height={24}
                        alt="logo"
                        style={{ transform: 'rotate(180deg)' }}
                    />
                </>
            )}
        </S.Button>
    );
};

export default BackButton;
