package pl.technologie_handlu_elektronicznego.ksiegarnia.model;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "`publishers`")
@Getter
@Setter
@NoArgsConstructor
public class Publisher {
    @Id
    @SequenceGenerator(name = "publishers_id_seq", sequenceName = "publishers_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "publishers_id_seq")
    private Integer id;

    @Column(name = "name")
    private String name;
}
