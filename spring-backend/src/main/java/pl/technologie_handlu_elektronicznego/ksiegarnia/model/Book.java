package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "Books")
@Getter
@Setter
@NoArgsConstructor

public class Book {
    @Id
    @SequenceGenerator(name = "books_id_seq", sequenceName = "books_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "books_id_seq")
    private Integer id;
    @Column(name = "title")
    private String title;
    @Column(name = "price")
    private Float price;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "categoryID", referencedColumnName = "id")
    private Category category;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "publisherID", referencedColumnName = "id")
    private Publisher publisher;
    @Column(name = "image_url")
    private String imageUrl;

    @ManyToMany
    @JoinTable(name = "Books_Authors", joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<Author> authors;
}
