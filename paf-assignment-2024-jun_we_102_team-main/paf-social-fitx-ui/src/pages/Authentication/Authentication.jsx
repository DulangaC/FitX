import { Card, Grid } from "@mui/material";
import React from "react";
import Login from "./Login";
import backgroundImage from "./images/dumbbells-floor-gym-ai-generative.jpg"; // Import the image

import Register from "./Register";
import { Route, Routes } from "react-router-dom";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';


const Authentication = () => {
    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const cardStyle = {
        padding: '16px',
        backdropFilter: 'blur(8px)', // Apply blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        borderRadius: '8px',
        maxWidth: '400px',
        width: '100%',
    };

    const siteNameStyle = {
        fontSize: '15px',
        position: 'absolute',
        left:'75px',
        top: '70px',
        fontFamily: ' sans-serif', // Example font family
        color: '#ffffff', // Example text color
 
    };


    return (
   

    
        <div style={containerStyle}>


	

            <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={10} sm={6} md={4} style={{ position: 'relative', left: '75%', transform: 'translateX(-125%)' }}>
                    <Card style={cardStyle}>

                <center>   <span className="logo text-xl ">FIT X </span>
                <span className="inline-block align-top"><MonitorHeartIcon/></span>
                <br/>
                <span className="logo">  SOCIALS</span></center>

                        <div style={{ marginBottom: '20px', marginTop: '20px' }}>
                            <p style={{ textAlign: 'center', fontSize: '14px' }}>Welcome to FitX Socials</p>
                        </div>

                        <Routes>
                            <Route path='/' element={<Login/>}></Route>
                            <Route path='/login' element={<Login/>}></Route>
                            <Route path='/register' element={<Register/>}></Route>
                        </Routes>

                        
                    </Card>
                </Grid>
            </Grid>
  


        <div style={siteNameStyle}>
        <span className="logo text-white">FIT X </span>
                <span className="inline-block align-top text-white"><MonitorHeartIcon/></span>
                <br/>
                <span className="logo text-white">SOCIALS</span>
        </div>
        </div>
    );
};

export default Authentication;
