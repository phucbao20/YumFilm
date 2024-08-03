package com.example.yumfilm.service;

import com.example.yumfilm.Dto.TopFilmDashboardDTO;
import com.example.yumfilm.Dto.TotalAndTicketDTO;
import com.example.yumfilm.model.InvoiceDetail;
import com.example.yumfilm.repository.FilmDetailRepository;
import com.example.yumfilm.repository.InvoiceDetailRepository;
import com.example.yumfilm.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminDashboardService {

    @Autowired
    FilmDetailRepository filmDetailRepository;

    @Autowired
    InvoiceRepository invoiceRepository;

    @Autowired
    InvoiceDetailRepository invoiceDetailRepository;

    public long getCountFilm(){
        return filmDetailRepository.getCountFilm();
    }

//    public List<Object[]> listUserInvoiceReportPaymentStatusTrue(){
//        return invoiceRepository.listUserInvoiceReportPaymentStatusTrue();
//    }

    public long getAllTicket(){
        return invoiceDetailRepository.getAllTicket();
    }

    public double getRevenueFilm(){
        return invoiceRepository.getRevenueFilm();
    }

    public long getAllInvoice(){
        return invoiceRepository.getAllInvoice();
    }

    public List<TotalAndTicketDTO> listTotalAndTicketYear2023(){
        List<Object[]> results = invoiceRepository.listTotalAndTicketYear2023();

        return results.stream()
                .map(row -> new TotalAndTicketDTO(
                        (String) row[0], // MonthName
                        (Double) row[1], // Total
                        (Integer) row[2] // Ticket
                ))
                .collect(Collectors.toList());
    }

    public List<TopFilmDashboardDTO> getTop5Film(){
        List<Object[]> results = invoiceDetailRepository.getTop5Film();

        return results.stream().map(row -> new TopFilmDashboardDTO(
                (String) row[0],
                (String) row[1],
                (Double) row[2],
                (Long) row[3],
                (Double) row[4]
        )).collect(Collectors.toList());
    }

//    public List<Object[]> getTop5Film(){
//        return invoiceDetailRepository.getTop5Film();
//    }
}   
