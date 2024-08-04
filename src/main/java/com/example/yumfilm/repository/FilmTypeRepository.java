package com.example.yumfilm.repository;

import com.example.yumfilm.model.FilmType;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FilmTypeRepository extends JpaRepository<FilmType, Integer> {

    List<FilmType> findByFilmTypeName(String name);
}
