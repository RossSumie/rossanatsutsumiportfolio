import { useEffect, useState } from 'react';
import * as S from './styles';

const VolvoHSTemplate = () => {
    const ImageSizes = {
        desktop_b: 450,
        desktop_m: 300,
        desktop: 300,
        tablet: 300,
        mobile: 200
    };

    const [ImageHeight, setImageHeight] = useState(ImageSizes.desktop_b);
    const [windowWidth, setWindowWidth] = useState<number>(
        typeof window !== 'undefined' ? window.innerWidth : 0
    );

    useEffect(() => {
        const handleResize = () => {
            const currentWidth = window.innerWidth;
            setWindowWidth(currentWidth);

            if (currentWidth >= 1500) {
                setImageHeight(ImageSizes.desktop_b);
            } else if (currentWidth >= 1200) {
                setImageHeight(ImageSizes.desktop_m);
            } else if (currentWidth >= 1024) {
                setImageHeight(ImageSizes.desktop);
            } else if (currentWidth >= 700) {
                setImageHeight(ImageSizes.tablet);
            } else {
                setImageHeight(ImageSizes.mobile);
            }
        };

        // Trigger once when component mounts
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array so it runs only on mount

    return (
        <S.Wrapper>
            <S.Container>
                <S.ImageOverlayContainer>
                    <S.ImageOverlay />
                    <img
                        src="/assets/VolvoCE_011.jpeg"
                        style={{
                            width: '100%',
                            height: 'auto', // Maintain aspect ratio
                            borderRadius: '16px 16px 0 0'
                        }}
                        alt="logo"
                    />
                    <S.MainTitle>Volvo Human Sensor (VolvoHS)</S.MainTitle>
                </S.ImageOverlayContainer>
                <S.ContainerWrapper>
                    <S.ContentContainer>
                        <S.Title1>About the Project</S.Title1>
                        <S.Body>
                            In November 2023, Volvo Construction Equipment
                            (VolvoCE) brought a proposal for joint development
                            of an innovation project to the University of São
                            Paulo and the Blekinge Institute of Technology. The
                            initial prompt was quite broad, and the only
                            specified requirement was to contribute to VolvoCE's
                            ability to implement innovative technologies in its
                            product-services. The project underwent several
                            stages of development, following design thinking
                            principles and the methodology of the ME310 course
                            (Stanford), incorporating interviews, personas, and
                            prototypes.
                        </S.Body>
                        {windowWidth <= 1200 ? (
                            <>
                                <S.Block>
                                    <S.LeftSideBlock>
                                        <S.Body>
                                            Initially, at least 22 interviews
                                            were conducted with people who use
                                            or have daily contact with
                                            construction machinery, to identify
                                            the most pressing challenges that
                                            need to be addressed within the
                                            company's context. These interviews
                                            also helped validate whether the
                                            solution path we, as a team, were
                                            pursuing aligned with the reality of
                                            the end-users of our
                                            product-service.
                                        </S.Body>
                                    </S.LeftSideBlock>
                                    <S.RightSideBlock>
                                        <img
                                            src="/assets/VolvoCE_015.jpeg"
                                            height={ImageHeight}
                                            alt="logo"
                                        />
                                    </S.RightSideBlock>
                                </S.Block>
                                <S.Body>
                                    Next, our team created personas to personify
                                    the individuals who would benefit from our
                                    solution, representing the people who would
                                    be positively impacted by the
                                    product-service we are developing. This
                                    approach also served as a way to summarize
                                    the findings from the interviews, condensing
                                    the information into a single example for
                                    validation with VolvoCE itself.
                                </S.Body>
                            </>
                        ) : (
                            <S.Block>
                                <S.LeftSideBlock>
                                    <S.Body>
                                        Initially, at least 22 interviews were
                                        conducted with people who use or have
                                        daily contact with construction
                                        machinery, to identify the most pressing
                                        challenges that need to be addressed
                                        within the company's context. These
                                        interviews also helped validate whether
                                        the solution path we, as a team, were
                                        pursuing aligned with the reality of the
                                        end-users of our product-service.
                                    </S.Body>
                                    <S.Body>
                                        Next, our team created personas to
                                        personify the individuals who would
                                        benefit from our solution, representing
                                        the people who would be positively
                                        impacted by the product-service we are
                                        developing. This approach also served as
                                        a way to summarize the findings from the
                                        interviews, condensing the information
                                        into a single example for validation
                                        with VolvoCE itself.
                                    </S.Body>
                                </S.LeftSideBlock>
                                <S.RightSideBlock>
                                    <img
                                        src="/assets/VolvoCE_015.jpeg"
                                        height={ImageHeight}
                                        alt="logo"
                                    />
                                </S.RightSideBlock>
                            </S.Block>
                        )}
                        <S.Body>
                            Finally, we developed a series of prototypes, each
                            with a different approach, to test various aspects
                            and possibilities for our final solution. We started
                            with quick and simple prototypes, moved into more
                            divergent designs, and concluded with a functional
                            concept.
                        </S.Body>
                    </S.ContentContainer>
                </S.ContainerWrapper>
            </S.Container>
        </S.Wrapper>
    );
};

export default VolvoHSTemplate;
