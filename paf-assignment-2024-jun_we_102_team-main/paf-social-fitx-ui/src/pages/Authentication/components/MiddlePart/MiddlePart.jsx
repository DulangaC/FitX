import { Avatar, Card, Grid, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";

import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import PostCard from "../../Post/PostCard";
import './MiddlePart.css'; // Import a CSS file for custom styles

const MiddlePart = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:5454/posts');
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            // Extracting specific columns from the response data
            const parsedPosts = data.map(post => ({
                id: post.id,
                likes: post.likes,
                caption: post.caption,
                image: post.image,
                video: post.video,
                description: post.description,
                createdAt: post.createdAt
            }));
            setPosts(parsedPosts);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };


    const handleOpenCreatepostModal = () => {
        console.log("open post model ...")
    };

    return (
        <div className='px-20 '>
            <div className="pt-5 mt-5 pr-10" style={{ width: "600px", height: "100px" }}>
                <div className="scroll-hide-scrollbar">
                <div className="flex justify-between">
                    <Avatar sx={{ width: "3rem", height: "3rem", color: "primary" }} />
                    <input readOnly className="outline-none w-[100%] rounded-full px-5 bg-transparent border-[#3b4054] border" type="text" />
                </div>

                <div className="flex justify-center space-x-9 mt-5">
                    <div className="flex items-center">
                        <IconButton color="primary" onClick={handleOpenCreatepostModal}>
                            <ImageIcon />
                        </IconButton>
                        <span>Media</span>
                    </div>
                    <div className="flex items-center">
                        <IconButton color="primary" onClick={handleOpenCreatepostModal}>
                            <VideocamIcon />
                        </IconButton>
                        <span>Video</span>
                    </div>
                    <div className="flex items-center">
                        <IconButton color="primary" onClick={handleOpenCreatepostModal}>
                            <ArticleIcon />
                        </IconButton>
                        <span>Write Article</span>
                    </div>
                </div>

                <div className='mt-5 space-y-5'>
                {posts.map((post, index) => (
    <PostCard key={index} post={post} />
))}
                        
                </div>
                </div>
            </div>
        </div>
    );
};

export default MiddlePart;
