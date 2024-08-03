package com.example.yumfilm.service;

import com.example.yumfilm.Dto.*;
import com.example.yumfilm.repository.FilmRepository;
import com.example.yumfilm.repository.FoodRepository;
import com.example.yumfilm.repository.InvoiceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class AdminTableService {
    @Autowired
    FoodRepository foodRepository;

    @Autowired
    FilmRepository filmRepository;

    @Autowired
    private InvoiceRepository invoiceRepository;

    public List<FoodTableDTO> getFoodTable(){
        List<Object[]> listFood = foodRepository.getFoodTable();

        return listFood.stream().map(food -> new FoodTableDTO(
                (String) food[0],
                (String) food[1],
                (Double) food[2],
                (Double) food[3]
        )).collect(Collectors.toList());
    }

    public List<FilmTableDTO> getFilmTable(){
        List<Object[]> listFilm = filmRepository.getFilmTable();
        return listFilm.stream().map(film -> new FilmTableDTO(
                (String) film[0],
                (String) film[1],
                (Double) film[2],
                (Boolean) film[3]
        )).collect(Collectors.toList());
    }

    public List<UserRankingDTO> getUserRanking(){
        List<Object[]> listUserRanking = invoiceRepository.getUserRankingTable();
        return listUserRanking.stream().map(user -> new UserRankingDTO(
                (String) user[0],
                (String) user[1],
                (String) user[2],
                (String) user[3],
                (Long) user[4],
                (Double) user[5]
        )).collect(Collectors.toList());
    }

    public List<InvoicePaymentStatusDTO> getInvoicePaymentStatusTrue(){
        List<Object[]> listInvoicePaymentStatusTrue = invoiceRepository.getInvoicePaymentStatusTableTrue();
        return listInvoicePaymentStatusTrue.stream().map(invoice -> new InvoicePaymentStatusDTO(
                (Long) invoice[0],
                (String) invoice[1],
                (String) invoice[2],
                (Date) invoice[3],
                (Double) invoice[4],
                (Boolean) invoice[5]
        )).collect(Collectors.toList());
    }

    public List<InvoicePaymentStatusDTO> getInvoicePaymentStatusFalse(){
        List<Object[]> listInvoicePaymentStatusFalse = invoiceRepository.getInvoicePaymentStatusTableFalse();
        return listInvoicePaymentStatusFalse.stream().map(invoice -> new InvoicePaymentStatusDTO(
                (Long) invoice[0],
                (String) invoice[1],
                (String) invoice[2],
                (Date) invoice[3],
                (Double) invoice[4],
                (Boolean) invoice[5]
        )).collect(Collectors.toList());
    }


}
