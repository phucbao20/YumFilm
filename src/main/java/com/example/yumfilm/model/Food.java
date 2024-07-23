package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Table(name = "Food" )

@FieldDefaults(level = AccessLevel.PRIVATE)
public class Food {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name ="FoodId")
    int foodId;

    @Column(name = "FoodName" , columnDefinition = "nvarchar(255)", nullable = false )
    String foodName;

    @Column(name = "Price" , nullable = false)
    double price;

    @Column(name = "Quantity" , nullable = false)
    int quantity;

    @Column(name = "Description" , columnDefinition= "nvarchar(max)" )
    String description;

    @Column(name = "FoodImage" , columnDefinition= "nvarchar(255)" )
    String foodImage;

    @Column(name = "Status", nullable = false)
    boolean status;


    @OneToMany(mappedBy = "food")
    List<OrderFood> listOrderFood;
}
