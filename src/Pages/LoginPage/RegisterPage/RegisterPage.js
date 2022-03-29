import React from 'react';
import { Container, Typography, TextField, Button, CircularProgress, Alert, } from '@mui/material';
import { useState } from 'react';
import { Grid } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigations from '../../Shared/Navigations/Navigations';
const RegisterPage = () => {
    const { user, registerUser, isLoading, authError } = useAuth();
    const [regData, setRegData] = useState({});

    const history = useNavigate();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...regData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setRegData(newLoginData);
    }
    const handleLoginSubmit = e => {
        if (regData.password !== regData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(regData.email, regData.password, regData.name, history);

        e.preventDefault();
    }
    return (
        <>
        <Navigations></Navigations>
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>Register</Typography>
                    {!isLoading && <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Name"
                            name="name"
                            type="name"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}

                            label="ReType Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                        <NavLink
                            style={{ textDecoration: 'none' }}
                            to="/login">
                            <Button variant="text">Already Registered? Please Login</Button>
                        </NavLink>
                    </form>}
                    {isLoading && <CircularProgress />}
                    {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                       
                </Grid>
            </Grid>
        </Container>
        </>
        
    );
};

export default RegisterPage;