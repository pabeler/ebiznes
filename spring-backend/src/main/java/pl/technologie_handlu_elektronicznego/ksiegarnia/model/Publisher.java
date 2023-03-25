package pl.technologie_handlu_elektronicznego.ksiegarnia.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "`Publishers`")
@Getter
@Setter
@NoArgsConstructor
public class Publisher {
    @Id
    @SequenceGenerator(name = "publishers_sequence", sequenceName = "publishers_sequence", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "publishers_sequence")
    private Integer id;

    @Column(name = "name")
    private String name;
}
