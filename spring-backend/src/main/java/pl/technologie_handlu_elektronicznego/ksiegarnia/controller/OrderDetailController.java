package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.OrderDetail;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.OrderDetailService;

@RestController
@RequestMapping("/api/v1/orderDetail")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class OrderDetailController {
    private final OrderDetailService orderDetailService;

    @PostMapping("/add")
    public ResponseEntity<OrderDetail> createOrderDetail(@RequestBody OrderDetail orderDetail) {
        OrderDetail savedOrderDetail = orderDetailService.save(orderDetail);
        return ResponseEntity.ok(savedOrderDetail);
    }
}
