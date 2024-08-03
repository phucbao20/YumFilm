package com.example.yumfilm.Dto;

import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import jdk.jfr.Timestamp;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class InvoicePaymentStatusDTO {

    long id;
    String lastName;
    String firstName;
    @Temporal(TemporalType.TIMESTAMP)
    Date createDate;
    double total;
    boolean status;

}
