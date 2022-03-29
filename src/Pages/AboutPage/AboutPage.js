import { Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Navigations from '../Shared/Navigations/Navigations';

const AboutPage = () => {
    return (
        <div>
            <Navigations></Navigations>

            <Container style={{ paddingTop: "10px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8} style={{ margin: "auto", paddingTop: "30px" }}>
                        <Card >
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="100%"
                                image="https://edon-ng.envytheme.com/assets/images/about-img-2.jpg"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{ color: "#1BBF72" }}>
                                    We Share Knowledge Among The World
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Donec quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis risus. Sed porttitor lectus nibh. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Sed porttitor lectus nibh. Donec
                                    Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Proin eget tortor risus. Sed porttitor lectus nibh. Praesent sapien massa. Quisque velit nisi, pretium ut lacinia in elementum id enim non nulla sit amet nisl tempus convallis quis ac lectus proin eget.
                                </Typography>
                                <Typography>
                                    Lance Altman
                                    Founder, CEO
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default AboutPage;