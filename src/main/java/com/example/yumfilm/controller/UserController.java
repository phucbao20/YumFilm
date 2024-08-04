package com.example.yumfilm.controller;

import com.example.yumfilm.model.User;
import com.example.yumfilm.security.CustomerUserDetails;
import com.example.yumfilm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/api/v1/account")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping()
    public ResponseEntity<Boolean> getUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        CustomerUserDetails obj = (CustomerUserDetails) authentication.getPrincipal();
        User user = userService.getUserByUsername(obj.getUsername());
        return ResponseEntity.ok(user.isRole());
    }
}
