package com.pafproject.pafsocialfitx.config;

import java.util.Date;

import javax.crypto.SecretKey;

import org.springframework.security.core.Authentication;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SignatureException;

public class JwtProvider {
    
    private static final SecretKey key = Keys.secretKeyFor(io.jsonwebtoken.SignatureAlgorithm.HS256);

    public static String generateToken(Authentication auth) {
        String jwt = Jwts.builder()
                .setIssuer("Pafprojectfitx")
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime()+864000000)) // Set expiration to 24 hours from now
                .claim("email", auth.getName())
                .signWith(key)
                .compact();

        return jwt;
    }

    public static String getEmailFromJwtToken(String jwt) {
       
            jwt = jwt.substring(7);
        

        Claims claims = Jwts.parserBuilder()
                .setSigningKey(key)
                .build()
                .parseClaimsJws(jwt)
                .getBody();

                String email = String.valueOf(claims.get("email"));
                
        return email;
    }
}
