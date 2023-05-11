package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "`books`")
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

    @ManyToMany
    @JoinTable(name = "`books_categories`",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories;

    @OneToOne
    @JoinColumn(name = "publisher_id", referencedColumnName = "id")
    private Publisher publishers;


    @Column(name = "image_url")
    private String image_url;

    @ManyToMany
    @JoinTable(name = "`books_authors`",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<Author> authors;

    @OneToMany
    private Set<OrderDetail> quantity;

}
