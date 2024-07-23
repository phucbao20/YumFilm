package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ShowTimeSeatType" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShowTimeSeatType {
    @Id
    @GeneratedValue(strategy =  GenerationType.IDENTITY)
    @Column(name = "ShowTimeSeatTypeId")
    long showTimeSeatTypeId;
    @Column(name = "Price" , nullable = false)
    double price;

    @ManyToOne
    @JoinColumn(name = "SeatTypeId")
    SeatType seatType;

    @ManyToOne
    @JoinColumn(name = "ShowTimeId")
    ShowTime showTime;
}
