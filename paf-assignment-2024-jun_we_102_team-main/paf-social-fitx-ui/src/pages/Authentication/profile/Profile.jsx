import { Grid } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";

const Profile = () => {

    const {id} = useParams()
    return(

        <div>Profile - {id}</div>

       
    )
}

export  default Profile