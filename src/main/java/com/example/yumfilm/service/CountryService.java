package com.example.yumfilm.service;

import com.example.yumfilm.model.Country;
import com.example.yumfilm.repository.CountryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CountryService {
    private final CountryRepository countryRepository;

    public List<Country> getAll() {
        return countryRepository.findAll();
    }
}
