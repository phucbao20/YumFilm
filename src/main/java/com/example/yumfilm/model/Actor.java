package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Actor" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Actor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ActorId")
    int actorId;
    @Column(name = "ActorName" , columnDefinition = "nvarchar(100)", nullable = false)
    String actorName;

    @Column(name = "Status" , nullable = false)
    boolean status;

    @OneToMany(mappedBy = "actor")
    List<ActorOfFilm> listActorOfFilm;
}
