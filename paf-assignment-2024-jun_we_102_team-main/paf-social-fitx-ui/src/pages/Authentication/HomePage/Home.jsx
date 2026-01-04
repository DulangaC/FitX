import { Card, Grid } from "@mui/material";
import React from "react";
import Sidebar from "../components/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import MiddlePart from "../components/MiddlePart/MiddlePart";
import Reels from "../components/reels/Reels";
import CreateReels from "../components/reels/CreateReels";
import Profile from "../profile/Profile";
import HomeRight from "./HomeRight";
import backgroundImage from "./dumbbells-floor-gym-ai-generative.jpg";

const HomePage = () => {

    const location = useLocation();

    const containerStyle = {
        backgroundImage: `url(${backgroundImage})`, // Set the background image
        backgroundSize: 'cover',
        minHeight: '100vh', // Ensure the background covers the entire viewport height
  
        color: 'white', // Set text color to white
    };


    const cardStyleNav = {
        top:'60px',
        position: 'relative',
        backdropFilter: 'blur(8px)', // Apply blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        borderRadius: '8px',
        maxWidth: '300px',
        maxHeight:'650px'
    };

    const cardStyleMid = {
        top:'60px',
        position: 'relative',
        backdropFilter: 'blur(8px)', // Apply blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        borderRadius: '8px',
        maxWidth: '700px',
        maxHeight:'800px'
    };

    const cardStyleRight = {
        left: '40px',
        top:'60px',
        position: 'relative',
        backdropFilter: 'blur(8px)', // Apply blur effect
        backgroundColor: 'rgba(255, 255, 255, 0.5)', // Semi-transparent white background
        borderRadius: '8px',
        width: '310px',
        maxHeight:'650px'
    };

    return(

        <div style={containerStyle}>
<div className='px-20'>

    <Grid container spacing={0}>
        <Grid item xs ={0} lg={3}>



       
            <div className='sticky top-0'>
            <Card style={cardStyleNav}>
                <Sidebar/>

                </Card>
            </div>

            
        </Grid>
        
        <Card style={cardStyleMid}>
        <Grid lg={location.pathname==="/"?6:9} 
        item className=""
        xs={12}>

                <Routes>

                    <Route path="/" element = {<MiddlePart/>}/>
                    <Route path="/reels" element = {<Reels/>}/>
                    <Route path="/create-reels" element = {<CreateReels/>}/>
                    <Route path="/profile/:id" element = {<Profile/>}/>
                </Routes>

        </Grid>
        </Card>

        <Card style={cardStyleRight}>
        <Grid item lg = {3} className="relative">
       
            <div className="stickey top-0-w-full">
                <HomeRight/>


            </div>
            
        </Grid>
        </Card>
    </Grid>

    </div>
        </div>
    )
}

export  default HomePage