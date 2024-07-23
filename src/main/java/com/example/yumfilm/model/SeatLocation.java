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
@Table(name = "SeatLocation" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SeatLocation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "SeatLocationId")
    int seatLocationId;
    @Column(name = "SeatNumber" , columnDefinition = "nvarchar(20)" , nullable = false)
    String seatNumber;
    @Column(name= "Status", nullable = false)
    boolean status;

    @ManyToOne
    @JoinColumn(name = "SeatTypeId")
    @JsonIgnore
    SeatType seatType;

    @OneToMany(mappedBy = "seatLocation")
    List<CinemaRoom> listCinemaRoom;

    @OneToMany(mappedBy = "seatLocation")

    List<InvoiceDetail> listInvoiceDetail;
}
