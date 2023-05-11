package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "`authors`")
@Getter
@Setter
@NoArgsConstructor

public class Author {

    @ManyToMany(mappedBy = "authors")
    Set<Book> books;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "second_name")
    private String second_name;
}

