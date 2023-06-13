package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Author;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Category;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Order;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.OrderRepository;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;

    public List<Order> findAllUserOrders(Integer user_id) {
        return orderRepository.findByUserId(user_id);
    }
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }
}
