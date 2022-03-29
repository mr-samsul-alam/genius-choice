import React from 'react';
import Header from '../Header/Header';
import PopularCourse from '../PopularCourse/PopularCourse';
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <UpcomingEvent></UpcomingEvent>
            <PopularCourse></PopularCourse>
        </div>
    );
};

export default HomePage;