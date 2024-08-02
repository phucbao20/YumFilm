package com.example.yumfilm.service;

import com.example.yumfilm.Dto.ShowTimeDto;
import com.example.yumfilm.model.ShowTime;
import com.example.yumfilm.repository.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ShowTimeService {

    @Autowired
    ShowTimeRepository showTimeRepository;

    public Object[] getFilmShowTime(int id){
        return showTimeRepository.findFilmShowTime(id);
    }

    public ShowTime findById(Integer integer) {
        return showTimeRepository.findById(integer).get();
    }
}
