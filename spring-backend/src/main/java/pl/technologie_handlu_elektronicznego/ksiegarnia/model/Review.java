package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;

@Entity
public class Review {
    @Id
    @SequenceGenerator(name = "reviews_id_seq", sequenceName = "reviews_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviews_id_seq")
    private Integer id;
    @Column(name = "description")
    private String description;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bookID", referencedColumnName = "id")
    private Book book;
}
