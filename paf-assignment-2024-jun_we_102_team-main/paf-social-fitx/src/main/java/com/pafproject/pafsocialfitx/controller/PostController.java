package com.pafproject.pafsocialfitx.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pafproject.pafsocialfitx.models.Post;
import com.pafproject.pafsocialfitx.repository.PostRepository;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;


@RestController
public class PostController {
    

    @Autowired
    PostRepository postRepository;

    @GetMapping("/posts")
    public List<Post> getPosts(){

        List<Post> users = postRepository.findAll();



        return users;
    }

    @PostMapping("/posts")
    public Post createPost(@RequestBody Post post){

        Post newPost = new Post();
        newPost.setId(post.getId());
        newPost.setImage(post.getImage());
        newPost.setVideo(post.getVideo());
        newPost.setCaption(post.getCaption());
        newPost.setCreatedAt(LocalDateTime.now());
        newPost.setLikes(post.getLikes());
        newPost.setDescription(post.getDescription());

        Post savedPost = postRepository.save(newPost);

        return savedPost;
    }

    @PutMapping("/posts/like/{postid}")
    public Post addLike(@RequestBody Post post,  @PathVariable Integer postid) throws Exception{

        Optional<Post> post1 = postRepository.findById(postid);

        if(post1.isEmpty()){
            throw new Exception("post not exist with id " + postid);
        }   

        Post oldPost = post1.get();

        if(post.getLikes()!=null){
            oldPost.setLikes(post.getLikes());
        }

        Post updatedUser = postRepository.save(oldPost);

        return updatedUser;

    }

    @PutMapping("/posts/{postid}")
    public Post updatePost(@RequestBody Post post, @PathVariable Integer postid) throws Exception{

        Optional<Post> post1 = postRepository.findById(postid);

        if(post1.isEmpty()){
            throw new Exception("post not exist with id " + postid);
        }   

        Post oldPost = post1.get();

        if(post.getCaption()!=null){
            oldPost.setCaption(post.getCaption());
        }
        if(post.getImage()!=null){
            oldPost.setImage(post.getImage());
        }
        if(post.getVideo()!=null){
            oldPost.setVideo(post.getVideo());
        }
        if(post.getDescription()!=null){
            oldPost.setDescription(post.getDescription());
        }


        Post updatedUser = postRepository.save(oldPost);

        return updatedUser;
    }

    @DeleteMapping("posts/{postid}")
    public String deletePost(@PathVariable("postid") Integer postid) throws Exception{


        Optional<Post> post = postRepository.findById(postid);

        if(post.isEmpty()){
            throw new Exception("post not exist with id " + postid);
        }  


        postRepository.delete(post.get());

    return "post deleted successfully with id " + postid;

}

}
