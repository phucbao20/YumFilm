package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "OrderFood" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class OrderFood {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "OrderFoodId")
    long orderFoodId;
    @Column(name = "Price" , nullable = false)
    double price;
    @Column(name = "Quantity" , nullable = false)
    int quantity;

    @ManyToOne
    @JoinColumn(name = "FoodId")
    @JsonIgnore
    Food food;

    @ManyToOne
    @JoinColumn(name = "InvoiceId")
    @JsonIgnore
    Invoice invoice;
}
