package com.example.yumfilm.controller;

import com.example.yumfilm.model.SeatLocation;
import com.example.yumfilm.responses.SeatLocationResponses;
import com.example.yumfilm.responses.ShowTimeResponses;
import com.example.yumfilm.service.SeatLocationService;
import com.example.yumfilm.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/booking/seat")
@CrossOrigin("*")
public class OrderSeatController {
    @Autowired
    SeatLocationService seatLocationService;



    @GetMapping
    public ResponseEntity<List<SeatLocationResponses>> getSeatLocations() {
        List<SeatLocationResponses> seatResponses = seatLocationService.findAll().stream().map(seat -> {
            SeatLocationResponses seatLocationResponses = new SeatLocationResponses();
            seatLocationResponses.setSeatLocationId(seat.getSeatLocationId());
            seatLocationResponses.setSeatNumber(seat.getSeatNumber());
            seatLocationResponses.setSeatStatus(seat.getSeatType().isStatus());
            seatLocationResponses.setSeatPrice(seat.getSeatType().getPrice());
            return seatLocationResponses;
        }).toList();
        return ResponseEntity.ok(seatResponses);
    }

}
