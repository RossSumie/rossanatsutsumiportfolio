/* eslint-disable react/no-unescaped-entities */
import SeeMoreButton from 'components/GeneralComponents/SeeMoreButton';
import { useEffect, useState } from 'react';
import * as S from './styles';

const SPOD = () => {
    const ImageSizes = {
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
    }, []);
    return (
        <S.Container>
            <S.InnerContainer>
                <S.LeftContainer>
                    <S.Title>SPOD Connect</S.Title>
                    <S.FontCombinationContainer>
                        <S.SubtitleLato>A</S.SubtitleLato>
                        <S.SubtitlePlayfair>human-centered</S.SubtitlePlayfair>
                        <S.SubtitleLato>and</S.SubtitleLato>
                        <S.SubtitlePlayfair>
                            sustainable solution
                        </S.SubtitlePlayfair>
                        <S.SubtitleLato>
                            for urban mobility in large cities.
                        </S.SubtitleLato>
                    </S.FontCombinationContainer>
                    <S.BodyCombinationContainer>
                        <S.BodyText>
                            SPOD Connect is a service product developed using
                            the
                        </S.BodyText>
                        <S.BoldBodyText>Design Thinking</S.BoldBodyText>
                        <S.BodyText>
                            methodology with the purpose of revolutionizing
                        </S.BodyText>
                        <S.BoldBodyText>urban mobility</S.BoldBodyText>
                        <S.BodyText>by</S.BodyText>
                        <S.BoldBodyText>merging</S.BoldBodyText>
                        <S.BodyText>the</S.BodyText>
                        <S.BoldBodyText>positive aspects</S.BoldBodyText>
                        <S.BodyText>of</S.BodyText>
                        <S.BoldBodyText>
                            public and private transportation
                        </S.BoldBodyText>
                        <S.BodyText>
                            It features a phased implementation plan that aims
                            to be enhanced by technological advancements over
                            the years. The project was developed through the
                            SUGAR international university network.
                        </S.BodyText>
                    </S.BodyCombinationContainer>
                    <SeeMoreButton teal={false} text="Read More" />
                </S.LeftContainer>
                <S.RightContainer>
                    <img
                        src="/assets/VolvoHS_Mockup.png"
                        height={ImageHeight}
                        alt="logo"
                    />
                </S.RightContainer>
            </S.InnerContainer>
        </S.Container>
    );
};

export default SPOD;
