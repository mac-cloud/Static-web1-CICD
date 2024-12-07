import React, { useState } from 'react';
import { Container, Typography, } from '@mui/material';
import { useNavigate } from "react-router-dom";
import backgroundImage from './h1_hero.jpg';
const LandingPage = () => {
    const [showLanguageOptions, setShowLanguageOptions] = useState(false);
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        setShowLanguageOptions(true);

    };
   

    const handleLanguageSelection = (language) => {
       // alert(`You Selected ${language}`);
        //add navigation fuctionality
        
        if (language === "English") {
            navigate("/signup-english");
        } else if(language === "Kiswahili"){
            navigate("/signup-kiswahili");
        } else { navigate("/login")}
    };

    return (
        <div style={backgroundStyle}>
        <Container style={{ textAlign: 'center', marginTop: '40px', color: 'white' }}>
            <Typography variant="h3" gutterBottom>
                Welcome to Virtual Urban Planner 
            </Typography>
            <Typography variant="h6" gutterBottom>
                Harness AI to predict population growth,
                 traffic patterns and infrastructure needs.
            </Typography>
            <div style={{ textAlign: "center", marginTop: "50px"}}>
                {!showLanguageOptions ?(
                    <button onClick={handleGetStartedClick} style={buttonStyle}>
                        Get Started
                    </button>
                ): (
                    <div>
                        <h2>Select your Language:</h2>
                        <button
                        onClick={() => handleLanguageSelection("English")}
                        style={buttonStyle}
                        >
                            Continue in English
                        </button>
                        <button 
                        onClick={() => handleLanguageSelection("Kiswahili")}
                        style={buttonStyle}
                        >
                            Endelea kwa Kiswahili
                        </button>
                        </div>
                )}
                </div>
        </Container>
        </div>
    );
};

const buttonStyle = {
    padding: "10px 20px",
    margin: "10px",
    fontSize: "16px",
    cursor: "pointer",
    backgroudColor: "blue",
    borderRadius: "10px",
    border: "none",
    color: "blue",
   
};
const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroudSize: 'cover',
    backgroudRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '80vh',
    width: '97vw',
};

export default LandingPage;