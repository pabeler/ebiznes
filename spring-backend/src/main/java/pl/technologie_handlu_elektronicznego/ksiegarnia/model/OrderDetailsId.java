package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.Column;
import jakarta.persistence.Embeddable;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;

@Embeddable
@NoArgsConstructor
@Getter
@Setter
@EqualsAndHashCode
public class OrderDetailsId implements Serializable {
    @Column(name = "orderID")
    private Integer orderID;
    @Column(name = "bookID")
    private Integer bookID;
}
