package pl.technologie_handlu_elektronicznego.ksiegarnia.model;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class OrderStatusHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "orderID")
    private Integer Id;
    

}
