package com.example.yumfilm.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

import java.util.Date;
import java.util.List;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Users" , uniqueConstraints = @UniqueConstraint(columnNames = "username"))
@Builder
@FieldDefaults(level = AccessLevel.PRIVATE)
public class User {
    @Id
    @Column(name = "UserId")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    long userId;

    @Column(name = "LastName" , columnDefinition = "nvarchar(50)", nullable = true)
    String lastName;

    @Column(name = "FirstName" , columnDefinition ="nvarchar(50)", nullable = true)
    String firstName;

    @Column(name = "PhoneNumber", columnDefinition = "nvarchar(50)", nullable = true)
    String phoneNumber;

    @Column(name = "Email" , columnDefinition = "nvarchar(255)" , nullable = true)
    String email;

    @Column(name = "Username" , columnDefinition= "nvarchar(255)" , nullable = true)
    String username;

    @Column(name = "Password" , columnDefinition = "nchar(60)", nullable = true)
    String password;

    @Column(name = "Birthdate" , nullable = true)
    @Temporal(TemporalType.DATE)
    Date birthday;

    @Column(name = "Sex", nullable = true)
    boolean sex;

    @Column(name = "Role" , nullable = true)
    boolean role;

    @Column(name = "Status", nullable = true)
    boolean status;

    @OneToMany  (mappedBy = "user")
    @JsonIgnore
    List<Invoice> listInvoice;
}
