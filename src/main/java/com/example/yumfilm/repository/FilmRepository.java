package com.example.yumfilm.repository;

import com.example.yumfilm.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmRepository extends JpaRepository<Film, Integer> {
}
