package com.example.yumfilm.repository;

import com.example.yumfilm.model.Actor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ActorRepository extends JpaRepository<Actor, Integer> {
   List<Actor> findByActorName(String name);
}
