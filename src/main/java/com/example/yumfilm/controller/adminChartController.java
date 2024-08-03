package com.example.yumfilm.controller;

import com.example.yumfilm.Dto.TicketOfYearDTO;
import com.example.yumfilm.Dto.TotalAndTicketDTO;
import com.example.yumfilm.Dto.TotalOfYearDTO;
import com.example.yumfilm.service.AdminChartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/manager/chart")
@CrossOrigin("http://localhost:5173")
public class adminChartController {

    @Autowired
    AdminChartService adminChartService;

    @GetMapping("/getTicketOfYear")
    public ResponseEntity<List<TicketOfYearDTO>> getTicketOfYear() {
        List<TicketOfYearDTO> listTicketOfYear = adminChartService.getTicketOfYear();
        return ResponseEntity.ok(listTicketOfYear);
    }

    @GetMapping("/getTotalOfYear")
    public ResponseEntity<List<TotalOfYearDTO>> getTotalOfYear() {
        List<TotalOfYearDTO> listTotalOfYear = adminChartService.getTotalOfYear();
        return ResponseEntity.ok(listTotalOfYear);
    }

    @GetMapping ("/getTotalAndTicketYear2024")
    public ResponseEntity<List<TotalAndTicketDTO>> getTotalAndTicketData() {
        List<TotalAndTicketDTO> data = adminChartService.listTotalAndTicketYear2024();
        return ResponseEntity.ok(data);
    }
}
