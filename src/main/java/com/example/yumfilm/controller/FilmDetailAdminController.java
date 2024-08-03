package com.example.yumfilm.controller;

import com.example.yumfilm.Dto.FilmDetailDto;
import com.example.yumfilm.model.Film;
import com.example.yumfilm.model.FilmDetail;
import com.example.yumfilm.responses.FilmResponse;
import com.example.yumfilm.service.FilmDetailService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/vi/manager/film")
@RequiredArgsConstructor
public class FilmDetailAdminController {

    private final FilmDetailService filmDetailService;

    @GetMapping
    public ResponseEntity<List<FilmResponse>> getAllFilmDetails(){
        return ResponseEntity.ok(filmDetailService.getAllFilmDetailAdmin());
    }

    @GetMapping("/{filmId}")
    public ResponseEntity<FilmResponse> getByIdAdmin(@PathVariable int filmId){
        return ResponseEntity.ok(filmDetailService.findFilmDetailById(filmId));
    }

    @PostMapping
    public ResponseEntity<Film> createFilm(@RequestBody FilmDetailDto filmDetailDto){
        System.out.println(filmDetailDto);
        return ResponseEntity.ok(filmDetailService.createFilmDetail(filmDetailDto));
    }

    @PutMapping
    public ResponseEntity<FilmDetail> updateFilm(@RequestBody FilmDetailDto filmDetailDto){
        return  ResponseEntity.ok(filmDetailService.updateFilm(filmDetailDto));
    }

    @DeleteMapping("/{filmId}")
    public void deleteFilm(@PathVariable int filmId){
        filmDetailService.deleteFilm(filmId);
    }

}
