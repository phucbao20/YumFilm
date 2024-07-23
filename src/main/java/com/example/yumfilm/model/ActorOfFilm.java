package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ActorOfFilm" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ActorOfFilm {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ActorOfFilmId")
    int actorOfFilmId;

    @ManyToOne
    @JoinColumn(name= "FilmDetailId" , nullable = false)
    FilmDetail filmDetail;

    @ManyToOne
    @JoinColumn(name= "ActorId" , nullable = false)
    Actor actor;
}
