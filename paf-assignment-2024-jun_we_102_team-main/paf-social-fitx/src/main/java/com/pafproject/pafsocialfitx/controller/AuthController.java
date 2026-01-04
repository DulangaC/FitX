package com.pafproject.pafsocialfitx.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.pafproject.pafsocialfitx.config.JwtProvider;
import com.pafproject.pafsocialfitx.models.User;
import com.pafproject.pafsocialfitx.repository.UserRepository;
import com.pafproject.pafsocialfitx.request.LoginRequest;
import com.pafproject.pafsocialfitx.response.AuthResponse;
import com.pafproject.pafsocialfitx.service.CustomUserDetailsService;
import com.pafproject.pafsocialfitx.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@RequestMapping("/auth")
public class AuthController {
    
    @Autowired
    private UserService userService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private  PasswordEncoder passwordEncoder;

    @Autowired
    private CustomUserDetailsService customUserDetailsService;

//  /auth/signup
    @PostMapping("/signup")
    public AuthResponse createUser(@RequestBody User user) throws Exception{

        User isExist = userRepository.findByEmail(user.getEmail());

        if (isExist!= null){
            throw new Exception("this email already used with another account");
        }

        User newUser = new User();

       // newUser.setId(user.getId()); // ALTER TABLE users MODIFY id INT AUTO_INCREMENT; sql command for auto generate id
        newUser.setEmail(user.getEmail());
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());
        newUser.setPassword(passwordEncoder.encode(user.getPassword()));

        User savedUser = userRepository.save(newUser);

        Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(), savedUser.getPassword());

        String token = JwtProvider.generateToken(authentication);
        
        AuthResponse res = new AuthResponse(token, "Register Success");

        return res;
        
    }
@PostMapping("/signin")
public AuthResponse siginin(@RequestBody LoginRequest LoginRequest){

    Authentication authentication = authenticate(LoginRequest.getEmail(),LoginRequest.getPassword());
    
    String token = JwtProvider.generateToken(authentication);
        
        AuthResponse res = new AuthResponse(token, "Login Success");

        return res;
}

private Authentication authenticate(String email, String password) {
    UserDetails userDetails = customUserDetailsService.loadUserByUsername(email);

    if (userDetails==null){
        throw new BadCredentialsException("inavlid username");
    }
    if (!passwordEncoder.matches(password, userDetails.getPassword())){
        throw new BadCredentialsException("password not match");
    }
    return new UsernamePasswordAuthenticationToken(userDetails,null,userDetails.getAuthorities());
}


}
