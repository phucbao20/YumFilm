package com.example.yumfilm.service;

import com.example.yumfilm.model.Film;
import com.example.yumfilm.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FilmService {

    @Autowired
    FilmRepository filmRepository;

    public Film getFilmById(int filmId) {
        return filmRepository.findByFilmId(filmId);
    }
}
