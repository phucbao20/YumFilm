package com.example.yumfilm.repository;

import com.example.yumfilm.Dto.ShowTimeDto;
import com.example.yumfilm.model.ShowTime;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShowTimeRepository extends JpaRepository<ShowTime, Integer> {
    @Query(value = "select st.ShowTimeId,stl.ShowTimeListId, stl.ShowTimeFrame, st.FilmId from ShowTime st join ShowTimeList stl on st.ShowTimeListId = stl.ShowTimeListId where filmid = (:idFilm) and ShowTimeDate = '2024-05-20'" , nativeQuery = true)
    Object[] findFilmShowTime(@Param("idFilm") int idFilm);
}
