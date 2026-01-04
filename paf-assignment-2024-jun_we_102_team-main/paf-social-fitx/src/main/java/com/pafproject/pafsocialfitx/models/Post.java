package com.pafproject.pafsocialfitx.models;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import jakarta.annotation.Generated;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "posts")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)

    private Integer id;

    private Integer likes;

    private String caption;

    private String image;

    private String video;
    
    private String description;

    private LocalDateTime createdAt;

    

    public Post(){

    }

    











    













   



























    public Post(Integer id, Integer likes, String caption, String image, String video, String description,
            LocalDateTime createdAt) {
        this.id = id;
        this.likes = likes;
        this.caption = caption;
        this.image = image;
        this.video = video;
        this.description = description;
        this.createdAt = createdAt;
    }























































    public Integer getId() {
        return id;
    }













    public void setId(Integer id) {
        this.id = id;
    }













    public String getCaption() {
        return caption;
    }













    public void setCaption(String caption) {
        this.caption = caption;
    }













    public String getImage() {
        return image;
    }













    public void setImage(String image) {
        this.image = image;
    }













    public String getVideo() {
        return video;
    }













    public void setVideo(String video) {
        this.video = video;
    }













    public LocalDateTime getCreatedAt() {
        return createdAt;
    }













    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }



























    public Integer getLikes() {
        return likes;
    }



























    public void setLikes(Integer likes) {
        this.likes = likes;
    }























































    public String getDescription() {
        return description;
    }























































    public void setDescription(String description) {
        this.description = description;
    }













    
}
