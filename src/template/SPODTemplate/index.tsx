import { useEffect, useState } from 'react';
import BackButton from 'components/GeneralComponents/BackButton';
import * as S from './styles';

const SPODTemplate = () => {
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
                        src="/assets/SPOD_011.jpeg"
                        style={{
                            width: '100%',
                            height: 'auto', // Maintain aspect ratio
                            borderRadius: '16px 16px 0 0'
                        }}
                        alt="logo"
                    />
                    <S.MainTitle>SPOD Connect</S.MainTitle>
                </S.ImageOverlayContainer>
                <S.ContainerWrapper>
                    <S.ContentContainer>
                        <S.Title1>About the Project</S.Title1>
                        <S.Body>
                            In 2022, the University of São Paulo participated in
                            the SUGAR network, a global innovation initiative
                            that brings together universities and industry
                            partners to solve real-world challenges. In
                            collaboration with Trinity College Dublin and the
                            company Summit, the project focused on developing a
                            sustainable solution for urban mobility. This
                            initiative aimed to address challenges related to
                            reducing carbon emissions and encouraging more
                            sustainable commuting options. The project underwent
                            several stages of development, following design
                            thinking principles and the methodology of the ME310
                            course (Stanford), incorporating interviews,
                            personas, and prototypes.
                        </S.Body>
                        {windowWidth <= 1200 ? (
                            <>
                                <S.Block>
                                    <S.LeftSideBlock>
                                        <S.Body>
                                            The collaboration introduced a
                                            unique urban mobility solution that
                                            focused on merging public transport
                                            with private transportation options.
                                            This innovative proposal aimed to
                                            promote a more sustainable model by
                                            integrating the benefits of public
                                            transit with personalized mobility
                                            solutions, creating a hybrid system
                                            designed to reduce urban carbon
                                            emissions and improve efficiency.
                                            This approach helped address the
                                            environmental impact of
                                            transportation by offering a more
                                            flexible and eco-friendly commuting
                                            alternative.
                                        </S.Body>
                                    </S.LeftSideBlock>
                                    <S.RightSideBlock>
                                        <img
                                            src="/assets/SPOD_014.jpeg"
                                            height={ImageHeight}
                                            alt="logo"
                                        />
                                    </S.RightSideBlock>
                                </S.Block>
                                <S.Body>
                                    As part of the design thinking process, we
                                    began by conducting extensive interviews
                                    with a diverse group of potential users,
                                    including commuters, urban planners, and
                                    transport experts. These interviews helped
                                    us identify key pain points in urban
                                    mobility, such as inefficiency and
                                    environmental concerns. We then created
                                    detailed personas to represent different
                                    user profiles, allowing us to empathize with
                                    their unique challenges. This user-centric
                                    approach guided our brainstorming sessions,
                                    where we generated multiple ideas, from
                                    ride-sharing concepts to flexible
                                    transportation networks. Through iterative
                                    prototyping, we explored various solutions
                                    and received continuous feedback, leading to
                                    early prototypes that incorporated
                                    ride-sharing features.
                                </S.Body>
                            </>
                        ) : (
                            <S.Block>
                                <S.LeftSideBlock>
                                    <S.Body>
                                        The collaboration introduced a unique
                                        urban mobility solution that focused on
                                        merging public transport with private
                                        transportation options. This innovative
                                        proposal aimed to promote a more
                                        sustainable model by integrating the
                                        benefits of public transit with
                                        personalized mobility solutions,
                                        creating a hybrid system designed to
                                        reduce urban carbon emissions and
                                        improve efficiency. This approach helped
                                        address the environmental impact of
                                        transportation by offering a more
                                        flexible and eco-friendly commuting
                                        alternative.
                                    </S.Body>
                                    <S.Body>
                                        As part of the design thinking process,
                                        we began by conducting extensive
                                        interviews with a diverse group of
                                        potential users, including commuters,
                                        urban planners, and transport experts.
                                        These interviews helped us identify key
                                        pain points in urban mobility, such as
                                        inefficiency and environmental concerns.
                                        We then created detailed personas to
                                        represent different user profiles,
                                        allowing us to empathize with their
                                        unique challenges. This user-centric
                                        approach guided our brainstorming
                                        sessions, where we generated multiple
                                        ideas, from ride-sharing concepts to
                                        flexible transportation networks.
                                        Through iterative prototyping, we
                                        explored various solutions and received
                                        continuous feedback, leading to early
                                        prototypes that incorporated
                                        ride-sharing features.
                                    </S.Body>
                                </S.LeftSideBlock>
                                <S.RightSideBlock>
                                    <img
                                        src="/assets/SPOD_014.jpeg"
                                        height={ImageHeight}
                                        style={{ objectFit: 'contain' }}
                                        alt="logo"
                                    />
                                </S.RightSideBlock>
                            </S.Block>
                        )}
                        <S.Body>
                            SPOD Connect presents a practical and sustainable
                            approach to urban mobility by significantly reducing
                            CO2 emissions compared to private vehicles while
                            using road space more efficiently. It offers an
                            environmentally friendly alternative without
                            sacrificing user comfort, safety, or convenience.
                            While still in development, the system&apos;s hybrid
                            design aims to meet the demand for a cleaner
                            transport solution that aligns with modern urban
                            challenges, such as reducing traffic congestion and
                            promoting sustainability.
                        </S.Body>
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Project Architecture
                        </S.Title1>
                        <S.Body>
                            SPOD Connect operates as a visionary concept, aiming
                            to have validation versions that will be refined as
                            advancements in autonomous vehicles and smart cities
                            emerge. The initial idea stemmed from the
                            team&apos;s research into understanding why
                            individuals prefer private transportation despite
                            the known benefits of public transit for the
                            environment, traffic logistics, and urban
                            accessibility. The central question driving this
                            investigation was:
                        </S.Body>
                        <S.Quote>
                            &quot;If we know public transport is better for
                            society, why do people still prefer and enjoy having
                            their own cars?&quot;
                        </S.Quote>
                        <S.Body>
                            We identified three key factors in our interviews
                            and statistical analyses. The first was status,
                            linked to the car model or brand someone owns, the
                            second was privacy, and the third was route
                            customization. It became clear to our team that
                            these motivations vary depending on the country and
                            city where the solution is applied. For instance,
                            public space usage differs between Europe and South
                            America. As a result, we refined our scope, focusing
                            on mobility for commuting and other repetitive daily
                            journeys.
                        </S.Body>
                        <S.Body>
                            With this context, we discovered through interviews
                            that the most influential factor in an
                            individual&apos;s decision when choosing a mode of
                            transportation for commuting was the ability to
                            customize their route and get as close as possible
                            to their destination. This led us to focus on
                            ensuring that users could personalize their routes
                            on low-traffic streets, while ensuring that, in
                            high-traffic areas, our solution would behave like
                            public transport, avoiding the “accordion effect” on
                            traffic jams.
                        </S.Body>
                        <img
                            src="/assets/SPOD_016.png"
                            height={ImageHeight + 100}
                            style={{
                                objectFit: 'contain',
                                margin: '32px 0 32px 0'
                            }}
                            alt="logo"
                        />
                        <S.Body>
                            In the SPOD Connect mobility system, designed for
                            near-term implementation, users start by walking to
                            the nearest electric capsule, the SPOD. Here, they
                            receive an optimized route to their destination and
                            navigate independently to a main high-traffic route,
                            called the &quot;SPINE&quot;. On the SPINE, a driver
                            collects the SPOD, grouping it with others in a
                            coordinated, public-transport-like formation until
                            reaching the nearest drop-off point. This hybrid
                            approach blends the efficiency of public transit
                            with the flexibility of personalized, autonomous
                            mobility.
                        </S.Body>
                        <S.Body>
                            With advancing technology, the ultimate goal of the
                            SPOD Connect system is for all capsules to move
                            uniformly within the SPINE using coordinated
                            autonomous navigation, much like a hive. Once
                            outside high-traffic areas, the capsules would
                            regain individual autonomy. This implementation is
                            envisioned as a 30-year project, developed as a
                            forward-looking concept for the sponsoring company,
                            Summit, to adapt to future urban mobility needs and
                            evolving autonomous capabilities.
                        </S.Body>
                    </S.ContentContainer>
                </S.ContainerWrapper>
            </S.Container>
        </S.Wrapper>
    );
};

export default SPODTemplate;
