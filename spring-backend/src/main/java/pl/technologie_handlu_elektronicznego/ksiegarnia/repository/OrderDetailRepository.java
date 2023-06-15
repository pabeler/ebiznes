package pl.technologie_handlu_elektronicznego.ksiegarnia.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.OrderDetail;

@Repository
public interface OrderDetailRepository extends JpaRepository<OrderDetail, Integer> {
}