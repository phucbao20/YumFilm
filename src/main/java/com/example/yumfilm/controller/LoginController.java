package com.example.yumfilm.controller;

import com.example.yumfilm.jwt.JwtTokenProvider;
import com.example.yumfilm.model.User;
import com.example.yumfilm.responses.LoginResponses;
import com.example.yumfilm.security.CustomerUserDetails;
import com.example.yumfilm.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/login")
public class LoginController
{
    @Autowired private JwtTokenProvider tokenProvider;
    @Autowired private UserService userService;

    @GetMapping("/success")
    public ResponseEntity<LoginResponses> getCurrentUser() {
        System.out.println("UserController");

        User account = userService.getAccount();
        CustomerUserDetails userDetail = new CustomerUserDetails(account);
        String token = tokenProvider.generatedToken(userDetail);
        System.out.println("token: " +token);
        System.out.println("userDetail: " +userDetail);
//		System.out.println("account: " +account.toString());

        LoginResponses resp = new LoginResponses(HttpStatus.OK, token, account);
        return ResponseEntity.ok(resp);
    }


}
