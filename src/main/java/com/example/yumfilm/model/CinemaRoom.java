package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "CinemaRoom" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class CinemaRoom {
    @Id
    @Column(name = "CinemaRoomId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int cinemaRoomId;

    @Column(name = "NameRoom", columnDefinition = "nvarchar(50)", nullable = false)
    String nameRoom;

    @Column(name = "Status", nullable = false)
    boolean status;

    @ManyToOne
    @JoinColumn(name = "ShowTimeId")
    @JsonIgnore
    ShowTime showTime;

    @ManyToOne
    @JoinColumn(name = "SeatLocationId")
    @JsonIgnore
    SeatLocation seatLocation;
}
