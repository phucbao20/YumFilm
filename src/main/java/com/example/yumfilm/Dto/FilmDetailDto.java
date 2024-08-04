package com.example.yumfilm.Dto;

import jakarta.persistence.Id;
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
    int filmId;
    String FilmName;
    String FilmImage;
    Date YearProduction;
    String FilmType;
    String Description;
    String filmTime;
    Date premiereDate;
    String directorName;
    String actorName;
    double rate;
    String countryId;
    int age;
    double price;
    String videoTrailer;

}
