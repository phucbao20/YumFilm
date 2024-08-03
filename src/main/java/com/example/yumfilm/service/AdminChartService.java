package com.example.yumfilm.service;

import com.example.yumfilm.Dto.TicketOfYearDTO;
import com.example.yumfilm.Dto.TotalAndTicketDTO;
import com.example.yumfilm.Dto.TotalOfYearDTO;
import com.example.yumfilm.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminChartService {
    @Autowired
    private InvoiceRepository invoiceRepository;

    public List<TicketOfYearDTO> getTicketOfYear(){
        List<Object[]> listTicketOfYear = invoiceRepository.getTicketOfYear();
        return  listTicketOfYear.stream().map(ticket -> new TicketOfYearDTO(
                (String) ticket[0],
                (Integer)  ticket[1],
                (Integer)  ticket[2]
        )).collect(Collectors.toList());
    }

    public List<TotalOfYearDTO> getTotalOfYear(){
        List<Object[]> listTotalOfYear = invoiceRepository.getTotalOfYear();
        return  listTotalOfYear.stream().map(ticket -> new TotalOfYearDTO(
                (String) ticket[0],
                (Double)  ticket[1],
                (Double)  ticket[2]
        )).collect(Collectors.toList());
    }

    public List<TotalAndTicketDTO> listTotalAndTicketYear2024(){
        List<Object[]> results = invoiceRepository.listTotalAndTicketYear2024();

        return results.stream()
                .map(row -> new TotalAndTicketDTO(
                        (String) row[0], // MonthName
                        (Double) row[1], // Total
                        (Integer) row[2] // Ticket
                ))
                .collect(Collectors.toList());
    }

}
