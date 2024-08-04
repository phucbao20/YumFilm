package com.example.yumfilm.repository;

import com.example.yumfilm.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer>
{
    User findByUsername(String username);
}
