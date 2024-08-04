package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class FilmTableDTO {

    String filmName;
    String country;
    Double rate;
    Boolean status;
}
