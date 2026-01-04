package com.pafproject.pafsocialfitx.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;

@SpringBootApplication
@RestController
public class HomeController {


    @GetMapping
    public String homeControllerHandler(){
        return "this is home controller";
    }





    // @PutMapping("path/{id}")
    // public String putMethodName(@PathVariable String id, @RequestBody String entity) {
    //     //TODO: process PUT request
        
    //     return entity;
    // }

    // @PostMapping("path")
    // public String postMethodName(@RequestBody String entity) {
    //     //TODO: process POST request
        
    //     return entity;
    // }
    

    // @PostMapping("path")
    // public String postMethodName(@RequestBody String entity) {
    //     //TODO: process POST request
        
    //     return entity;
    // }
    
    
    
}
