package com.example.yumfilm.Dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class FilmDetailDto {
    int FilmId;
    String FilmName;
    String FilmImage;
    Date YearProduction;
    String FilmType;
    String Description;
    String filmTime;
    Date premiereDate;
    String directorName;
    String actorName;
    String countryName;
    double rate;
    String countryID;
    int age;
    float price;

}
