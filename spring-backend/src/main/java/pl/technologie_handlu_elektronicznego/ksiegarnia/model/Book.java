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

    @OneToMany
    private Set<Review> reviews;

    //Tu raczej bez kaskady, bo jeżeli usuniemy jakąś książke to nam pociągnie wszystko i usunie nam też kategorie z nią związaną
    //jedna książka może mieć wiele kategorii
    @OneToMany
    private Set<Category> categories;

    @OneToOne
    @JoinColumn(name = "publisherID", referencedColumnName = "id")
    private Publisher publisher;


    @Column(name = "image_url")
    private String imageUrl;

    @ManyToMany
    @JoinTable(name = "Books_Authors",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<Author> authors;

    @OneToMany
    private Set<OrderDetail> quantity;

}
