package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Voucher")
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Voucher {
    @Id
    @Column(name = "VoucherId")
    long voucherId;

    @Column(name = "VoucherName", columnDefinition  = "nvarchar(255)", nullable = false)
    String voucherName;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "StartDate" , columnDefinition = "datetime", nullable = false)
    Date startDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "EndDate" ,columnDefinition = "datetime" , nullable = false)
    Date endDate;

    @Column(name = "VoucherValue" , nullable = false)
    int voucherValue;

    @Column(name = "Status" , nullable = false)
    boolean status;

    @OneToMany(mappedBy = "voucher")
    @JsonIgnore
    List<Invoice> listInvoice;
}
