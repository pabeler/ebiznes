package pl.technologie_handlu_elektronicznego.ksiegarnia.model;


import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@Table(name = "`users`")
@Getter
@Setter
@NoArgsConstructor

public class User {
    @Id
    @SequenceGenerator(name = "users_id_seq", sequenceName = "users_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "users_id_seq")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "second_name")
    private String second_name;

    @Column(name = "phone_number")
    private String phone_number;

    @Column(name = "address")
    private String address;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @Column(name = "role")
    @Enumerated(EnumType.STRING)
    private Role role;

    @OneToMany
    private List<Order> orders;
}
