import { useEffect, useState } from 'react';
import BackButton from 'components/GeneralComponents/BackButton';
import * as S from './styles';

const HemabotTemplate = () => {
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
                    <BackButton teal />
                    <S.ImageOverlay />
                    <img
                        src="/assets/Hemabot_01.png"
                        style={{
                            width: '100%',
                            height: 'auto', // Maintain aspect ratio
                            borderRadius: '16px 16px 0 0'
                        }}
                        alt="logo"
                    />
                    <S.MainTitle>Hemabot</S.MainTitle>
                </S.ImageOverlayContainer>
                <S.ContainerWrapper>
                    <S.ContentContainer>
                        <S.Title1>About the Project</S.Title1>
                        <S.Body>
                            In 2019, inspired by other autonomous delivery
                            robots from abroad, Professor Leopoldo Yoshioka and
                            a group of students began developing Brazil&apos;s
                            first autonomous delivery robot, initially intended
                            for use within the university campus. Due to the
                            COVID-19 pandemic, the project was adapted when the
                            University of São Paulo&apos;s Hospital requested a
                            robot capable of performing deliveries within the
                            hospital, controlled via a mobile app. The team
                            adjusted the robot&apos;s design and developed key
                            technologies like sensing, mechanical structure, and
                            computer vision, while trying to enhance usability
                            for hospital staff.
                        </S.Body>
                        {windowWidth <= 1200 ? (
                            <>
                                <S.Block>
                                    <S.LeftSideBlock>
                                        <S.Body>
                                            The new plan for the robot&apos;s
                                            operation was simple: to create an
                                            autonomous robot capable of
                                            transporting collected materials
                                            from the emergency room or
                                            examination rooms to the laboratory.
                                            The ultimate goal was to prevent the
                                            collected materials, which could
                                            carry viral contamination, from
                                            coming into contact with hospital
                                            staff, as research shows that
                                            prolonged exposure to the virus is
                                            one of the key factors increasing
                                            the risk of infection.
                                        </S.Body>
                                    </S.LeftSideBlock>
                                    <S.RightSideBlock>
                                        <img
                                            src="/assets/Hemabot_02.png"
                                            height={ImageHeight}
                                            alt="logo"
                                        />
                                    </S.RightSideBlock>
                                </S.Block>
                                <S.Body>
                                    A robot that initially had a low height and
                                    compact design to efficiently navigate the
                                    university campus had to be modified for the
                                    new hospital use case. Its dimensions were
                                    increased to accommodate a larger load of
                                    transported materials and to ensure it was
                                    visible to everyone, minimizing the risk of
                                    accidents. The first adjustments to the
                                    project were mechanical, initially focusing
                                    on making the robot more visible and then on
                                    reducing its sharp edges, as these could
                                    accumulate impurities in a hospital
                                    environment, increasing the risk of
                                    contamination.
                                </S.Body>
                            </>
                        ) : (
                            <S.Block>
                                <S.LeftSideBlock>
                                    <S.Body>
                                        The new plan for the robot&apos;s
                                        operation was simple: to create an
                                        autonomous robot capable of transporting
                                        collected materials from the emergency
                                        room or examination rooms to the
                                        laboratory. The ultimate goal was to
                                        prevent the collected materials, which
                                        could carry viral contamination, from
                                        coming into contact with hospital staff,
                                        as research shows that prolonged
                                        exposure to the virus is one of the key
                                        factors increasing the risk of
                                        infection.
                                    </S.Body>
                                    <S.Body>
                                        A robot that initially had a low height
                                        and compact design to efficiently
                                        navigate the university campus had to be
                                        modified for the new hospital use case.
                                        Its dimensions were increased to
                                        accommodate a larger load of transported
                                        materials and to ensure it was visible
                                        to everyone, minimizing the risk of
                                        accidents. The first adjustments to the
                                        project were mechanical, initially
                                        focusing on making the robot more
                                        visible and then on reducing its sharp
                                        edges, as these could accumulate
                                        impurities in a hospital environment,
                                        increasing the risk of contamination.
                                    </S.Body>
                                </S.LeftSideBlock>
                                <S.RightSideBlock>
                                    <img
                                        src="/assets/Hemabot_02.png"
                                        height={ImageHeight}
                                        style={{ objectFit: 'contain' }}
                                        alt="logo"
                                    />
                                </S.RightSideBlock>
                            </S.Block>
                        )}
                        <S.Body>
                            I joined the project during this critical phase of
                            development and conducted my undergraduate research
                            on the robot&apos;s electronic and computational
                            systems. My work involved integrating the mobile app
                            with the Jetson Nano, implementing autonomous
                            navigation algorithms for path planning and obstacle
                            avoidance, and enhancing spatial mapping through
                            sensor fusion. I also optimized the firmware to
                            ensure smooth communication between hardware and
                            control systems in dynamic environments.
                        </S.Body>
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Project Architecture
                        </S.Title1>
                        <S.Body>
                            The hardware design of the robotic platform was
                            developed with a modular approach, divided into
                            control, external perception, telemetry, and user
                            interface modules. Each of these modules collects
                            data from sensors and sends it to the robot&apos;s
                            central processing unit, with the exception of the
                            control and signaling modules, which receive
                            information from the central unit. A flowchart of
                            this process can be found on the image below.
                        </S.Body>
                        <img
                            src="/assets/Hemabot_014.png"
                            height={ImageHeight}
                            style={{
                                objectFit: 'contain',
                                margin: '16px 0 24px 0'
                            }}
                            alt="logo"
                        />
                        <S.Title2>Hemabot&apos;s External Perception</S.Title2>
                        <S.Body>
                            The robot&apos;s external perception was implemented
                            using a camera, 10 laser proximity sensors, an
                            accelerometer, and a LIDAR sensor (Light Detection
                            and Ranging), which serves as the robot&apos;s
                            primary sensing tool. The LIDAR sensor works by
                            emitting light waves in all directions within a
                            plane and measuring the distance traveled by these
                            rays. For this project, we chose to use the RPLIDAR
                            A1 from Slamtec due to its low cost, sufficient data
                            collection for the robot&apos;s application, and
                            easy integration with the other tools in the
                            project.
                        </S.Body>
                        <S.Body>
                            In the first version of the robot, we placed a LIDAR
                            sensor on the top of the robot to maximize its field
                            of vision, as this was the only location where other
                            parts of the platform would not interfere with
                            detection. Initially, our goal was to ensure
                            360-degree mapping to achieve the highest possible
                            spatial accuracy. However, in later versions, we
                            considered positioning the sensor lower because its
                            scanning is done in a single plane. Therefore, our
                            priority shifted to ensuring it could detect as many
                            obstacles as possible (such as children, strollers,
                            wheelchairs, and hospital equipment).
                        </S.Body>
                        <S.Body>
                            The video below shows the mapping we performed in
                            the hallway of our laboratory.
                        </S.Body>
                        <video
                            width="auto"
                            height="500"
                            controls
                            autoPlay
                            loop
                            muted
                            style={{ margin: '24px 0 24px 0' }}
                        >
                            <source
                                src="/assets/Slamtec.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <S.Body>
                            Using the LIDAR sensor provides robust mapping of
                            the surroundings and effective obstacle detection
                            within the illuminated regions and obstacles outside
                            of the LIDAR&apos;s field of vision were intended to
                            be detected by the other sensors positioned at
                            strategic points on the robot. The image below shows
                            the range of mapping achieved by positioning the 10
                            laser proximity sensors around the base of the
                            robot, during our first version implementation.
                        </S.Body>
                        <img
                            src="/assets/Hemabot_04.png"
                            height={ImageHeight}
                            style={{
                                objectFit: 'contain',
                                margin: '16px 0 24px 0'
                            }}
                            alt="logo"
                        />
                        <S.Body>
                            The camera, on the other hand, was not intended to
                            contribute to the robot&apos;s mapping or
                            route-finding, as was the case with the LIDAR and
                            proximity sensors. Instead, its purpose was to
                            classify obstacles using a neural network in the
                            processing unit. The images captured by the camera
                            were analyzed to differentiate between objects in
                            front of the robot, allowing it to make different
                            decisions depending on the type of obstacle detected
                            (for example, navigating around a hospital bed but
                            waiting for an elderly person to move out of the
                            way). However, this solution was not implemented,
                            first due to a series of privacy policy concerns and
                            second because of the complexity of obtaining a
                            robust image dataset for building the neural
                            network.
                        </S.Body>
                        <S.Title2>Telemetry</S.Title2>
                        <S.Body>
                            The telemetry module had two main functions. The
                            first was to send data about the robot&apos;s
                            status, such as battery voltage, current flow
                            through the system, and internal temperature,
                            thereby preventing unexpected failures. The other
                            purpose of the telemetry module was to provide the
                            robot&apos;s speed and position over time, allowing
                            the autonomous navigation algorithms to globally
                            localize the platform. This role was fulfilled by
                            the motor driver, which, having embedded encoders,
                            was able to provide this data with good accuracy to
                            the robot&apos;s central processing unit.
                        </S.Body>
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Software Development
                        </S.Title1>
                        <S.Body>
                            Once the sensors were properly mounted, the focus
                            shifted to efficient data collection and
                            implementing control algorithms for autonomous
                            navigation. This involved three main tasks:
                            collecting sensor data via microcontrollers,
                            processing the data to make it usable by the central
                            processing unit, and applying the information to
                            navigation algorithms, all managed by the
                            robot&apos;s onboard systems
                        </S.Body>
                        <S.Title2>ROS - Robot Operating System</S.Title2>
                        <S.Body>
                            The main tool for controlling the robot is ROS
                            (Robot Operating System), a set of libraries and
                            development tools for robotic applications. It is
                            highly useful as it directly integrates with
                            simulation software and includes various open-source
                            control algorithms. Its functionality is based on
                            nodes that publish and/or read messages in topics.
                            This allows for multiple nodes, each with a specific
                            function, all interconnected, publishing their own
                            topics and reading others&apos;. The interconnection
                            between nodes is managed by the master node, which
                            tracks the published topics and connects them to the
                            listeners, ensuring the system operates smoothly.
                        </S.Body>
                        <S.Body>
                            Currently, the robot operates with 8 nodes, each
                            with specific functions. Each sensing module acts as
                            a node that publishes topics from its respective
                            sensors, which are then read by the navigation node,
                            responsible for mapping the surroundings and
                            creating a route plan. This allows for publications
                            to be made for control and signaling.
                        </S.Body>
                        <S.Title3>Virtual Simulations</S.Title3>
                        <S.Block>
                            <S.LeftSideBlock>
                                <S.Body>
                                    Before the physical assembly of the robot
                                    model, various simulations were carried out
                                    in a virtual environment using the Gazebo
                                    and RViz software. These simulations were
                                    essential for the implementation of mapping
                                    and navigation algorithms and helped in
                                    decisions regarding the placement of sensors
                                    in the final robot model. The simulation was
                                    divided into two main areas: the physical
                                    modeling of the robot in its environment and
                                    its computer vision.
                                </S.Body>
                                <S.Body>
                                    After modeling the robot in URDF (Universal
                                    Robotic Description File) and assigning the
                                    operating characteristics and performance
                                    properties of each element (such as viewing
                                    angle, sampling rate, resolution, minimum
                                    detected distance, and maximum distance), we
                                    set up a simulation environment and were
                                    able to explore how the sensors positioned
                                    around the robot interpreted this
                                    environment.
                                </S.Body>
                            </S.LeftSideBlock>
                            <S.RightSideBlock>
                                <img
                                    src="/assets/Hemabot_015.png"
                                    height={ImageHeight}
                                    alt="logo"
                                />
                            </S.RightSideBlock>
                        </S.Block>
                        <S.Body>
                            In addition to visualizing the data directly from
                            virtual sensing, we developed an algorithm to
                            facilitate the interpretation of measured distances.
                            The algorithm works by creating &quot;virtual
                            walls&quot; between the sensors. If two adjacent
                            sensors have readings indicating a nearby object, it
                            is interpreted that there is an obstacle across the
                            entire region between the detected points. This
                            algorithm was later used for the robot&apos;s
                            navigation, aiding in the creation of cost maps that
                            inflate the regions where obstacles are identified.
                        </S.Body>
                        <S.Title3>Mapping (Navigation Algorithms)</S.Title3>
                        <S.Body>
                            Mapping the environment is done in two phases:
                            global and local. The global phase is the simplest
                            part of the autonomous navigation process. A
                            preliminary mapping of the robot&apos;s navigation
                            environment was carried out, and a file was
                            generated and provided to the algorithm along with
                            the robot&apos;s initial position.
                        </S.Body>
                        <S.Block>
                            <S.LeftSideBlock>
                                <img
                                    src="/assets/Hemabot_016.png"
                                    height={ImageHeight}
                                    style={{ objectFit: 'contain' }}
                                    alt="logo"
                                />
                            </S.LeftSideBlock>
                            <S.RightSideBlock>
                                <S.Body>
                                    For the local phase, the data from the
                                    distance sensors is first processed to be
                                    published in ROS in the appropriate format.
                                    For this, we developed the previously
                                    mentioned &quot;wall generator&quot;
                                    algorithm. With the cost map, as the
                                    distance from the inflated areas (created by
                                    identified obstacles) increases, the cost
                                    decreases until it reaches its minimum
                                    value, indicating that the path is clear at
                                    a given position.
                                </S.Body>
                                <S.Body>
                                    Based on data from the global and local cost
                                    maps, another algorithm plots an optimized
                                    route to minimize the total cost of the
                                    path. It does this by interpreting the maps
                                    as weighted graphs and using{' '}
                                    <strong>
                                        Dijkstra&apos;s and A*&apos;s algorithm
                                    </strong>{' '}
                                    to find a route with optimized cost.
                                </S.Body>
                                <S.Body>
                                    One of the robot&apos;s key nodes in ROS is
                                    Move_Base which is responsible for taking
                                    input from global and local cost maps,
                                    generated by the robot&apos;s sensors and
                                    algorithms, to plan and execute a safe and
                                    efficient route.
                                </S.Body>
                            </S.RightSideBlock>
                        </S.Block>
                        <S.Body>
                            It currently uses Dijkstra&apos;s algorithm for
                            global path planning, interpreting the environment
                            as a weighted graph to find the most cost-effective
                            route. For local navigation, Move_Base employs the
                            <strong> Dynamic Window Approach (DWA)</strong>, a
                            reactive algorithm that helps the robot avoid
                            obstacles in real-time while following the global
                            path. In more recent versions, we are exploring the
                            use of A* in place of Dijkstra&apos;s algorithm.
                            This change is motivated by A*&apos;s ability to
                            incorporate heuristics, which allows it to
                            prioritize paths more effectively and potentially
                            reduce computational time in large environments. A*
                            could offer a more efficient solution, especially in
                            complex spaces where faster pathfinding is crucial.
                        </S.Body>
                        <video
                            width="auto"
                            height="500"
                            controls
                            autoPlay
                            loop
                            muted
                            style={{ margin: '24px 0 24px 0' }}
                        >
                            <source
                                src="/assets/navegacao2.mp4"
                                type="video/mp4"
                            />
                            Your browser does not support the video tag.
                        </video>
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Hardware and Software Integrations
                        </S.Title1>
                        <S.Title2>Firmware</S.Title2>
                        <S.Body>
                            With the electronic components capable of reading
                            the surrounding environment and the high-level
                            autonomous navigation code in place, it became
                            necessary to bridge these two systems. This involved
                            collecting sensor data, converting it into ROS
                            messages, and sending them to the processing unit.
                        </S.Body>
                        <S.Body>
                            To achieve this, the firmware was developed,
                            comprising low-level code in the microcontrollers.
                            Each sensor module had its own code that created a
                            ROS node and published topics with sensor data for
                            the onboard computer. For each sensor type, a C++
                            class was written to streamline reading and improve
                            code clarity. Classes were also created for the I2C
                            and SPI communication protocols between the modules.
                        </S.Body>
                        <S.Body>
                            ROS topic publication was done using{' '}
                            <strong>rosserial</strong>, a standard ROS
                            data-wrapping protocol for sending messages over a
                            serial connection (USB cable). On the
                            microcontroller side, the rosserial Arduino library
                            was used to create a node and publish messages to a
                            topic, while rosserial Python was used on the
                            processing unit to receive these topics from the
                            microcontrollers.
                        </S.Body>
                        <S.Title2>Assembly and Testing</S.Title2>
                        <S.Block>
                            <S.LeftSideBlock>
                                <S.Body>
                                    The assembly of the first version of Hemabot
                                    began in early 2020, following a series of
                                    virtual tests and simulations. We used the
                                    drivers and wheels from a donated hoverboard
                                    for the robot&apos;s mobility, and as
                                    previously mentioned, we incorporated a
                                    Jetson Nano for processing. Initially,
                                    before implementing autonomous movement
                                    algorithms, we conducted a series of
                                    communication tests to ensure the
                                    robot&apos;s mechanical components met the
                                    project&apos;s requirements. To do this, we
                                    performed several tests using manual
                                    control, with the computer keyboard
                                    controlling the robot through a ROS node
                                    called joystick, and two ESP32s (one
                                    connected to the computer and the other to
                                    the Jetson Nano).
                                </S.Body>
                                <S.Body>
                                    We conducted a series of tests to evaluate
                                    the motor&apos;s braking precision and how
                                    it was affected when the robot was carrying
                                    weight. We also measured both the average
                                    and maximum speed using the hoverboard
                                    drivers, analyzing how these values changed
                                    under different load conditions.
                                    Additionally, we assessed the precision of
                                    the robot&apos;s movement by utilizing the
                                    encoders, testing how well the robot
                                    followed planned paths and whether any
                                    adjustments were needed. These tests covered
                                    a wide range of performance factors, and
                                    each of them revealed areas where the
                                    software needed modifications. As expected,
                                    even though we had accurate simulations,
                                    real-world applications tend to show
                                    variations, such as mechanical discrepancies
                                    and environmental factors, that require us
                                    to rethink and adapt the original software
                                    implementation. This process reinforced the
                                    importance of iterative testing and
                                    adjustment in ensuring the robot&apos;s
                                    optimal performance.
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
                                    style={{ margin: '24px 0 24px 0' }}
                                >
                                    <source
                                        src="/assets/Hemabot_019.mp4"
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </S.RightSideBlock>
                        </S.Block>
                        <S.Body>
                            The assembly of the electronic components was quite
                            exhausting and had to be refined as we adapted our
                            goals. Although my primary role was as a software
                            developer, due to the small size of our team, I
                            frequently had to work on implementing and
                            rebuilding parts of Hemabot&apos;s electronics to
                            ensure it performed as predicted in simulations.
                            Connecting all these areas during the assembly of a
                            complex embedded system, such as an autonomous
                            delivery robot, was undoubtedly one of the greatest
                            challenges of my undergraduate studies. However, it
                            was also one of the most rewarding moments, as it
                            synthesized all of my engineering knowledge into a
                            real-world application, giving me a deep sense of
                            satisfaction.
                        </S.Body>
                        <S.Title1 style={{ marginTop: '32px' }}>
                            Media Coverage
                        </S.Title1>
                        <S.Body style={{ marginBottom: '24px' }}>
                            Hemabot, in addition to winning innovation awards at
                            the university, was featured in a report on the Fala
                            Brasil program in May 2020. The report highlighted
                            how the public university produces knowledge for
                            real-world applications that have a transformative
                            impact on people&apos;s lives, in this case, in the
                            healthcare field.
                        </S.Body>
                        <iframe
                            width="auto"
                            height={ImageHeight + 200}
                            src="https://www.youtube.com/embed/wfF5v_q72d0?si=aIEYfeebzVruxyq2"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </S.ContentContainer>
                </S.ContainerWrapper>
            </S.Container>
        </S.Wrapper>
    );
};

export default HemabotTemplate;
