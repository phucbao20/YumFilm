package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Producer")
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Producer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ProducerId")
    int producerId;
    @Column(name = "ProducerName", columnDefinition = "nvarchar(100)", nullable = false)
    String producerName;

    @Column(name = "Status", nullable = false)
    boolean status;

    @OneToMany(mappedBy = "producer")
    List<ProducerOfFilm> listProducerOfFilm;
}
