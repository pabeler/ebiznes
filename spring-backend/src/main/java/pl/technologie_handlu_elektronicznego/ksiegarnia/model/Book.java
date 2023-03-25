package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "`Books`")
@Getter
@Setter
@NoArgsConstructor

public class Book {
    @Id
    @SequenceGenerator(name = "books_sequence", sequenceName = "books_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "books_sequence")
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "price")
    private Float price;

    @OneToMany
    private Set<Review> reviews;

    @ManyToMany
    @JoinTable(name = "`Books_Categories`",
            joinColumns = @JoinColumn(name = "book_id"),
            inverseJoinColumns = @JoinColumn(name = "category_id"))
    private Set<Category> categories;

    @OneToOne
    @JoinColumn(name = "publisher_id", referencedColumnName = "id")
    private Publisher publishers;


    @Column(name = "image_url")
    private String image_url;

    @ManyToMany
    @JoinTable(name = "`Books_Authors`",
            joinColumns = @JoinColumn(name = "id"),
            inverseJoinColumns = @JoinColumn(name = "course_id"))
    private Set<Author> authors;

    @OneToMany
    private Set<OrderDetail> quantity;

}
