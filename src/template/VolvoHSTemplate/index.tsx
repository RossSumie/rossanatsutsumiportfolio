import { useEffect, useState } from 'react';
import BackButton from 'components/GeneralComponents/BackButton';
import * as S from './styles';

const VolvoHSTemplate = () => {
    const ImageSizes = {
        desktop_b: 400,
        desktop_m: 300,
        desktop: 250,
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
            } else if (currentWidth >= 950) {
                setImageHeight(ImageSizes.desktop);
            } else if (currentWidth >= 700) {
                setImageHeight(ImageSizes.tablet);
            } else {
                setImageHeight(ImageSizes.mobile);
            }
        };

        handleResize();

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <S.Wrapper>
            <S.Container>
                <S.ImageOverlayContainer>
                    <BackButton teal={false} />
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
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Technologies
                        </S.Title1>
                        <S.Title2>Mobile App</S.Title2>
                        <S.Body>
                            With a solution aimed at having the operator act as
                            a &quot;human sensor,&quot; one of our top
                            priorities was to validate a user interaction that
                            was intuitive, feasible, and accessible. To achieve
                            this, using the operator&apos;s own smartphone was a
                            solution that met these prerequisites. Our main
                            challenge then became creating an interface that
                            would encourage the operator to use the system and
                            guide them to produce coherent and relevant data for
                            Volvo CE.
                        </S.Body>
                        <S.Body>
                            As a first MVP, delivered for VolvoCE to carry out
                            its initial validations in the construction
                            environment, a simple mobile app was developed.
                            Although it lacked integration with definitive
                            predictive models, the app collected contextual data
                            through forms and performed image recognition
                            analysis on photos submitted during its use. It also
                            featured a basic integration with Augmented Reality
                            (AR) to identify radiators and coolant tanks. The
                            purpose of the AR feature was to guide the operator
                            in collecting specific data about certain parts of
                            the machine.
                        </S.Body>
                        <S.Block>
                            <S.LeftSideBlock>
                                <S.Title3>
                                    Front End (React Native + ViroMedia)
                                </S.Title3>
                                <S.Body>
                                    The front end of the application was
                                    developed in <strong>TypeScript</strong>,
                                    using the <strong>React Native</strong>{' '}
                                    framework. It featured a deliberately
                                    minimalist design, adhering to Volvo&apos;s
                                    brand guidelines, as we were instructed
                                    during the project&apos;s development. In
                                    this part, we implemented requests for four
                                    types of form submissions, two of which
                                    included photo uploads and integration with
                                    the phone&apos;s gallery for{' '}
                                    <strong>
                                        sending images for AI analysis.{' '}
                                    </strong>
                                    One form had a{' '}
                                    <strong>speech recognition feature</strong>,
                                    addressing the identified need for a tool
                                    that simplified self-reporting by operators,
                                    allowing them to submit reports without
                                    needing to articulate their input in
                                    writing.
                                </S.Body>
                                <S.Body>
                                    The AR feature of the app was implemented on
                                    the front end using the open-source
                                    libraries from <strong>ViroMedia</strong>,
                                    as the goal was to quickly produce a working
                                    prototype for validation rather than
                                    immediately aiming for production, and this
                                    approach allowed operators to provide
                                    feedback, with more reliable methods now
                                    being evaluated for future production and
                                    commercialization
                                </S.Body>
                                <S.Body>
                                    In this video, you can see how the augmented
                                    reality feature was implemented: during the
                                    evaluation of machine overheating, the
                                    operator is asked to take a photo of the
                                    radiator. To help the operator identify the
                                    radiator, an overlay appears on the image
                                    with a label that says &quot;radiator.&quot;
                                    This label only appears when the operator
                                    points the phone&apos;s camera at the
                                    radiator.
                                </S.Body>
                            </S.LeftSideBlock>
                            <S.RightSideBlock>
                                <video
                                    width="auto"
                                    height="500"
                                    controls
                                    autoPlay
                                    loop
                                    muted
                                >
                                    <source
                                        src="/assets/VolvoCE_01.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </S.RightSideBlock>
                        </S.Block>
                        <S.Title3>Back-End (Flask, MongoDB, Express)</S.Title3>
                        <S.Body>
                            The back end of the app was built using{' '}
                            <strong>Node.js (Express) </strong>for handling
                            routing, database communication, and API requests,
                            integrated with a <strong>MongoDB</strong> database
                            for data storage and <strong>AWS S3</strong> for
                            image storage. For image recognition, the system
                            employs the{' '}
                            <strong>YOLO (You Only Look Once)</strong> deep
                            learning model, which is implemented using Python
                            and hosted on a Flask server. This model processes
                            images captured during equipment inspections to
                            detect and classify potential mechanical failures.
                            The model runs on a cloud platform via{' '}
                            <strong>DigitalOcean</strong>, providing scalability
                            and quick response times for real-time maintenance
                            predictions.
                        </S.Body>
                        <S.Title3>Image Classification (YOLO model)</S.Title3>
                        {windowWidth >= 1200 ? (
                            <S.Block>
                                <S.LeftSideBlock>
                                    <img
                                        src="/assets/YOLO.png"
                                        height={ImageHeight}
                                        style={{ objectFit: 'contain' }}
                                        alt="logo"
                                    />
                                </S.LeftSideBlock>
                                <S.RightSideBlock>
                                    <S.Body>
                                        The image analysis component of the
                                        project utilizes the{' '}
                                        <strong>
                                            YOLOv5 (You Only Look Once)
                                        </strong>{' '}
                                        model, a cutting-edge object detection
                                        system known for its real-time
                                        capabilities. This model was
                                        specifically trained to detect and
                                        classify key machine parts, such as
                                        radiators and coolant tanks, assessing
                                        their conditions (e.g., bent fins,
                                        clogged radiators, or clean parts).
                                    </S.Body>

                                    <S.Body>
                                        To prepare the model, a comprehensive
                                        dataset of machine part images was
                                        collected, which included examples of
                                        both clean and damaged parts. The images
                                        were processed using{' '}
                                        <strong>LabelImg</strong>, an annotation
                                        tool, to label the conditions of the
                                        parts in various categories, such as
                                        “bent fins” or “clogged radiators.” To
                                        improve the robustness of the model, the
                                        dataset was augmented with different
                                        transformations like rotations and
                                        scaling, ensuring that the model could
                                        handle a wide variety of image
                                        scenarios.
                                    </S.Body>
                                </S.RightSideBlock>
                            </S.Block>
                        ) : (
                            <>
                                <S.Block>
                                    <S.LeftSideBlock>
                                        <img
                                            src="/assets/YOLO.png"
                                            height={ImageHeight}
                                            style={{ objectFit: 'contain' }}
                                            alt="logo"
                                        />
                                    </S.LeftSideBlock>
                                    <S.RightSideBlock>
                                        <S.Body>
                                            The image analysis component of the
                                            project utilizes the{' '}
                                            <strong>
                                                YOLOv5 (You Only Look Once)
                                            </strong>{' '}
                                            model, a cutting-edge object
                                            detection system known for its
                                            real-time capabilities. This model
                                            was specifically trained to detect
                                            and classify key machine parts, such
                                            as radiators and coolant tanks,
                                            assessing their conditions (e.g.,
                                            bent fins, clogged radiators, or
                                            clean parts).
                                        </S.Body>
                                    </S.RightSideBlock>
                                </S.Block>
                                <S.Body>
                                    To prepare the model, a comprehensive
                                    dataset of machine part images was
                                    collected, which included examples of both
                                    clean and damaged parts. The images were
                                    processed using <strong>LabelImg</strong>,
                                    an annotation tool, to label the conditions
                                    of the parts in various categories, such as
                                    “bent fins” or “clogged radiators.” To
                                    improve the robustness of the model, the
                                    dataset was augmented with different
                                    transformations like rotations and scaling,
                                    ensuring that the model could handle a wide
                                    variety of image scenarios.
                                </S.Body>
                            </>
                        )}
                        <S.Body>
                            The model was trained using a script called{' '}
                            <strong>train.py</strong>, which managed the data
                            split, assigning 80% of the dataset for training,
                            10% for validation, and 10% for testing. The
                            training process involved tuning parameters such as
                            batch size and the number of epochs to optimize
                            performance. Distributed training was employed
                            across multiple GPUs to speed up the process, and
                            regular checkpoints were created to track progress
                            and select the{' '}
                            <strong>best-performing model</strong> (best.pt) for
                            deployment.
                        </S.Body>
                        <img
                            src="/assets/YOLO1.png"
                            height={ImageHeight}
                            style={{
                                objectFit: 'contain',
                                marginBottom: '16px'
                            }}
                            alt="logo"
                        />
                        {windowWidth >= 1200 ? (
                            <S.Block>
                                <S.LeftSideBlock>
                                    <S.Body>
                                        Testing the model involved running the
                                        detect.py script, which applied the
                                        trained model to new images. The
                                        model&apos;s performance was evaluated
                                        by examining how well it could detect
                                        and classify the conditions of the
                                        machine parts, using metrics like
                                        precision and recall to confirm its
                                        accuracy. This testing ensured the model
                                        was ready for real-world deployment,
                                        capable of making accurate and efficient
                                        detections.
                                    </S.Body>
                                    <S.Body>
                                        Once trained and tested, the YOLO model
                                        was deployed on a Flask server hosted on
                                        Digital Ocean. This setup allowed for
                                        real-time analysis and classification of
                                        images during machine inspections,
                                        enabling users to detect potential
                                        failures quickly and efficiently. The
                                        system is designed to provide{' '}
                                        <strong>immediate feedback</strong>,
                                        enhancing the ability to identify
                                        machine issues before they lead to more
                                        significant problems, thereby improving
                                        overall maintenance and reducing
                                        downtime.
                                    </S.Body>
                                </S.LeftSideBlock>
                                <S.RightSideBlock>
                                    <img
                                        src="/assets/YOLO2.png"
                                        height={ImageHeight}
                                        style={{
                                            objectFit: 'contain',
                                            marginBottom: '16px'
                                        }}
                                        alt="logo"
                                    />
                                </S.RightSideBlock>
                            </S.Block>
                        ) : (
                            <>
                                <S.Block>
                                    <S.LeftSideBlock>
                                        <S.Body>
                                            Testing the model involved running
                                            the detect.py script, which applied
                                            the trained model to new images. The
                                            model&apos;s performance was
                                            evaluated by examining how well it
                                            could detect and classify the
                                            conditions of the machine parts,
                                            using metrics like precision and
                                            recall to confirm its accuracy. This
                                            testing ensured the model was ready
                                            for real-world deployment, capable
                                            of making accurate and efficient
                                            detections.
                                        </S.Body>
                                    </S.LeftSideBlock>
                                    <S.RightSideBlock>
                                        <img
                                            src="/assets/YOLO2.png"
                                            height={ImageHeight}
                                            style={{
                                                objectFit: 'contain',
                                                marginBottom: '16px'
                                            }}
                                            alt="logo"
                                        />
                                    </S.RightSideBlock>
                                </S.Block>
                                <S.Body>
                                    Once trained and tested, the YOLO model was
                                    deployed on a Flask server hosted on Digital
                                    Ocean. This setup allowed for real-time
                                    analysis and classification of images during
                                    machine inspections, enabling users to
                                    detect potential failures quickly and
                                    efficiently. The system is designed to
                                    provide <strong>immediate feedback</strong>,
                                    enhancing the ability to identify machine
                                    issues before they lead to more significant
                                    problems, thereby improving overall
                                    maintenance and reducing downtime.
                                </S.Body>
                            </>
                        )}
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Final Presentation
                        </S.Title1>
                        <S.Body>
                            The Volvo HS system was showcased at the Kyoto EXPO,
                            held at the Kyoto Institute of Technology. The
                            presentation aimed to engage both the Volvo team and
                            external visitors, combining a booth display with a
                            structured storytelling approach. The booth featured
                            an interactive experience that allowed visitors to
                            test the app in real-world scenarios. A cardboard
                            model of an excavator was used to simulate the
                            conditions under which the system would operate,
                            enabling visitors to perform machine check-ups and
                            inspections through the app. The booth also employed
                            posters and monitors to guide visitors through the
                            problem, solution, and the technology behind Volvo
                            HS.
                        </S.Body>
                        <img
                            src="/assets/VolvoCE_020.jpeg"
                            height={ImageHeight}
                            style={{
                                objectFit: 'contain',
                                marginBottom: '16px'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/VolvoCE_021.jpeg"
                            height={ImageHeight}
                            style={{
                                objectFit: 'contain',
                                marginBottom: '16px'
                            }}
                            alt="logo"
                        />
                        <img
                            src="/assets/VolvoCE_022.jpeg"
                            height={ImageHeight}
                            style={{
                                objectFit: 'contain',
                                marginBottom: '16px'
                            }}
                            alt="logo"
                        />
                    </S.ContentContainer>
                </S.ContainerWrapper>
            </S.Container>
        </S.Wrapper>
    );
};

export default VolvoHSTemplate;
