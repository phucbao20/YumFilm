package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "DirectorOfFilm" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class DirectorOfFilm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DirectorOfFilmId")
    int directorOfFilmId;

    @ManyToOne
    @JoinColumn(name= "FilmDetailId" , nullable = false)
    FilmDetail filmDetail;

    @ManyToOne
    @JoinColumn(name= "DirectorId" , nullable = false)
    Director director;
}
