import { Avatar, Card, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import red from '@mui/material/colors/red';

const PostCard = ({ post }) => {
  const cardStylePost = {

    backdropFilter: 'blur(8px)', // Apply blur effect
    backgroundColor: '#9da09d', // Semi-transparent white background
    borderRadius: '8px',
  
}

const formatCreatedAt = () => {
  let createdAtTimestamp = post.createdAt;
  let year;
  let month;
  let day;
  let hours;
  let minutes;
  if (Array.isArray(createdAtTimestamp)) {
      // If createdAt is an array, use the first element
    

     year = createdAtTimestamp[0];
   month = createdAtTimestamp[1];
   day = createdAtTimestamp[2];
   hours = createdAtTimestamp[3];
   minutes = createdAtTimestamp[4];
  }
  

  
  return ` ${year}/${month}/${day} ${hours}:${minutes}`;
};

    return (
        <div>
            <Card style={cardStylePost}>
                <CardHeader
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
                    title={<span style={{ fontWeight: 'bold' }}>User {post.id}</span>}
                    subheader={formatCreatedAt()}
                    
                />
                <p className="pl-10" style={{ fontSize: '1rem' }}>{post.caption}</p>
                    <br/>
        
                <CardMedia

                    
                    component="img"
                    height="194"
                    image={post.image} // Assuming the image URL is provided in the post object
                    alt="Post Image"
                />
                
                <div className="" style={{ textAlign: 'center' }}>
    <Typography variant="body1" component="p" style={{ fontSize: '1rem' }}>
        <br/>
        {post.description}
    </Typography>
</div>

                {/* Add other card content as needed */}
            </Card>
        </div>
    );
};

export default PostCard;
