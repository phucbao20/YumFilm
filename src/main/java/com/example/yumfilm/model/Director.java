package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Director" )
@Builder
@FieldDefaults (level = AccessLevel.PRIVATE)
public class Director {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "DirectorId")
    int directorId;
    @Column(name = "DirectorName" , columnDefinition = "nvarchar(100)", nullable = false)
    String directorName;

    @Column(name = "Status" , nullable = false)
    boolean status;

    @OneToMany(mappedBy = "director")
    List<DirectorOfFilm> listDirectorOfFilm;
}
