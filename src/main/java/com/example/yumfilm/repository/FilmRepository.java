package com.example.yumfilm.repository;

import com.example.yumfilm.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface FilmRepository extends JpaRepository<Film, Long> {

    @Query("SELECT f FROM Film f WHERE f.filmId = :filmId")
    Film findByFilmId(@Param("filmId") int filmId);

    @Query(value = "SELECT f.filmName, c.countryName, f.rate, f.status FROM Film f "
            + " JOIN f.country c "
            + " WHERE f.status = true "
            + " ORDER BY f.rate DESC "
            + " LIMIT 5 ")
    List<Object[]> getFilmTable();
}
