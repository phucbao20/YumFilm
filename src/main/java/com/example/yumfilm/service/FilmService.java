package com.example.yumfilm.service;

import com.example.yumfilm.model.Film;
import com.example.yumfilm.repository.FilmRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FilmService {
    @Autowired
    FilmRepository filmRepository;

    public List<Film> findById(int integer) {
        return filmRepository.findFilmByFilmId(integer);
    }

    public List<Object[]> findListFilmByMonth(){
        return filmRepository.findFilmsHotInMonth();
    }

    public List<Object[]> getAllListFill(){
        return filmRepository.listAllFilm();
    }
}
