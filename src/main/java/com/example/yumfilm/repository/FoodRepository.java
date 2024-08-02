package com.example.yumfilm.repository;

import com.example.yumfilm.model.Food;
import com.example.yumfilm.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {
}
