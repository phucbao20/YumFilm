package com.example.yumfilm.model;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "ShowTimeList" )
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class ShowTimeList {
    @Id
    @Column(name = "ShowTimeListId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int showTimeListId;
    @Column(name = "ShowTimeFrame" , columnDefinition = "nvarchar(100)", nullable = false)
    String showTimeFrame;

    @Column(name = "Status" , nullable = false)
    boolean status;

    @OneToMany(mappedBy ="showTimeList")
    List<ShowTime> showTime;
}
