import React, { useState } from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import { Grid } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigations from '../../Shared/Navigations/Navigations';
const LoginPage = () => {
    const { signUsingGoogle, loginUser, user, isLoading, authError } = useAuth()

    const [loginData, setLoginData] = useState({});
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const location = useLocation();
    // const history = useNavigate();

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location)
        e.preventDefault();
    }

    const handleGoogleLogin = () => {
        signUsingGoogle(location)
    }
    return (
        <>
        <Navigations></Navigations>
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Login</Typography>
                    <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email"
                            name="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/registration">
                            <Button variant="text">New User? Please Register</Button>
                        </NavLink>
                        {isLoading && <CircularProgress />}
                        {user?.email && <Alert severity="success">Login successfully!</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </form>
                    <Typography>
                        <Button onClick={handleGoogleLogin} variant='contained'>Google SignIn</Button>
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>

                </Grid>
            </Grid>
        </Container>
        </>
    );
};

export default LoginPage;