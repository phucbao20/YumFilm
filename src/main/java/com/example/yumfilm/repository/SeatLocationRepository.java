package com.example.yumfilm.repository;

import com.example.yumfilm.model.SeatLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeatLocationRepository extends JpaRepository<SeatLocation, Integer> {
    SeatLocation findByseatNumber(String seatNumber);
}
