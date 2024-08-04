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
@Table(name = "FilmDetail" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FilmDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "FilmDetailId")
    int filmDetailId;

    @Temporal(value = TemporalType.DATE)
    @Column(name = "ProductionDate" , columnDefinition = "date" , nullable = false)
    Date produtionDate;

    @Column(name = "Description" , columnDefinition = "nvarchar(max)", nullable = false)
    String description;
    @Column(name = "Status" , nullable = false)
    boolean status;

    @ManyToOne
    @JoinColumn(name = "FilmId" , nullable =false)
    Film film;

    @OneToMany(mappedBy = "filmDetail", cascade = CascadeType.ALL)
    List<ActorOfFilm> listActorOfFilm;

    @OneToMany(mappedBy = "filmDetail", cascade = CascadeType.ALL)
    List<ProducerOfFilm> listProducerOfFilm;

    @OneToMany(mappedBy = "filmDetail", cascade = CascadeType.ALL)
    List<DirectorOfFilm> listDirectorOfFilm;
}
