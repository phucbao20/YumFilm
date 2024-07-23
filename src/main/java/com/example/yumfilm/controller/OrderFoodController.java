package com.example.yumfilm.controller;

import com.example.yumfilm.model.Food;
import com.example.yumfilm.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/food")
@CrossOrigin("*")
public class OrderFoodController {
    @Autowired
    FoodService foodService;

    @GetMapping
    public ResponseEntity<List<Food>> getFood() {
        return ResponseEntity.ok(foodService.findAll());
    }
}
