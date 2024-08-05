package com.example.yumfilm.responses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;


public interface FilmResponse {
    int getFilmId();
    String getFilmName();
    String getFilmImage();
    Date getYearProduction();
    String getFilmTypes();
    String getDescription();
    String getFilmTime();
    Date getPremiereDate();
    String getDirectorName();
    String getActors();
    String getCountryName();
    double getRate();
    String getCountryId();
    int getAge();
    double getPrice();

}
