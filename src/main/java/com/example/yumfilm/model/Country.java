package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Country")
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Country {
    @Id
    @Column(name = "CountryId", columnDefinition = "nvarchar(20)")
    String countryId;
    @Column(name = "CountryName", columnDefinition = "nvarchar(100)", nullable = false)
    String countryName;

    @Column(name = "Status", nullable = false)
    boolean status;

    @OneToMany(mappedBy = "country")
    List<Film> listFilms;
}
