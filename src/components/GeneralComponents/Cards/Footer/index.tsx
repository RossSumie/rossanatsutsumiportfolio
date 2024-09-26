/* eslint-disable react/no-unescaped-entities */
import * as S from './styles';

const Footer = () => {
    return (
        <S.Container>
            <S.InnerContainer>
                <S.LeftContainer>
                    <S.Title>Contact Information</S.Title>
                    <S.Subtitle>
                        Professional Email: ross.sumie@gmail.com
                    </S.Subtitle>
                    <S.Subtitle>Academic Email: rossanasumie@usp.br</S.Subtitle>
                    <S.Subtitle>LinkedIn: Rossana Tsutsumi</S.Subtitle>
                </S.LeftContainer>
                <S.RightOuter>
                    <img src="/assets/Logo_Poli.png" height={80} alt="logo" />
                    <S.RightContainer>
                        <S.Body>
                            POLYTECHNIC SCHOOL OF THE UNIVERSITY OF SÃO PAULO
                        </S.Body>
                        <S.Body>
                            Electrical Engineering for Electronics and Embedded
                            Systems Department
                        </S.Body>
                    </S.RightContainer>
                </S.RightOuter>
            </S.InnerContainer>
        </S.Container>
    );
};

export default Footer;
