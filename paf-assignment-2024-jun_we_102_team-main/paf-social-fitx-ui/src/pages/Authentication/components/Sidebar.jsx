import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import { Avatar, Divider } from "@mui/material";


const Sidebar = () => {
    return (
        <div className="card h-screen flex flex-col justify-between py-5">
            <div className="absolute mt-5 pl-5">

            <div style={{position: 'relative', fontSize:'30px', marginBottom:'40px', fontWeight:'bold'}}>
              <span className="logo">FIT X </span>
              
                <span className="inline-flex"><MonitorHeartIcon/></span>
                <br/>
                <span className="logo ">SOCIALS</span>
                </div>


                <div className=" space-y-10 text-grey">
                    {navigationMenu.map((item) => (
                        <div key={item.title} className="flex items-center space-x-3">
                            {item.icon}
                            <p className="text-xl">{item.title}</p>
                        </div>
                    ))}
                </div>



<div className="mt-5 pl-5 flex items-center justify-between pt-5">

    <div className="flex item-center space-x-3">

        <Avatar src=""></Avatar>
        <div>
            <p className="font-bold">Profile 1</p>
            <p className="opacity-70">@Profile 1</p>
            
        </div>

    </div>
</div>

            </div>
        </div>
    );
};

export default Sidebar;
