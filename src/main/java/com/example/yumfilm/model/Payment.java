package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Payment" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "PaymentId")
    int paymentId;

    @Column(name = "PaymentName" , columnDefinition = "nvarchar(255)", nullable = false)
    String paymentName;

    @Column(name = "Status", nullable = false)
    boolean status;

    @OneToMany(mappedBy = "payment")
    @JsonIgnore
    List<Invoice> listInvoice;
}
