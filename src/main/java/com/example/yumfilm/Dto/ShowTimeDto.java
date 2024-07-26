package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ShowTimeDto {
    int showTimeId;
    int showTimeListId;
    String showTimeFrame;
    int filmId;
}
