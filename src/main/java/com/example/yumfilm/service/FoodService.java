package com.example.yumfilm.service;

import java.util.List;
import java.util.Optional;

import com.example.yumfilm.model.Food;
import com.example.yumfilm.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FoodService{

    @Autowired
    FoodRepository foodRepository;



    public List<Food> selectAll()
    {
        return foodRepository.findAll();
    }


    public void deleteById(int id) {
        foodRepository.deleteById(id);
    }

    public <S extends Food> S save(S entity) {
        return foodRepository.save(entity);
    }


    public Food updateFood(Food food) {
        Food opt_food = findById(food.getFoodId());
        opt_food.setFoodImage(food.getFoodImage());
        opt_food.setFoodName(food.getFoodName());
        opt_food.setListOrderFood(food.getListOrderFood());
        opt_food.setPrice(food.getPrice());
        opt_food.setStatus(food.isStatus());
        opt_food.setDescription(food.getDescription());
        opt_food.setQuantity(food.getQuantity());
        return foodRepository.save(opt_food);
    }

    public Food findById(Integer id) {
        return foodRepository.findById(id).get();
    }
}
