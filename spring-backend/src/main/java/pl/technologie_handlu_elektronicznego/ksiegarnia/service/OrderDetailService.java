package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.OrderDetail;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.OrderDetailRepository;
@Service
@AllArgsConstructor
public class OrderDetailService {
    private final OrderDetailRepository orderDetailsRepository;

    public OrderDetail save(OrderDetail orderDetail) {
        return orderDetailsRepository.save(orderDetail);
    }
}
