import { Card, Container, Divider, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const UpcomingEvent = () => {
    return (
        <div>
            <Container spacing={1} style={{ padding: "30px" }}>
                <h1>Our Upcoming Event</h1>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <div>
                            <Card  >
                                <Typography sx={{ fontSize: 24 }} style={{ padding: "20px" }}>
                                    <b>JavaScript A Language</b>
                                </Typography>
                                <Divider />
                                <Box style={{ display: "flex", flexDirection: "row" }}>
                                    <Box sx={{ my: "auto", mx: "auto" }}> <b>01 OCt 2021</b>  </Box>
                                    <Box style={{ padding: "50px" }}>
                                        <Typography>
                                            <b>Location</b>
                                            <Typography>
                                                New Your , New York
                                            </Typography>
                                        </Typography>
                                        <Typography>
                                            <b> Speaker</b>
                                            <Typography>
                                                Darci Gutierrez
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                            <div>
                                <Card style={{ marginTop: "50px" }} >
                                    <Typography sx={{ fontSize: 24 }} style={{ padding: "20px" }}>
                                        <b>JavaScript A Language</b>
                                    </Typography>
                                    <Divider />
                                    <Box style={{ display: "flex", flexDirection: "row" }}>
                                        <Box sx={{ my: "auto", mx: "auto" }}> <b>01 OCt 2021</b>  </Box>
                                        <Box style={{ padding: "50px" }}>
                                            <Typography>
                                                <b>Location</b>
                                                <Typography>
                                                    New Your , New York
                                                </Typography>
                                            </Typography>
                                            <Typography>
                                                <b> Speaker</b>
                                                <Typography>
                                                    Darci Gutierrez
                                                </Typography>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4} style={{
                        backgroundColor: "#1BBF72", borderTopLeftRadius: "900px",

                    }}>
                        <img style={{ width: "100%", height: "100%" }} src="https://edon-ng.envytheme.com/assets/images/eevent-img-1.png" alt="" />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <Card  >
                                <Typography sx={{ fontSize: 24 }} style={{ padding: "20px" }}>
                                    <b>JavaScript A Language</b>
                                </Typography>
                                <Divider />
                                <Box style={{ display: "flex", flexDirection: "row" }}>
                                    <Box sx={{ my: "auto", mx: "auto" }}> <b>01 OCt 2021</b>  </Box>
                                    <Box style={{ padding: "50px" }}>
                                        <Typography>
                                            <b>Location</b>
                                            <Typography>
                                                New Your , New York
                                            </Typography>
                                        </Typography>
                                        <Typography>
                                            <b> Speaker</b>
                                            <Typography>
                                                Darci Gutierrez
                                            </Typography>
                                        </Typography>
                                    </Box>
                                </Box>
                            </Card>
                            <div>
                                <Card style={{ marginTop: "50px" }} >
                                    <Typography sx={{ fontSize: 24 }} style={{ padding: "20px" }}>
                                        <b>JavaScript A Language</b>
                                    </Typography>
                                    <Divider />
                                    <Box style={{ display: "flex", flexDirection: "row" }}>
                                        <Box sx={{ my: "auto", mx: "auto" }}> <b>01 OCt 2021</b>  </Box>
                                        <Box style={{ padding: "50px" }}>
                                            <Typography>
                                                <b>Location</b>
                                                <Typography>
                                                    New Your , New York
                                                </Typography>
                                            </Typography>
                                            <Typography>
                                                <b> Speaker</b>
                                                <Typography>
                                                    Darci Gutierrez
                                                </Typography>
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Card>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default UpcomingEvent;