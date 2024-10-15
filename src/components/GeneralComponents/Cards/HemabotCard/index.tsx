/* eslint-disable react/no-unescaped-entities */
import SeeMoreButton from 'components/GeneralComponents/SeeMoreButton';
import { useEffect, useState } from 'react';
import * as S from './styles';

const HemabotCard = () => {
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
                    <img
                        src="/assets/Hemabot_Mockup2.png"
                        height={ImageHeight}
                        alt="logo"
                    />
                </S.LeftContainer>
                <S.RightContainer>
                    <S.Title>Hemabot</S.Title>
                    <S.FontCombinationContainer>
                        <S.SubtitleLato>An</S.SubtitleLato>
                        <S.SubtitlePlayfair>
                            autonomous delivery robot
                        </S.SubtitlePlayfair>
                        <S.SubtitleLato>
                            that delivers medication and exam samples from the
                            ER to the hospital lab.
                        </S.SubtitleLato>
                    </S.FontCombinationContainer>
                    <S.BodyCombinationContainer>
                        <S.BodyText>
                            The Hemabot, developed in partnership with the
                            innovation sector of the University Hospital of the
                            University of São Paulo (INTEC), is a research
                            project aimed at creating a
                        </S.BodyText>
                        <S.BoldBodyText>delivery robot</S.BoldBodyText>
                        <S.BodyText>that uses</S.BodyText>
                        <S.BoldBodyText>optimization algorithms</S.BoldBodyText>
                        <S.BodyText>for</S.BodyText>
                        <S.BoldBodyText>autonomous navigation</S.BoldBodyText>
                        <S.BodyText>based on</S.BodyText>
                        <S.BoldBodyText>
                            sensory responses, spatial mapping,
                        </S.BoldBodyText>
                        <S.BodyText>and</S.BodyText>
                        <S.BoldBodyText>geographic coordinates</S.BoldBodyText>
                        <S.BodyText>
                            to transport medications and exam samples within the
                            hospital environment, avoiding potential obstacles.
                            The project began during the COVID-19 pandemic with
                            the purpose of preventing contamination of nurses
                            and other healthcare professionals through contact
                            with contaminated materials during transport.
                        </S.BodyText>
                    </S.BodyCombinationContainer>
                    <SeeMoreButton href="/Hemabot" teal text="Read More" />
                </S.RightContainer>
            </S.InnerContainer>
        </S.Container>
    );
};

export default HemabotCard;
