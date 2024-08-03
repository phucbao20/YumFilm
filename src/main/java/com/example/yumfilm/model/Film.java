package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;
import org.springframework.format.annotation.DateTimeFormat;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Film" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Film {
    @Id
    @Column(name = "FilmId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    int filmId;
    @Column(name = "FilmName" , columnDefinition ="nvarchar(255)", nullable = false)
    String filmName;

    @Column(name = "FilmTime" , columnDefinition ="nvarchar(255)", nullable = false)
    String filmTime;

    @Column(name = "FilmImage" , columnDefinition ="nvarchar(255)", nullable = false)
    String filmImage;

    @Column(name = "VideoTrailer" , columnDefinition ="nvarchar(255)", nullable = false)

    String videoTrailer;

    @Temporal(value = TemporalType.DATE)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    @Column(name = "PremiereDate" , columnDefinition ="date", nullable = false)
    Date premiereDate;

    @Column(name = "Status", nullable = false)
    boolean status;

    @Column(name = "Price" , nullable = false)
    double price;

    @Column(name = "Age")
    int age;

    @Column(name = "Rate")
    double rate;

    @ManyToOne()
    @JoinColumn(name = "CountryId" , nullable = false)
    @JsonIgnore
    Country country;

    @OneToMany(mappedBy= "film" , cascade = CascadeType.ALL)
    List<FilmDetail> listFilmDetail;

    @OneToMany(mappedBy= "film" , cascade = CascadeType.ALL)
    List<ShowTime> listShowTime;

    @OneToMany(mappedBy= "film" , cascade = CascadeType.ALL)
    List<FilmGenres> listFilmGenres;
}
