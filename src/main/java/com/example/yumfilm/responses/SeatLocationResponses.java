package com.example.yumfilm.responses;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class SeatLocationResponses {
    int seatLocationId;
    String seatNumber;
    boolean seatStatus;
    double seatPrice;

}
