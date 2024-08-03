package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FoodTableDTO {
    private String foodName;
    private String description;
    private double price;
    private double total;
}
