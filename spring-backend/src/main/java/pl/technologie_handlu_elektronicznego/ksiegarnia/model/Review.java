package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "`Reviews`")
@NoArgsConstructor
@Getter
@Setter
public class Review {
    @Id
    @SequenceGenerator(name = "reviews_sequence", sequenceName = "reviews_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "reviews_sequence")
    private Integer id;
    @Column(name = "description")
    private String description;

    //tu tak samo bez kaksady, bo usuniemy review to nam wywali książke
    @ManyToOne
    @JoinColumn(name = "book_id", referencedColumnName = "id")
    private Book book;
}
