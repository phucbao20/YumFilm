package com.example.yumfilm.service;

import com.example.yumfilm.model.User;
import com.example.yumfilm.repository.UserRepository;
import com.example.yumfilm.security.CustomerUserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserService implements UserDetailsService
{
    @Autowired private UserRepository userRepository;
    public User currentUser;

    public User getAccount()
    {
        return this.currentUser;
    }

    public User createUser(User user){
        System.out.println(user);
        return userRepository.save(user);
    }

    public User getUserByUsername(String username){
        return userRepository.findByUsername(username);
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findByUsername(username);
        currentUser = user;
        if (user == null) {
            throw new UsernameNotFoundException(username);
        }
        return new CustomerUserDetails(user);
    }
}
