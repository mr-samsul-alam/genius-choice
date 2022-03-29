import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigations from '../../Shared/Navigations/Navigations';

const SingleCourseCard = () => {
    const [courses, setCourses] = useState([])
    const { id } = useParams()
    useEffect(() => {
        fetch('/Courses_fake.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    const clickedCourse = courses.filter(course => course?.index === parseFloat(id))

    console.log(clickedCourse);
    return (
        <div>
            <Navigations></Navigations>
            <Container Container xs={12} md={3} style={{ paddingTop: "30px" }}>
                <Card  >
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="100%"
                        image={clickedCourse[0]?.picture}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={{ color: "#1BBF72" }}>
                            {clickedCourse[0]?.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {clickedCourse[0]?.about}
                        </Typography>
                    </CardContent>
                    <Button style={{ margin: "50px" }} variant="contained" >Enroll</Button>
                </Card>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default SingleCourseCard;