package com.example.yumfilm.controller;

import com.example.yumfilm.Dto.*;
import com.example.yumfilm.service.AdminTableService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/api/v1/manager/adminTable")
@CrossOrigin("http://localhost:5173")
public class adminTableController {
    @Autowired
    AdminTableService adminTableService;

    @GetMapping("/getFoodTable")
    public ResponseEntity<List<FoodTableDTO>> getFoodTable() {
        List<FoodTableDTO> foodTable = adminTableService.getFoodTable();
        return ResponseEntity.ok(foodTable);
    }

    @GetMapping("/getFilmTable")
    public ResponseEntity<List<FilmTableDTO>> getFilmTable() {
        List<FilmTableDTO> filmTable = adminTableService.getFilmTable();
        return ResponseEntity.ok(filmTable);
    }

    @GetMapping("/getUserRankingTable")
    public ResponseEntity<List<UserRankingDTO>> getUserRanking() {
        List<UserRankingDTO> userRanking = adminTableService.getUserRanking();
        return ResponseEntity.ok(userRanking);
    }



    @GetMapping("/getInvoicePaymentStatusTrue")
    public ResponseEntity<List<InvoicePaymentStatusDTO>> getInvoicePaymentStatusTrue() {
        List<InvoicePaymentStatusDTO> listInvoicePaymentTrue = adminTableService.getInvoicePaymentStatusTrue();
        return ResponseEntity.ok(listInvoicePaymentTrue);
    }

    @GetMapping("/getInvoicePaymentStatusFalse")
    public ResponseEntity<List<InvoicePaymentStatusDTO>> getInvoicePaymentStatusFalse() {
        List<InvoicePaymentStatusDTO> listInvoicePaymentFalse = adminTableService.getInvoicePaymentStatusFalse();
        return ResponseEntity.ok(listInvoicePaymentFalse);
    }
}
