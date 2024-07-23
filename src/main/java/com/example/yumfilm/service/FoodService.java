package com.example.yumfilm.service;

import com.example.yumfilm.model.Food;
import com.example.yumfilm.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FoodService {
    @Autowired
    FoodRepository foodRepository;

    public List<Food> findAll() {
        return foodRepository.findAll();
    }
}
