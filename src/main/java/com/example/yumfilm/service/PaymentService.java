package com.example.yumfilm.service;

import com.example.yumfilm.model.Payment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentService extends JpaRepository<Payment, Integer> {
}
