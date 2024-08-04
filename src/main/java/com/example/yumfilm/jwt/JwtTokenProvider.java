package com.example.yumfilm.jwt;

import com.example.yumfilm.security.CustomerUserDetails;
import com.example.yumfilm.service.UserService;
import io.jsonwebtoken.*;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Slf4j
@Component
@AllArgsConstructor
public class JwtTokenProvider extends OncePerRequestFilter
{
    private final UserService userService;
    private final byte[] SECRECTKEY = "The innovative FaceClone technology allows users to create highly realistic virtual avatars that can be used across various online platforms. While the technology raises some privacy concerns, the developers claim to have implemented security measures to address these issues".getBytes(StandardCharsets.UTF_8);
    private final long JWT_EXPIRATIONTIME = 604800000L;

    public String generatedToken(CustomerUserDetails userDetails)
    {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + JWT_EXPIRATIONTIME);

        return Jwts.builder()
                .setSubject(userDetails.getUsername())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(SignatureAlgorithm.HS512, SECRECTKEY)
                .compact();
    }

    public String getUsernameByJWT(String token)
    {
        Claims claims = Jwts.parser()
                .setSigningKey(SECRECTKEY)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    public boolean validationToken(String token)
    {
        try {
            Jwts.parser().setSigningKey(SECRECTKEY).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException ex) {
            log.error("Invalid JWT token");
            return false;
        } catch (ExpiredJwtException ex) {
            log.error("Expired JWT token");
            return false;
        } catch (UnsupportedJwtException ex) {
            log.error("Unsupported JWT token");
            return false;
        } catch (IllegalArgumentException ex) {
            log.error("JWT claims string is empty.");
            return false;
        }
    }

    public String getTokenFormRequest(HttpServletRequest request)
    {
        String bearerToken = request.getHeader("Authorization");
        System.out.println("url: " +request.getRequestURI());
        System.out.println("bearerToken: " +bearerToken);
        if(StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer "))
        {
            System.out.println("if");
            return bearerToken.substring(7);
        }
        System.out.println("bearerToken null ");
        return null;
    }

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        System.out.println("doFilterInternal");
        String token = getTokenFormRequest(request);
        System.out.println("token: " +token);

        if(token != null && validationToken(token)) {
            String username = getUsernameByJWT(token);
            UserDetails userDetails = userService.loadUserByUsername(username);
            if(userDetails != null){
                System.out.println("Dang nhap roi");
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                        userDetails, null, userDetails.getAuthorities()
                );
                SecurityContextHolder.getContext().setAuthentication(authentication);
            }
            else {
                log.error("Failed to load user details for username: {}", username);
            }
        }
        filterChain.doFilter(request, response);
    }
}
