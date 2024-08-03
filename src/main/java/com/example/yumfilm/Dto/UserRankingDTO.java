package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRankingDTO {
    private String lastName;
    private String firstName;
    private String email;
    private String phone;
    private Long totalInvoice;
    private Double totalAmount;
}
