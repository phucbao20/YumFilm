package com.example.yumfilm.service;

import com.example.yumfilm.model.SeatLocation;
import com.example.yumfilm.repository.SeatLocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatLocationService {

    @Autowired
    SeatLocationRepository seatLocationRepository;

    public List<SeatLocation> findAll() {
        return seatLocationRepository.findAll();
    }
}
