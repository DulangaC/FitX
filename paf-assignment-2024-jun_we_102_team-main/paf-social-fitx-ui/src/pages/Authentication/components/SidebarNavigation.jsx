import { iconButtonClasses } from "@mui/material";



import Home from "@mui/icons-material/Home";
import Notifications from '@mui/icons-material/Notifications';
import Chat from '@mui/icons-material/Chat';
import Explore from "@mui/icons-material/Explore";
import Create from "@mui/icons-material/Create";
import AccountBox from '@mui/icons-material/AccountBox';


export const navigationMenu = [

    {
        title:"Home",
        icon:<Home/>,
        path:"/"
    },

    {
        title:"Posts",
        icon:<Explore/>,
        path:"/"
    },

    {
        title:"Create",
        icon:<Create/>,
        path:"/"
    },

    {
        title:"Notification",
        icon:<Notifications/>,
        path:"/"
    },

    {
        title:"Message",
        icon:<Chat/>,
        path:"/"
    },

    {
        title:"Profile",
        icon:<AccountBox/>,
        path:"/"
    },
    
]