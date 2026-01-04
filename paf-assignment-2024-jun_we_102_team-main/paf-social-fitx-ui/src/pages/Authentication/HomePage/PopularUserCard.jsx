import { Avatar, CardHeader, Grid, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const PopularUserCard = () => {

    return(

        <div>  <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="User"
        subheader="@user"
      />
</div>

       
    )
}

export  default PopularUserCard
