package com.example.yumfilm.controller;

import com.example.yumfilm.Dto.FlimResponse;
import com.example.yumfilm.Dto.TopFilmDashboardDTO;
import com.example.yumfilm.Dto.TotalAndTicketDTO;
import com.example.yumfilm.model.Film;
import com.example.yumfilm.service.AdminDashboardService;
import com.example.yumfilm.service.FilmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/manager/adminDashboard")
@CrossOrigin("http://localhost:5173")
public class adminDashBoardController {

    @Autowired
    AdminDashboardService adminDashboardSerivce;

    @Autowired
    FilmService filmService;

    @GetMapping("/getCountFilm")
    public long getCountFilm() {
        return adminDashboardSerivce.getCountFilm();
    }
    @GetMapping("/getRevenueFilm")
    public double getRevenueFilm() {
        return adminDashboardSerivce.getRevenueFilm();
    }

    @GetMapping ("/getAllInvoice")
    public long getAllInvoice(){
        return  adminDashboardSerivce.getAllInvoice();
    }

    @GetMapping ("/getAllTicket")
    public long getAllTicket(){
        return  adminDashboardSerivce.getAllTicket();
    }

    @GetMapping ("/getTotalAndTicketYear2023")
    public ResponseEntity<List<TotalAndTicketDTO>> getTotalAndTicketData() {
        List<TotalAndTicketDTO> data = adminDashboardSerivce.listTotalAndTicketYear2023();
        return ResponseEntity.ok(data);
    }

    @GetMapping("/getTopFilm")
    public ResponseEntity<List<TopFilmDashboardDTO>> getTopFilm(){
        List<TopFilmDashboardDTO> data = adminDashboardSerivce.getTop5Film();
        return ResponseEntity.ok(data);
    }
    @GetMapping("/{filmId}")
    ResponseEntity<FlimResponse> getFilmById(@PathVariable("filmId") int filmId) {
        int film_Id = filmId;
        Film film = filmService.getFilmById(film_Id);
        FlimResponse flimResponse = new FlimResponse();
        flimResponse.setFilmId(film.getFilmId());
        flimResponse.setFilmName(film.getFilmName());
        flimResponse.setFilmImage(film.getFilmImage());
        return ResponseEntity.ok(flimResponse);
    }

//    public Film getFilmById(){
//        return filmService.getFilmById(1);
//    }

}
