import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import PopularCoursesCard from '../../HomePage/PopularCoursesCard/PopularCoursesCard';
import Footer from '../../Shared/Footer/Footer';
import Navigations from '../../Shared/Navigations/Navigations';

const CoursesPage = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('/Courses_fake.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <>
            <Navigations></Navigations>
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map(product => <PopularCoursesCard key={product._id} courses={product}></PopularCoursesCard>)
                    }
                </Grid> 
            </Container>
            <Footer></Footer>
        </>

    );
};

export default CoursesPage;