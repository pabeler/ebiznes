package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.Order;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/v1/order")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderController {
    private final OrderService orderService;

    @PostMapping("/add")
    public ResponseEntity<?> addOrder(@RequestBody Order order) {
        orderService.addOrder(order);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/get/{id}")
    public List<Order> getAllUserOrders(@PathVariable Integer id) {
        return orderService.findAllUserOrders(id);
    }
}
