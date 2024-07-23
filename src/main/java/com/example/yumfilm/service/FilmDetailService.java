package com.example.yumfilm.service;

import com.example.yumfilm.Dto.FilmDetailDto;
import com.example.yumfilm.repository.FilmDetailRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FilmDetailService {
    @Autowired
    FilmDetailRepository filmDetailRepository;

    public Object[] findFilmDetailById(int id) {
        return filmDetailRepository.findFilmDetailById(id);
    }
}
