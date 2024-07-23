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

    @Column(name = "LastName" , columnDefinition = "nvarchar(50)", nullable = false)
    String lastName;

    @Column(name = "FirstName" , columnDefinition ="nvarchar(50)", nullable = false)
    String firstName;

    @Column(name = "PhoneNumber", columnDefinition = "nvarchar(50)", nullable = false)
    String phoneNumber;

    @Column(name = "Email" , columnDefinition = "nvarchar(255)" , nullable = false)
    String email;

    @Column(name = "Username" , columnDefinition= "nvarchar(255)" , nullable = false)
    String username;

    @Column(name = "Password" , columnDefinition = "nchar(60)", nullable = false)
    String password;

    @Column(name = "Birthdate" , nullable =false)
    @Temporal(TemporalType.DATE)
    Date birthday;

    @Column(name = "Sex", nullable = false)
    boolean sex;

    @Column(name = "Role" , nullable = false)
    boolean role;

    @Column(name = "Status", nullable = false)
    boolean status;

    @OneToMany  (mappedBy = "user")
    @JsonIgnore
    List<Invoice> listInvoice;
}
