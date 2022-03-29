import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const pages = ['Home', 'Courses', 'Blog', 'About',];



const Navigations = () => {
    const { user, logout } = useAuth()
    let navigate = useNavigate();

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    const handleNavClicked = (page) => {
        console.log(page);
        switch (page) {

            case "Home": navigate('/home')
                break;
            case "Courses": navigate('/courses')
                break;
            case "Blog": navigate('/blog')
                break;
            case "About": navigate('/about')
                break;
            default: navigate('/home')
        }


    }
    const handleLogOut = () => {
        logout()
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                        >
                            Genius Choice
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" onClick={() => handleNavClicked(page)}>{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                        >
                            GC
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                >
                                    <Typography onClick={() => handleNavClicked(page)}>
                                        {page}
                                    </Typography>
                                </Button>
                            ))}
                        </Box>

                        <Box sx={{ flexGrow: 0 }}>
                            {
                                user.email ? <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-around",
                                        alignItems: "center"
                                    }}
                                >
                                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}  >{user.displayName}</Box>
                                    <img src={user.photoURL} style={{ borderRadius: "50%", width: "20%" }} alt="" />
                                    <Button
                                        style={{
                                            textDecoration: 'none',
                                            color: 'white'
                                        }}
                                        onClick={handleLogOut}
                                    >Logout </Button>
                                </div> : <NavLink style={{
                                    textDecoration: 'none',
                                    color: 'white'
                                }}
                                    to="/login" ><Button color="inherit"  >Login</Button></NavLink>
                            }
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
};

export default Navigations;