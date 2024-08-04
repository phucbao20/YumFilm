package com.example.yumfilm.repository;

import com.example.yumfilm.model.Food;
import com.example.yumfilm.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FoodRepository extends JpaRepository<Food, Integer> {

    Food findByfoodName(String foodName);

    @Query(value= "SELECT f.foodName, f.description, f.price, sum(odf.price) as total "
            + " FROM OrderFood odf "
            + " JOIN odf.food f "
            + " JOIN odf.invoice i"
            + " WHERE i.status = true "
            + " GROUP BY f.foodName, f.description, f.price "
            + " ORDER BY sum(odf.price) DESC "
            + " LIMIT 5")
    List<Object[]> getFoodTable();



}
