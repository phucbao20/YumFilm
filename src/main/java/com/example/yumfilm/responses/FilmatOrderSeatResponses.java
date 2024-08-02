package com.example.yumfilm.responses;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FilmatOrderSeatResponses {
    int filmId;
    String filmName;
    String filmImage;
    double price;
}
