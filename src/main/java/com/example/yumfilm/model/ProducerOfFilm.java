package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ProducerOfFilm")
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ProducerOfFilm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProducerOfFilmId")
    int producerOfFilmId;

    @ManyToOne
    @JoinColumn(name = "FilmDetailId", nullable = false)
    FilmDetail filmDetail;

    @ManyToOne
    @JoinColumn(name = "ProducerId", nullable = false)
    Producer producer;
}
