import { useEffect, useState } from 'react';
import * as S from './styles';

const VolvoHSTemplate = () => {
    /* const ImageSizes = {
        desktop: 450,
        tablet: 300,
        mobile: 200
    };

    const [ImageHeight, setImageHeight] = useState(ImageSizes.desktop);

    useEffect(() => {
        const updateImageHeight = () => {
            const windowWidth = window.innerWidth;
            if (windowWidth >= 1024) {
                setImageHeight(ImageSizes.desktop);
            } else if (windowWidth >= 900) {
                setImageHeight(ImageSizes.tablet);
            } else {
                setImageHeight(ImageSizes.mobile);
            }
        };

        updateImageHeight();

        window.addEventListener('resize', updateImageHeight);
        return () => {
            window.removeEventListener('resize', updateImageHeight);
        };
    }, []); */

    return (
        <S.Wrapper>
            <S.Container>
                <S.MainTitle>PAGE UNDER MAINTENANCE </S.MainTitle>
            </S.Container>
        </S.Wrapper>
    );
};

export default VolvoHSTemplate;
