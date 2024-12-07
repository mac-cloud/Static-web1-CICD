import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from  '@mui/material';

const Header =() => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography vatiant="h6" style={{ flexGrow: 1 }}>
                    Urban Planner
                </Typography>
                <Button color="inherit" component={Link} to="/">
                   Home
                </Button>
                <Button color="inherit" component={Link} to="/dashboard">
                   Dashboard
                 </Button>
                <Button color="inherit" component={Link} to="/upload">
                Upload Data
                </Button> 
                <Button color="inherit" component={Link} to="/recommendation">Recommendations</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Header;