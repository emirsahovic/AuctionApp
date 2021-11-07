package com.abh.auctionapp.security;

import com.abh.auctionapp.model.Person;

import io.jsonwebtoken.Jwts;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;
import io.jsonwebtoken.SignatureAlgorithm;


import java.util.Date;

@Component
public class JsonWebToken {
    private static String jwtSecret;
    private static int jwtExpiration;

    @Value("${app.jwtSecret}")
    public void setJwtSecret(String jwtSecret) {
        JsonWebToken.jwtSecret = jwtSecret;
    }

    @Value("${app.jwtExpiration}")
    public static void setJwtExpiration(int jwtExpiration) {
        JsonWebToken.jwtExpiration = jwtExpiration;
    }

    public static String generateJWTToken(Person person) {
        long timestamp = System.currentTimeMillis();
        return Jwts.builder()
                .setIssuedAt(new Date(timestamp))
                .setExpiration(new Date((new Date()).getTime() + jwtExpiration))
                .signWith(SignatureAlgorithm.HS256, jwtSecret)
                .claim("id", person.getId())
                .compact();
    }
}
