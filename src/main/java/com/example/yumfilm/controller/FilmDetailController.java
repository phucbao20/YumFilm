package com.example.yumfilm.controller;

import com.example.yumfilm.Dto.FilmDetailDto;
import com.example.yumfilm.service.FilmDetailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/vi/filmDetail")
@CrossOrigin("http://localhost:5173")
public class FilmDetailController {
    @Autowired
    FilmDetailService filmDetailService;

    @GetMapping("{filmID}")
    public ResponseEntity<Object[]> getFilmDetails(@PathVariable int filmID) {
        return ResponseEntity.ok(filmDetailService.findFilmDetailById(filmID));
    }

}
