import React, { useEffect, useState } from 'react';
import PopularCoursesCard from '../PopularCoursesCard/PopularCoursesCard';
 
import { Container, Grid } from '@mui/material';

const PopularCourse = () => {
    const [products, setProducts] = useState([])
    
    useEffect(() => {
        fetch('/Courses_fake.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const popularProducts = products.filter(element => element.enrooled >= parseFloat(456));
    console.log(popularProducts);

    return (
        <Container style={{ paddingTop: "10px" }}>
            <h1 style={{ color: "#1BBF72" }}> Our popular Course </h1>
            <Grid container spacing={2}>

                {
                    popularProducts.map(product => <PopularCoursesCard key={product._id}  courses={product}></PopularCoursesCard>)
                }
            </Grid>



        </Container>
    );
};

export default PopularCourse;