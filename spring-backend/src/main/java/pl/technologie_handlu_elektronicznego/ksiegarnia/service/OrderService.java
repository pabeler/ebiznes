package pl.technologie_handlu_elektronicznego.ksiegarnia.service;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.BookDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.OrderDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.OrderItemDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.DTOs.UserDTO;
import pl.technologie_handlu_elektronicznego.ksiegarnia.model.*;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.OrderDetailRepository;
import pl.technologie_handlu_elektronicznego.ksiegarnia.repository.OrderRepository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
@AllArgsConstructor
public class OrderService {
    private final OrderRepository orderRepository;
    private final UserService userService;
    private final OrderDetailRepository orderDetailRepository;

    public List<Order> findAllUserOrders(Integer user_id) {
        return orderRepository.findByUserId(user_id);
    }

    public Order save(Order order) {
        User user = order.getUser();
        if(user.getId() == null) {
            userService.save(user); // Save user if it doesn't exist in the database.
        } else {
            User finalUser = user;
            user = userService.findById(user.getId()) // Fetch from database if it already exists.
                    .orElseThrow(() -> new RuntimeException("User not found with id: " + finalUser.getId()));
        }
        order.setUser(user);
        return orderRepository.save(order);
    }

    public Order saveWithDetails(Order order) {
        // Initialize the items if they are null.
        System.out.println(order.toString());

        if (order.getItems() == null) {
            order.setItems(new HashSet<>());
        }

        // Save the order first.
        Order savedOrder = this.save(order);
        if (savedOrder == null) {
            throw new RuntimeException("Failed to save the order");
        }

        // Save each order detail.
        for (OrderDetail detailData : order.getItems()) {
            OrderDetail orderDetail = new OrderDetail();
            orderDetail.setOrder(savedOrder);
            orderDetail.setBook(detailData.getBook());
            orderDetail.setQuantity(detailData.getQuantity());
            orderDetailRepository.save(orderDetail);
        }

        return savedOrder;
    }


    public Order convertToOrderModel(OrderDTO orderDTO) {
        Order order = new Order();
        order.setUser(convertToUserModel(orderDTO.getUser()));
        order.setCreated_at(orderDTO.getCreated_at());
        order.setUpdated_at(orderDTO.getUpdated_at());
        order.setDestination_address(orderDTO.getDestination_address());
        order.setStatus(Status.valueOf(orderDTO.getStatus()));
        order.setItems(convertToOrderDetailSet(orderDTO.getItems()));
        return order;
    }

    private User convertToUserModel(UserDTO userDTO) {
        User user = new User();
        user.setId(userDTO.getId());
        // Set other user fields if needed
        return user;
    }

    private Set<OrderDetail> convertToOrderDetailSet(List<OrderItemDTO> itemsDTO) {
        Set<OrderDetail> items = new HashSet<>();
        for (OrderItemDTO itemDTO : itemsDTO) {
            OrderDetail item = new OrderDetail();
            item.setBook(convertToBookModel(itemDTO.getBook()));
            item.setQuantity(itemDTO.getQuantity());
            // Set other item fields if needed
            items.add(item);
        }
        return items;
    }

    private Book convertToBookModel(BookDTO bookDTO) {
        Book book = new Book();
        book.setId(bookDTO.getId());
        // Set other book fields if needed
        return book;
    }

    public void updateOrderAddress(String orderId, String shippingAddress) {
        Optional<Order> order = orderRepository.findById(Integer.parseInt(orderId));
        if (order.isPresent()) {
            order.get().setDestination_address(shippingAddress);
            orderRepository.save(order.get());
        }else {
            throw new RuntimeException("Order not found with id: " + orderId);
        }
    }

    public List<Order> findAllUserOrdersByUserId(Integer id) {
        return orderRepository.findByUserId(id);
    }
}
