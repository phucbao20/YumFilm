package com.example.yumfilm.responses;

import com.example.yumfilm.model.ShowTimeList;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowTimeListRepository extends JpaRepository<ShowTimeList,Integer> {
    ShowTimeList findByshowTimeFrame(String showTimeFrame);
}
