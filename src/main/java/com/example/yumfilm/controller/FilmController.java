package com.example.yumfilm.controller;

import com.example.yumfilm.responses.FilmatOrderSeatResponses;
import com.example.yumfilm.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/film")
@CrossOrigin("*")
public class FilmController {
    @Autowired
    FilmService filmService;

    @GetMapping("{filmID}")
    public ResponseEntity<List<FilmatOrderSeatResponses>> findFilmById(@PathVariable int filmID){
       List<FilmatOrderSeatResponses> filmResponses = filmService.findById(filmID).stream().map(film ->{
           FilmatOrderSeatResponses filmAtOrder = new FilmatOrderSeatResponses();
           filmAtOrder.setFilmId(film.getFilmId());
           filmAtOrder.setFilmName(film.getFilmName());
           filmAtOrder.setFilmImage(film.getFilmImage());
           filmAtOrder.setPrice(film.getPrice());
           return filmAtOrder;
       }).toList(); 
       return ResponseEntity.ok(filmResponses);
    };

    @GetMapping("filmHot")
    public ResponseEntity<List<Object[]>> findFilmHot(){
        return ResponseEntity.ok(filmService.findListFilmByMonth());
    }

    @GetMapping("allFilm")
    public ResponseEntity<List<Object[]>> findAllFilm(){
        return ResponseEntity.ok(filmService.getAllListFill());
    }
}
