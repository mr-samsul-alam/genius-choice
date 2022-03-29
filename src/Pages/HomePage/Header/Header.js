import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography'
import React from 'react';
import Navigations from '../../Shared/Navigations/Navigations';


const Header = () => {
    const theme = createTheme();

    theme.typography.h3 = {
        fontSize: '1.2rem',
        '@media (min-width:300px)': {
            fontSize: '2rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '3.5rem',
        },
    };

    return (
        <div>
            <Navigations></Navigations>
            <div>
                <Grid
                    style={{
                        backgroundImage: `url("https://edon-ng.envytheme.com/banner-bg.e397b0299aadacaf.jpg")`,
                        height: "100%",
                        marginTop: "2px"
                    }}
                    container
                    spacing={2}
                >
                    <Grid
                        style={{
                            backgroundImage: `url("https://edon-ng.envytheme.com/assets/images/banner/banner-shap-left.png")`,
                            height: "100%",
                            width: "100%",
                            backgroundRepeat: " no-repeat"
                        }} item md={6} xs={12}>
                        <Box style={{ marginTop: "100px" }} >
                            <ThemeProvider theme={theme}>
                                <Typography variant="h3" gutterBottom>
                                    <span style={{ color: 'rgb(27, 191, 114)' }} >Choice  </span> Like Genius
                                </Typography>
                                <Typography variant="h3" gutterBottom>
                                    And Be Like<span style={{ color: 'rgb(27, 191, 114)' }} > Genius  </span>
                                </Typography>
                                <b>The experience of our instructors benefits your career</b>
                            </ThemeProvider>

                        </Box>

                    </Grid>
                    <Grid item md={6} xs={12}>
                        <img style={{ width: "100%", height: "auto" }} src="https://edon-ng.envytheme.com/assets/images/banner/banner-img.png" alt="2 person's pic" />

                    </Grid>

                </Grid>
            </div>
        </div>
    );
};

export default Header;