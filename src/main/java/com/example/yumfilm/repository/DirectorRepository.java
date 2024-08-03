package com.example.yumfilm.repository;

import com.example.yumfilm.model.Director;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DirectorRepository extends JpaRepository<Director, Integer> {
   List<Director> findByDirectorName(String name);
}
