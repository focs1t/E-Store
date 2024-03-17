package ru.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;
import io.jsonwebtoken.*;
import sun.net.www.protocol.http.AuthenticationInfo;

import java.util.Date;

@Component
public class JwtCore {
    @Value("${e_store.secret}")
    private String secret;
    @Value("${e_store.lifetime}")
    private int lifetime;
    public String generateToken (Authentication authentication){
        UserDetailsImpl userDetails = (UserDetailsImpl)authentication.getPrincipal();
        return Jwts.builder().setSubject((userDetails.getUsername())).setIssuedAt(new Date())
                .setExpiration(new Date((new Date().getTime() + lifetime)))
                .signWith(SignatureAlgorithm.HS256, secret)
                .compact();
    }
}
