package com.example.yumfilm.repository;

import com.example.yumfilm.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmRepository extends JpaRepository<Film, Integer> {
    @Query(value = "Select f from Film f where f.filmId = :id")
    List<Film> findFilmByFilmId(@Param("id") int id);
}
