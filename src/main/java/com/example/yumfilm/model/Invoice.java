package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Invoice" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Invoice {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "InvoiceId")
    long invoiceId;

    @Temporal(value = TemporalType.TIMESTAMP)
    @Column(name = "CreateDate", columnDefinition = "datetime", nullable = false)
    @Builder.Default
    Date creatDate = new Date();

    @Column(name = "PaymentStatus", nullable = false)
    @Builder.Default
    boolean paymentStatus = false;

    @Column(name = "Note" ,columnDefinition = "nvarchar(255)")
    String note;

    @Column(name = "Total", nullable = false)
    double total;

    @Column(name = "Status", nullable = false)
    @Builder.Default
    boolean status = true;

    @ManyToOne
    @JoinColumn(name = "VoucherId")
    Voucher voucher;

    @ManyToOne
    @JoinColumn(name = "UserId")
    User user;

    @ManyToOne
    @JoinColumn(name = "PaymentId")
    Payment payment;

    @OneToMany(mappedBy="invoice", cascade = CascadeType.ALL)
    @JsonIgnore
    List<OrderFood> listOrderFood;

    @OneToMany(mappedBy="invoice", cascade = CascadeType.ALL)
    @JsonIgnore
    List<InvoiceDetail> listInvoiceDetail;
}
