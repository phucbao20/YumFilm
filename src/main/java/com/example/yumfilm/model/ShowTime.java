package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ShowTime" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShowTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ShowTimeId")
    int showTimeId;
    @Temporal(value = TemporalType.DATE)
    @Column(name = "ShowTimeDate", columnDefinition = "date", nullable = false)
    Date showTimeDate;
    @Column(name = "Status" , nullable = false)
    boolean status;
    @Column(name = "Price" , nullable = false)
    double price ;

    @ManyToOne
    @JoinColumn(name = "ShowTimeListId")
    ShowTimeList showTimeList;

    @ManyToOne
    @JoinColumn(name = "FilmId")
    Film film;

    @OneToMany(mappedBy = "showTime")
    List<ShowTimeSeatType> listShowTimeSeatType;

    @OneToMany(mappedBy = "showTime")
    List<CinemaRoom> listCinemaRoom;

    @OneToMany(mappedBy = "showTime")
    List<InvoiceDetail> listInvoiceDetail;
}
