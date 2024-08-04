package com.example.yumfilm.controller;

import com.example.yumfilm.model.Food;
import com.example.yumfilm.service.FoodService;
import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/manager/food")
public class AdminFoodController {

    @Autowired
    ServletContext application;
    @Autowired
    FoodService foodService;
    @Autowired
    FoodService adminFoodService;
//    @GetMapping("/food-detail")
//    public String foodDetail() {
//        return "admin_food_detail";
//    }

    @GetMapping("/food-detail/edit/{id}")
    public ResponseEntity<Food> foodDetail(@PathVariable("id") int id ) {
//        System.out.println("hihi");
        Food newFood = foodService.findById(id);
//        model.addAttribute("newFood", newFood);
        return ResponseEntity.ok(newFood);
    }

    @GetMapping()
    public ResponseEntity<List<Food>> init() {
//        model.addAttribute("listAdminFood", );
        return ResponseEntity.ok(foodService.selectAll());
    }

//    @ModelAttribute("newFood")
//    public Food getFood() {
//        return Food.builder().build();
//    }

    @PutMapping("/food-detail/update")
    public ResponseEntity<Food> update(@RequestBody Food food
//                                       , @RequestParam("fileImage") MultipartFile file
                                       )
            throws IllegalStateException, IOException {
//        File saveImageFood = new File(application.getRealPath("/images/"));
//        if (!saveImageFood.exists()) {
//            saveImageFood.mkdirs();
//        }
//        System.out.println("file name: " +file.getOriginalFilename());
//        String fileName = file.getOriginalFilename();
//        saveImageFood = new File(saveImageFood + "/" + fileName);
//        file.transferTo(saveImageFood);
//        food.setFoodImage(fileName);
//        System.out.println("aloalo");
        foodService.updateFood(food);
        return ResponseEntity.ok(food) ;
    }

    @PostMapping("/food-detail/add")
    public ResponseEntity<Food> createFood(@RequestBody Food food
//            , @RequestParam("fileImage") MultipartFile file
    ) throws IllegalStateException, IOException {
//        File saveImageFood = new File(application.getRealPath("/images/"));
//        if (!saveImageFood.exists()) {
//            saveImageFood.mkdirs();
//        }
//        System.out.println("file name: " +file.getOriginalFilename());
//        String fileName = file.getOriginalFilename();
//        saveImageFood = new File(saveImageFood + "/" + fileName);
//        file.transferTo(saveImageFood);
//        food.setFoodImage(fileName);
        try {

            foodService.save(food);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new ResponseEntity<>(food, HttpStatus.OK);
    }

    @DeleteMapping("food-detail/delete/{foodId}")
    public ResponseEntity<String> delete(@PathVariable("foodId") int id)
    {
        // lấy dữ liệu tu form xuong dung @RequestBody
        // lay du lieu tu url dung @Pathvariable
        foodService.deleteById(id);
        return ResponseEntity.ok("Deleted rồi nhé hihi");
    }
}
