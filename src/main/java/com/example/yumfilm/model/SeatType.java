package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "SeatType" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class SeatType {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name= "SeatTypeId")
    int seatTypeId;
    @Column(name = "SeatTypeName" , columnDefinition = "nvarchar(50)", nullable = false)
    String seatTypeName;

    @Column(name = "Price" , nullable = false)
    double price;
    @Column(name = "Status" , nullable = false)
    boolean status;

    @OneToMany(mappedBy = "seatType")
    List<SeatLocation> listSeatLocation;

    @OneToMany(mappedBy = "seatType")
    List<ShowTimeSeatType> listShowTimeSeatType;
}
