package com.example.yumfilm.controller;

import com.example.yumfilm.model.Country;
import com.example.yumfilm.service.CountryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/manager/countries")
@RequiredArgsConstructor
@CrossOrigin("http://localhost:5173")
public class CountryController {

    private final CountryService countryService;

    @GetMapping
    public ResponseEntity<List<Country>> getAllCountry() {
        return ResponseEntity.ok(countryService.getAll());
    }

}
