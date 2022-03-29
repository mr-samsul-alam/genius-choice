import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CeoTips from '../CeoTips/CeoTips';
import Header from '../Header/Header';
import PopularCourse from '../PopularCourse/PopularCourse';
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <PopularCourse></PopularCourse>
            <UpcomingEvent></UpcomingEvent>
            <CeoTips></CeoTips>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;