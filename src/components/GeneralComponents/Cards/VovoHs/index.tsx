/* eslint-disable react/no-unescaped-entities */
import SeeMoreButton from 'components/GeneralComponents/SeeMoreButton';
import * as S from './styles';

const VolvoHS = () => {
    return (
        <S.Container>
            <S.InnerContainer>
                <S.LeftContainer>
                    <S.Title>VolvoHS</S.Title>
                    <S.FontCombinationContainer>
                        <S.SubtitleLato>
                            A Product-Service System designed to
                        </S.SubtitleLato>
                        <S.SubtitlePlayfair>
                            eliminate unplanned downtime
                        </S.SubtitlePlayfair>
                        <S.SubtitleLato>
                            at any construction site.
                        </S.SubtitleLato>
                    </S.FontCombinationContainer>
                    <S.BodyCombinationContainer>
                        <S.BodyText>
                            The Volvo HS solution, developed for
                        </S.BodyText>
                        <S.BoldBodyText>
                            Volvo Construction Equipment (Volvo CE),
                        </S.BoldBodyText>
                        <S.BodyText>
                            focuses on reducing unplanned downtime in the
                            construction industry by combining advanced
                            technologies like
                        </S.BodyText>
                        <S.BoldBodyText>
                            machine learning and computer vision
                        </S.BoldBodyText>
                        <S.BodyText>
                            with human efforts. The system enables operators to
                            act as "human sensors," collecting contextual
                            machine data during daily check-ups, which is used
                            to enhance
                        </S.BodyText>
                        <S.BoldBodyText>predictive models.</S.BoldBodyText>
                        <S.BodyText>
                            These models help anticipate potential equipment
                            failures and guide maintenance decisions. By
                            improving data collection and analysis, the solution
                            facilitates proactive maintenance, increases machine
                            uptime, and boosts operational efficiency, providing
                            significant value to both operators and site
                            managers.
                        </S.BodyText>
                    </S.BodyCombinationContainer>
                    <SeeMoreButton teal={false} text="Read More" />
                </S.LeftContainer>
                <S.RightContainer>
                    <img
                        src="/assets/VolvoCE_011.jpeg"
                        height={300}
                        alt="logo"
                    />
                </S.RightContainer>
            </S.InnerContainer>
        </S.Container>
    );
};

export default VolvoHS;
