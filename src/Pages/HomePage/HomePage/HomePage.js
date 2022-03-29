import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import PopularCourse from '../PopularCourse/PopularCourse';
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <UpcomingEvent></UpcomingEvent>
            <PopularCourse></PopularCourse>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;