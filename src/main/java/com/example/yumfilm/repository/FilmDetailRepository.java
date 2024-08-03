package com.example.yumfilm.repository;

import com.example.yumfilm.Dto.FilmDetailDto;
import com.example.yumfilm.model.Film;
import com.example.yumfilm.model.FilmDetail;
import com.example.yumfilm.responses.FilmResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FilmDetailRepository extends JpaRepository<FilmDetail, Integer> {
    @Query(value = "WITH FilmGenresAggregated AS (\n" +
            "\t\t        SELECT \n" +
            "\t\t            FILM.FilmId,\n" +
            "\t\t            STRING_AGG(FT.FilmTypeName, ', ') WITHIN GROUP (ORDER BY FT.FilmTypeName) AS FILMTYPES\n" +
            "\t\t        FROM \n" +
            "\t\t            FILM \n" +
            "\t\t            LEFT JOIN FilmGenres AS FG ON FILM.FilmId = FG.FilmId\n" +
            "\t\t            LEFT JOIN FilmType AS FT ON FG.FilmTypeId = FT.FilmTypeId\n" +
            "\t\t        GROUP BY \n" +
            "\t\t            FILM.FilmId\n" +
            "\t\t    ),\n" +
            "\t\t    FilmActorsAggregated AS (\n" +
            "\t\t        SELECT \n" +
            "\t\t            FILM.FilmId,\n" +
            "\t\t            STRING_AGG(ACTOR.ActorName, ', ') WITHIN GROUP (ORDER BY ACTOR.ActorName) AS ACTORS\n" +
            "\t\t        FROM \n" +
            "\t\t            FILM \n" +
            "\t\t            LEFT JOIN FilmDetail ON FILM.FilmId = FilmDetail.FilmId\n" +
            "\t\t            LEFT JOIN ActorOfFilm AS AOF ON FilmDetail.FilmDetailId = AOF.FilmDetailId\n" +
            "\t\t            LEFT JOIN Actor AS ACTOR ON AOF.ActorId = ACTOR.ActorId\n" +
            "\t\t        GROUP BY \n" +
            "\t\t            FILM.FilmId\n" +
            "\t\t    )\n" +
            "\t\t    SELECT \n" +
            "\t\t        FILM.FilmId,\n" +
            "\t\t        FILM.FilmName,\n" +
            "\t\t        FILM.FilmImage,\n" +
            "\t\t\t\tFilmDetail.ProductionDate AS YearProduction,\n" +
            "\t\t        FGA.FILMTYPES,\n" +
            "\t\t        FilmDetail.Description,\n" +
            "\t\t        Film.FilmTime,\n" +
            "\t\t        Film.PremiereDate,\n" +
            "\t\t        Director.DirectorName,\n" +
            "\t\t        FAA.ACTORS,\n" +
            "\t\t\t\tCountry.CountryName,\n" +
            "\t\t\t\tFilm.Rate,\n" +
            "\t\t\t\tCountry.CountryId,\n" +
            "\t\t\t\tFilm.Age,\n" +
            "\t\t\t\tFilm.Price\n" +
            "\t\t\t\t\n" +
            "\t\t    FROM \n" +
            "\t\t        FILM\n" +
            "\t\t        LEFT JOIN FilmDetail ON FILM.FilmId = FilmDetail.FilmId\n" +
            "\t\t        LEFT JOIN ProducerOfFilm ON ProducerOfFilm.FilmDetailId = FilmDetail.FilmDetailId\n" +
            "\t\t        LEFT JOIN Producer ON Producer.ProducerId = ProducerOfFilm.ProducerId\n" +
            "\t\t        LEFT JOIN FilmGenresAggregated AS FGA ON FILM.FilmId = FGA.FilmId\n" +
            "\t\t        LEFT JOIN FilmActorsAggregated AS FAA ON FILM.FilmId = FAA.FilmId\n" +
            "\t\t        LEFT JOIN DirectorOfFilm ON DirectorOfFilm.FilmDetailId = FilmDetail.FilmDetailId\n" +
            "\t\t        LEFT JOIN Director ON Director.DirectorId = DirectorOfFilm.DirectorId\n" +
            "\t\t\t\tLEFT JOIN Country ON Country.CountryId = Film.CountryId\n" +
            "\n" +
            "\t\t    WHERE FILM.FilmId = (:filmId)\n" +
            "\t\t    GROUP BY \n" +
            "\t\t        FILM.FilmId,\n" +
            "\t\t        FILM.FilmName,\n" +
            "\t\t        FILM.FilmImage,\n" +
            "\t\t        Film.PremiereDate,\n" +
            "\t\t        FGA.FILMTYPES,\n" +
            "\t\t        FilmDetail.Description,\n" +
            "\t\t        Film.FilmTime,\n" +
            "\t\t        Director.DirectorName,\n" +
            "\t\t        FAA.ACTORS,\n" +
            "\t\t        FilmDetail.ProductionDate,\n" +
            "\t\t\t\tCountry.CountryName, \n" +
            "\t\t\t\tFilm.Rate,\n" +
            "\t\t\t\tCountry.CountryId,\n" +
            "\t\t\t\tFilm.Age,\n" +
            "\t\t\t\tFilm.Price", nativeQuery = true)
    FilmResponse findFilmDetailById(@Param("filmId") int filmId);

    @Query(value = "WITH FilmGenresAggregated AS (\n" +
            "\t\t        SELECT \n" +
            "\t\t            FILM.FilmId,\n" +
            "\t\t            STRING_AGG(FT.FilmTypeName, ', ') WITHIN GROUP (ORDER BY FT.FilmTypeName) AS FILMTYPES\n" +
            "\t\t        FROM \n" +
            "\t\t            FILM \n" +
            "\t\t            LEFT JOIN FilmGenres AS FG ON FILM.FilmId = FG.FilmId\n" +
            "\t\t            LEFT JOIN FilmType AS FT ON FG.FilmTypeId = FT.FilmTypeId\n" +
            "\t\t        GROUP BY \n" +
            "\t\t            FILM.FilmId\n" +
            "\t\t    ),\n" +
            "\t\t    FilmActorsAggregated AS (\n" +
            "\t\t        SELECT \n" +
            "\t\t            FILM.FilmId,\n" +
            "\t\t            STRING_AGG(ACTOR.ActorName, ', ') WITHIN GROUP (ORDER BY ACTOR.ActorName) AS ACTORS\n" +
            "\t\t        FROM \n" +
            "\t\t            FILM \n" +
            "\t\t            LEFT JOIN FilmDetail ON FILM.FilmId = FilmDetail.FilmId\n" +
            "\t\t            LEFT JOIN ActorOfFilm AS AOF ON FilmDetail.FilmDetailId = AOF.FilmDetailId\n" +
            "\t\t            LEFT JOIN Actor AS ACTOR ON AOF.ActorId = ACTOR.ActorId\n" +
            "\t\t        GROUP BY \n" +
            "\t\t            FILM.FilmId\n" +
            "\t\t    )\n" +
            "\t\t    SELECT \n" +
            "\t\t        FILM.FilmId,\n" +
            "\t\t        FILM.FilmName,\n" +
            "\t\t        FILM.FilmImage,\n" +
            "\t\t\t\tFilmDetail.ProductionDate AS YearProduction,\n" +
            "\t\t        FGA.FILMTYPES,\n" +
            "\t\t        FilmDetail.Description,\n" +
            "\t\t        Film.FilmTime,\n" +
            "\t\t        Film.PremiereDate,\n" +
            "\t\t        Director.DirectorName,\n" +
            "\t\t        FAA.ACTORS,\n" +
            "\t\t\t\tCountry.CountryName,\n" +
            "\t\t\t\tFilm.Rate,\n" +
            "\t\t\t\tCountry.CountryId,\n" +
            "\t\t\t\tFilm.Age,\n" +
            "\t\t\t\tFilm.Price\n" +
            "\t\t\t\t\n" +
            "\t\t    FROM \n" +
            "\t\t        FILM\n" +
            "\t\t        LEFT JOIN FilmDetail ON FILM.FilmId = FilmDetail.FilmId\n" +
            "\t\t        LEFT JOIN ProducerOfFilm ON ProducerOfFilm.FilmDetailId = FilmDetail.FilmDetailId\n" +
            "\t\t        LEFT JOIN Producer ON Producer.ProducerId = ProducerOfFilm.ProducerId\n" +
            "\t\t        LEFT JOIN FilmGenresAggregated AS FGA ON FILM.FilmId = FGA.FilmId\n" +
            "\t\t        LEFT JOIN FilmActorsAggregated AS FAA ON FILM.FilmId = FAA.FilmId\n" +
            "\t\t        LEFT JOIN DirectorOfFilm ON DirectorOfFilm.FilmDetailId = FilmDetail.FilmDetailId\n" +
            "\t\t        LEFT JOIN Director ON Director.DirectorId = DirectorOfFilm.DirectorId\n" +
            "\t\t\t\tLEFT JOIN Country ON Country.CountryId = Film.CountryId\n" +
            "\n" +
            "\t\t    GROUP BY \n" +
            "\t\t        FILM.FilmId,\n" +
            "\t\t        FILM.FilmName,\n" +
            "\t\t        FILM.FilmImage,\n" +
            "\t\t        Film.PremiereDate,\n" +
            "\t\t        FGA.FILMTYPES,\n" +
            "\t\t        FilmDetail.Description,\n" +
            "\t\t        Film.FilmTime,\n" +
            "\t\t        Director.DirectorName,\n" +
            "\t\t        FAA.ACTORS,\n" +
            "\t\t        FilmDetail.ProductionDate,\n" +
            "\t\t\t\tCountry.CountryName, \n" +
            "\t\t\t\tFilm.Rate,\n" +
            "\t\t\t\tCountry.CountryId,\n" +
            "\t\t\t\tFilm.Age,\n" +
            "\t\t\t\tFilm.Price", nativeQuery = true)
    List<FilmResponse> getAllFilmDetailAdmin();
}
