package com.example.yumfilm.repository;

import com.example.yumfilm.model.Country;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CountryRepository extends JpaRepository<Country, String> {

    List<Country> findByCountryName(String name);

}
