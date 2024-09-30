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
                            specified requirement was to contribute to
                            VolvoCE&apos;s ability to implement innovative
                            technologies in its product-services. The project
                            underwent several stages of development, following
                            design thinking principles and the methodology of
                            the ME310 course (Stanford), incorporating
                            interviews, personas, and prototypes.
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
                                            company&apos;s context. These
                                            interviews also helped validate
                                            whether the solution path we, as a
                                            team, were pursuing aligned with the
                                            reality of the end-users of our
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
                                        within the company&apos;s context. These
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
                                        style={{ objectFit: 'contain' }}
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
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Development
                        </S.Title1>
                        <S.Body>
                            The final solution was designed to address the issue
                            of unplanned downtime caused by insufficient
                            contextual data. Its primary goal was to enhance
                            overall awareness of equipment health and enable
                            predictive maintenance to prevent unexpected
                            equipment failures.
                        </S.Body>
                        <S.Body>
                            To tackle the challenge of incomplete equipment
                            data, the solution allowed operators to function as
                            sensors, providing additional insights that could be
                            utilized by multiple stakeholders. Operators would
                            use the solution to collect data essential for
                            assessing equipment health. They would be required
                            to log their daily checkups via an app, which
                            minimized extra tasks while improving the accuracy
                            of the data they provided.
                        </S.Body>
                        <img
                            src="/assets/VolvoCE_016.png"
                            height={ImageHeight}
                            style={{
                                objectFit: 'contain',
                                margin: '32px 0 32px 0'
                            }}
                            alt="logo"
                        />
                        <S.Body>
                            The app prompted operators to input details about
                            the machine, such as the operating environment,
                            weather conditions, and tasks to be performed.
                            Operators could also enter more specific information
                            if they observed anything unusual, like abnormal
                            vibrations, sounds, or odors. This feature remained
                            available at all times to ensure that any new
                            symptoms were promptly documented and included in
                            the report. Additionally, operators were asked to
                            take pictures throughout the checkup as a security
                            measure, verifying that the inspection had been
                            completed. These images were stored for future
                            reference and analyzed for any visible issues the
                            operator might have missed.
                        </S.Body>
                        <S.Block>
                            <S.LeftSideBlock>
                                <S.Quote>
                                    &quot;The solution was not just a data
                                    collection app but also a system that
                                    integrated the technical data already
                                    gathered by Volvo&apos;s electrical and
                                    mechanical sensors with the contextual data
                                    that could now be collected by a sensor that
                                    had been underutilized until now: the
                                    operator.&quot;
                                </S.Quote>
                            </S.LeftSideBlock>
                            <S.RightSideBlock>
                                <img
                                    src="/assets/VolvoCE_017.jpeg"
                                    height={ImageHeight}
                                    style={{ objectFit: 'contain' }}
                                    alt="logo"
                                />
                            </S.RightSideBlock>
                        </S.Block>
                        <S.Body>
                            A substantial amount of data is gathered during each
                            process. This data is then combined with the
                            machine&apos;s existing data to update the virtual
                            model. By employing ML algorithms, prediction models
                            are developed to anticipate future failures. These
                            models would take into account various factors such
                            as the type of machine, the nature of the task,
                            environmental conditions, and the machine&apos;s
                            historical data. By analyzing this combined data,
                            the ML model can recognize patterns and trends that
                            aid in predicting potential failures and issues in
                            the future. This proactive approach helps in
                            preventing potential downtime and ensuring smooth
                            operations.
                        </S.Body>
                    </S.ContentContainer>
                </S.ContainerWrapper>
            </S.Container>
        </S.Wrapper>
    );
};

export default VolvoHSTemplate;
