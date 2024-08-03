package com.example.yumfilm.repository;

import com.example.yumfilm.model.Film;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmRepository extends JpaRepository<Film, Integer> {
   @Query("SELECT f FROM Film f WHERE f.filmId = :filmId")
    Film findByFilmId(@Param("filmId") int filmId);

    @Query(value = "SELECT f.filmName, c.countryName, f.rate, f.status FROM Film f "
            + " JOIN f.country c "
            + " WHERE f.status = true "
            + " ORDER BY f.rate DESC "
            + " LIMIT 5 ")
    List<Object[]> getFilmTable();
  
    @Query(value = "Select f from Film f where f.filmId = :id")
    List<Film> findFilmByFilmId(@Param("id") int id);

    @Query(value = "SELECT TOP(:quantity) f.FilmName, f.FilmImage, STRING_AGG(ft.FilmTypeName, ', ') WITHIN GROUP (ORDER BY ft.FilmTypeName) AS FILMTYPES, f.Rate "
            + "FROM Film f \r\n"
            + "	JOIN \r\n" + "		FilmGenres fg ON f.FilmId = fg.FilmId\r\n" + "	JOIN \r\n"
            + "		FilmType ft ON fg.FilmTypeId = ft.FilmTypeId\r\n"
            + "	WHERE MONTH(f.PremiereDate) = MONTH(GETDATE()) and YEAR(f.PremiereDate) = YEAR(GETDATE()) \r\n"
            + "	GROUP BY f.FilmName, f.Rate, f.FilmImage\r\n" + "	ORDER BY NEWID()", nativeQuery = true)
    List<Object[]> findFilmsHotInMonth(@Param("quantity") int quantity);

    default List<Object[]> findFilmsHotInMonth() {
        return findFilmsHotInMonth(4);
    }

    @Query(value = "SELECT f.FilmId ,f.FilmName, f.FilmImage, STRING_AGG(ft.FilmTypeName, ', ') WITHIN GROUP (ORDER BY ft.FilmTypeName) AS FILMTYPES, f.Rate , fd.Description, f.Age \n" +
            "\t\t\tFROM Film f\n" +
            "\t\t\tJOIN \t\tFilmGenres fg ON f.FilmId = fg.FilmId\t\n" +
            "\t\t\tJOIN\t\tFilmType ft ON fg.FilmTypeId = ft.FilmTypeId\n" +
            "\t\t\tJOIN FilmDetail fd ON fd.FilmId = f.FilmId\n" +
            "\t\t\t\tGROUP BY f.FilmName, f.Rate, f.FilmImage , fd.Description,f.FilmId, f.Age \n" +
            "\t\t\t\tORDER BY NEWID()\n", nativeQuery = true)
    List<Object[]> listAllFilm();

}
