package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FlimResponse {
    int filmId;
    String filmName;
    String filmImage;

}
