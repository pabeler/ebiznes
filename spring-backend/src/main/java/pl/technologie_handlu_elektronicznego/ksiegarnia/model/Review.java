package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Reviews")
@NoArgsConstructor
@Getter
@Setter
public class Review {
    @Id
    @SequenceGenerator(name = "reviews_id_seq", sequenceName = "reviews_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviews_id_seq")
    private Integer id;
    @Column(name = "description")
    private String description;

    //tu tak samo bez kaksady, bo usuniemy review to nam wywali książke
    @ManyToOne
    @JoinColumn(name = "bookID", referencedColumnName = "id")
    private Book book;
}
