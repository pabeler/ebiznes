package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;

@Entity
public class Category {
    @Id
    @SequenceGenerator(name = "categories_id_seq", sequenceName = "categories_id_seq", allocationSize = 1)
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "categories_id_seq")
    private Integer id;
    @Column(name = "name")
    private String name;
}
