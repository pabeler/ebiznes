package pl.technologie_handlu_elektronicznego.ksiegarnia.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Table(name = "`Clients`")
@Getter
@Setter
@NoArgsConstructor

public class Client {
    @Id
    @SequenceGenerator(name = "clients_sequence", sequenceName = "clients_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "clients_sequence")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "second_name")
    private String second_name;

    @Column(name = "birthday")
    private Date birthday;

    @Column(name = "phone_number")
    private String phone_number;

    @Column(name = "address")
    private String address;

    @Column(name = "email")
    private String email;

    @Column(name = "password")
    private String password;

    @OneToMany
    private List<Order> orders;
}
