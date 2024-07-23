package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "FilmGenres" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FilmGenres {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FilmGenresId")
    int filmGenresId;

    @ManyToOne
    @JoinColumn(name = "FilmId")
    Film film;

    @ManyToOne
    @JoinColumn(name = "FilmTypeId")
    FilmType filmType;
}
