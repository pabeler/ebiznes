package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
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

    @Column(name = "price")
    private Float price;

    @OneToMany
    @JsonIgnore
    private Set<Review> reviews;

    @ManyToMany
    @JoinTable(name = "`books_categories`",
            joinColumns = @JoinColumn(name = "bookid"),
            inverseJoinColumns = @JoinColumn(name = "categoryid"))
    private Set<Category> categories;

    @OneToOne
    @JoinColumn(name = "publisher_id", referencedColumnName = "id")
    private Publisher publishers;


    @Column(name = "image_url")
    private String image_url;

    @ManyToMany
    @JoinTable(name = "`books_authors`",
            joinColumns = @JoinColumn(name = "bookid"),
            inverseJoinColumns = @JoinColumn(name = "categoryid"))
    private Set<Author> authors;

    @OneToMany
    @JsonIgnore
    private Set<OrderDetail> orderDetails;

}
