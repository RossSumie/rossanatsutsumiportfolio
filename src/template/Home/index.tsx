import { useState, useEffect } from 'react';
import InitialCard from 'components/GeneralComponents/Cards/InitialCard';
import Hemabot from 'components/GeneralComponents/Cards/HemabotCard';
import SPOD from 'components/GeneralComponents/Cards/SPODCard';
import Footer from 'components/GeneralComponents/Cards/Footer';
import NavBar from 'components/GeneralComponents/NavBar';
import VolvoHSCard from 'components/GeneralComponents/Cards/VolvoHSCard'; // Fixed typo in the import
import * as S from './styles';

const HomeTemplate = () => {
    const [backgroundColor, setBackgroundColor] = useState('#16594A');
    const [isDesktop, setIsDesktop] = useState<boolean>(false); // Initialize with false as server doesn't know screen size

    useEffect(() => {
        // This code will only run on the client side
        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 1024); // Now safe to access window
        };

        // Run once after component mounts
        handleResize();

        // Add resize listener
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array ensures this only runs once

    useEffect(() => {
        // This code will only run on the client side
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const scrollPosition = window.scrollY;

            const screenIndex = Math.round(scrollPosition / windowHeight);
            if (screenIndex === 0) {
                setBackgroundColor('#16594A');
            } else if (screenIndex === 1) {
                setBackgroundColor('#C4421A');
            } else if (screenIndex === 2) {
                setBackgroundColor('#12908E');
            } else if (screenIndex === 3 || screenIndex > 3) {
                setBackgroundColor('#F98F45');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <S.Wrapper style={{ backgroundColor }}>
            {isDesktop ? (
                <>
                    <NavBar text="VOLVOHS" text1="HEMABOT" text2="SPOD" />
                    <InitialCard />
                    <VolvoHSCard />
                    <Hemabot />
                    <SPOD />
                    <Footer />
                </>
            ) : (
                <>
                    <InitialCard />
                    <VolvoHSCard />
                    <Hemabot />
                    <SPOD />
                    <Footer />
                </>
            )}
        </S.Wrapper>
    );
};

export default HomeTemplate;
