package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "FilmType" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class FilmType {
    @Id
    @Column(name = "FilmTypeId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int filmTypeId;
    @Column(name = "FilmTypeName" , columnDefinition = "nvarchar(100)", nullable = false)
    String filmTypeName;

    @Column(name = "Status" , nullable = false)
    boolean status;

    @OneToMany(mappedBy= "filmType")
    List<FilmGenres> listFilmGenres;
}
