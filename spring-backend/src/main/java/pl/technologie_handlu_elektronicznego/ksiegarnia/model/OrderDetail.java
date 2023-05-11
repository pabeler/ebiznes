package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "`order_details`")
@Getter
@Setter
@NoArgsConstructor
public class OrderDetail {

    @EmbeddedId
    private OrderDetailsId id;

    @ManyToOne
    @MapsId("orderid")
    @JoinColumn(name = "order_id")
    private Order order;

    @ManyToOne
    @MapsId("bookid")
    @JoinColumn(name = "book_id")
    private Book book;

    @Column(name = "quantity")
    private Integer quantity;
}
