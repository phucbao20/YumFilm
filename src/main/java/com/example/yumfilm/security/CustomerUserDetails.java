package com.example.yumfilm.security;

import com.example.yumfilm.model.User;
import lombok.AllArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;

@AllArgsConstructor
public class CustomerUserDetails implements UserDetails {
    User user;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        if(user.isRole()) return Collections.singletonList(new SimpleGrantedAuthority("ROLE_ADMIN"));
        return Collections.singletonList(new SimpleGrantedAuthority("ROLE_USER"));
    }

    @Override
    public String getPassword() {
        return user.getPassword();
    }

    @Override
    public String getUsername() {
        return user.getUsername();
    }
}
