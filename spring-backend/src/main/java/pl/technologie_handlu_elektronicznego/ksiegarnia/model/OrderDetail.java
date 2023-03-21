package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "Order_Details")
@Getter
@Setter
@NoArgsConstructor
@IdClass(OrderDetailsId.class)
public class OrderDetail {

    @Id
    @ManyToOne
    @JoinColumn(name = "orderID", nullable = false)
    private Order order;

    @Id
    @ManyToOne
    @JoinColumn(name = "bookID", nullable = false)
    private Book book;

    @Column(name = "quantity", nullable = false)
    private Integer quantity;
}
