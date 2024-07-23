package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "InvoiceDetail" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class InvoiceDetail {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "InvoiceDetailId")
    long invoiceDetailId;

    @Column(name = "Price")
    double price;

    @Column(name = "Note")
    String note;

    @ManyToOne
    @JoinColumn(name = "InvoiceId")
    @JsonIgnore
    Invoice invoice;

    @ManyToOne
    @JoinColumn(name = "SeatLocationId")
    @JsonIgnore
    SeatLocation seatLocation;

    @ManyToOne
    @JoinColumn(name = "ShowTimeId")
    @JsonIgnore
    ShowTime showTime;

}
