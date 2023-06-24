package pl.technologie_handlu_elektronicznego.ksiegarnia.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.OrderDetail;
import pl.technologie_handlu_elektronicznego.ksiegarnia.service.OrderDetailService;

import java.util.List;

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
    @GetMapping("/get-by-order/{id}")
    public ResponseEntity<List<OrderDetail>> getOrderDetailByOrderId(@PathVariable Integer id) {
        List<OrderDetail> orderDetail = orderDetailService.findByOrderId(id);
        return ResponseEntity.ok(orderDetail);
    }
}
