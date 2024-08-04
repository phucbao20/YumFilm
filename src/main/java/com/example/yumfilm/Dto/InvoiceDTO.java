package com.example.yumfilm.Dto;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class InvoiceDTO
{
    List<SeatLocationDTO> listOrderSeat;
    String showTime;
    List<ListOrderFoodDTO>  orderFood;
    long totalMoney;
}
