package com.example.yumfilm.controller;

import com.example.yumfilm.responses.ShowTimeResponses;
import com.example.yumfilm.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/showTime")
@CrossOrigin("*")
public class ShowTimeController {
    @Autowired
    ShowTimeService showTimeService;

    @GetMapping({"{filmID}"})
    public ResponseEntity<Object[]> getShowTime(@PathVariable int filmID) {
//        List<ShowTimeResponses> showTimeResponse = showTimeService.getFilmShowTime(filmID)
//                .stream()
//                .map(showTime -> {
//                    ShowTimeResponses showTimeResponses = new ShowTimeResponses();
//                    showTimeResponses.setShowTimeId(showTime.getShowTimeId());
//                    showTimeResponses.setShowTimeListId(showTime.getShowTimeListId());
//                    showTimeResponses.setShowTimeFrame(showTime.getShowTimeFrame());
//                    showTimeResponses.setFilmId(showTime.getFilmId());
//                    return  showTimeResponses;
//                }).toList();
        return ResponseEntity.ok(showTimeService.getFilmShowTime(filmID));
    }
}
