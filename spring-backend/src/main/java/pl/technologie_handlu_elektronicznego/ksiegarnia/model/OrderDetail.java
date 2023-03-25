package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "`Order_Details`")
@Getter
@Setter
@NoArgsConstructor
public class OrderDetail {

    @EmbeddedId
    private OrderDetailsId id;

    @ManyToOne
    @MapsId("orderID")
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @MapsId("bookID")
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(name = "quantity")
    private Integer quantity;
}
