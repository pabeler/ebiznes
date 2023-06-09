package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "title")
    private String title;

    @Column(name = "quantity")
    private Integer quantity;

    @Column(name = "description")
    private String description;

    @Column(name = "image_url")
    private String image_url;

    @Column(name = "price")
    private Float price;

    @OneToMany(mappedBy = "book")
    @JsonIgnore
    private Set<Review> reviews;

    @ManyToMany
    @JoinTable(name = "`books_categories`",
            joinColumns = @JoinColumn(name = "bookid"),
            inverseJoinColumns = @JoinColumn(name = "categoryid"))
    @JsonIgnoreProperties("book")
    private Set<Category> categories;

    @OneToOne
    @JoinColumn(name = "publisher_id", referencedColumnName = "id")
    private Publisher publisher;

    @ManyToMany
    @JoinTable(name = "`books_authors`",
            joinColumns = @JoinColumn(name = "bookid"),
            inverseJoinColumns = @JoinColumn(name = "authorid"))
    @JsonIgnoreProperties("book")
    private Set<Author> authors;

    @OneToMany(mappedBy = "book")
    @JsonIgnore
    private Set<OrderDetail> orderDetails;
}
