import { Grid } from "@mui/material";
import React from "react";
import SearchUser from "./SearchUser";
import PopularUserCard from "./PopularUserCard";
import './MiddlePart.css';

const HomeRight = () => {

    const popularUser = [1,1,1,1,1,1,1,1]

   

    const homeRightStyle = {
        position: 'absolute',
        left:'10px'
    }

    return(

        <div style={homeRightStyle}>
<div className='pt-10'>
            <SearchUser/>
            
            </div>

            <div className='pt-10'>
                <p className='font-semibold opacity-70'>Suggestions</p>
                <p className='text-xs font-semibold opacity-95'>View All</p>

            </div>
            <div className="scroll-hide-scrollbar">
            <div className='pt-10'>
            
            {popularUser.map((item)=><PopularUserCard />)}
            </div>
            </div>
        </div>

       
    )
}

export default HomeRight
