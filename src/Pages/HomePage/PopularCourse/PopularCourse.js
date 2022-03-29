import React, { useEffect, useState } from 'react';
import PopularCoursesCard from '../PopularCoursesCard/PopularCoursesCard';
import { useNavigate } from 'react-router-dom';
import { Container, Grid } from '@mui/material';

const PopularCourse = () => {
    const [products, setProducts] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        fetch('/Courses_fake.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const popularProducts = products.filter(element => element.enrooled >= parseFloat(472));
    console.log(popularProducts);
    const handleCardDetails = (index) => {
        navigate(`/singleCoursesDetails/${index}`)
    }
    return (
        <Container>
            <h1> Our popular Course </h1>
            <Grid container spacing={2}>
                
                    {
                        popularProducts.map(product => <PopularCoursesCard key={product._id} handleCardDetails={() => handleCardDetails(product.index)} courses={product}></PopularCoursesCard>)
                    } 
            </Grid>



        </Container>
    );
};

export default PopularCourse;