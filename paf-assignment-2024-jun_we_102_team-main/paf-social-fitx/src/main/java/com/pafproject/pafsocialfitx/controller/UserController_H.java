package com.pafproject.pafsocialfitx.controller;

import org.springframework.web.bind.annotation.RestController;

import com.pafproject.pafsocialfitx.models.User;
import com.pafproject.pafsocialfitx.repository.UserRepository;
import com.pafproject.pafsocialfitx.service.UserService;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PutMapping;





@RestController
public class UserController_H {

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @GetMapping("/api/users")
    public List<User> getUsers(){

        List<User> users = userRepository.findAll();

       

        return users;
    }

    @GetMapping("/api/users/{userid}")
    public User getUserById(@PathVariable("userid")Integer id) throws Exception{

        User user = userService.findUserById(id);
        return user;

        
    }


    @GetMapping("/users/searchEmail/{email}")
    public User getUserByEmail(@PathVariable("email")String email) {

        User user = userService.findUserByEmail(email);
        return user;
    
    }
    

    


    @PutMapping("/api/users")
    public User updateUser(@RequestHeader("Authorization")String jwt, @RequestBody User user) throws Exception{

        User reqUser = userService.findUserByJwt(jwt);
        User updatedUser = userService.updateUser(user,reqUser.getId());
        return updatedUser;
    }

    
    

    @PutMapping("/api/users/follow/{userid2}")
    public User followUserHandler(@RequestHeader("Authorization")String jwt, @PathVariable
    Integer userid2) throws Exception{

        User reqUser = userService.findUserByJwt(jwt);
        User user = userService.followUser(reqUser.getId(), userid2);

        return user;
    }


    


    @GetMapping("/api/users/search")
    public List<User>searchUser(@RequestParam("query")String query){

        List<User> users =  userService.searchUser(query);
        return users;
    }


    @DeleteMapping("users/{userid}")
        public String deleteUser(@PathVariable("userid") Integer userid) throws Exception{


            Optional<User> user = userRepository.findById(userid);

            if(user.isEmpty()){
                throw new Exception("user not exist with id " + userid);
            }  


            userRepository.delete(user.get());

        return "user deleted successfully with id " + userid;
 
    }

    @GetMapping("/api/users/profile")
    public User getUserFromToken(@RequestHeader("Authorization")String jwt){

        // System.out.println("jwt ----- "+jwt); 

        User user = userService.findUserByJwt(jwt);
        user.setPassword(null);
         return user;

    }
    
}
