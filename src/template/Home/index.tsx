// HomeTemplate.tsx
import { useState, useEffect } from 'react';
import InitialCard from 'components/GeneralComponents/Cards/InitialCard';
import VolvoHS from 'components/GeneralComponents/Cards/VovoHs';
import Hemabot from 'components/GeneralComponents/Cards/Hemabot';
import SPOD from 'components/GeneralComponents/Cards/SPOD';
import Footer from 'components/GeneralComponents/Cards/Footer';
import * as S from './styles';

const HomeTemplate = () => {
    const [backgroundColor, setBackgroundColor] = useState('#16594A');

    useEffect(() => {
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
            <InitialCard />
            <VolvoHS />
            <Hemabot />
            <SPOD />
            <Footer />
        </S.Wrapper>
    );
};

export default HomeTemplate;
