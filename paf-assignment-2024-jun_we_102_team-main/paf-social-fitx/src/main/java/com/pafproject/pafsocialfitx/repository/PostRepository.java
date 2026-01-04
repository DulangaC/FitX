package com.pafproject.pafsocialfitx.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pafproject.pafsocialfitx.models.Post;

public interface PostRepository extends JpaRepository<Post,Integer> {


}