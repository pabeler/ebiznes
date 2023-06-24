import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Container, Row, Col } from "react-bootstrap";

function Order() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const userId = sessionStorage.getItem("id");
    console.log(userId);

    axios
      .get(`http://localhost:8080/api/v1/order/get-by-user/${userId}`)
      .then((response) => {
        const ordersData = response.data;
        console.log(ordersData);

        // Create promises for each order details fetch
        const promises = ordersData.map((order) =>
          axios
            .get(
              `http://localhost:8080/api/v1/orderDetail/get-by-order/${order.id}`
            )
            .then((response) => {
              // Add the details to each order
              order.details = response.data;
              return order;
            })
        );

        // Resolve all promises
        Promise.all(promises).then((results) => {
          setOrders(results);
          console.log(results);
        });
      })
      .catch((error) => {
        console.error(`There was an error retrieving the order data: ${error}`);
      });
  }, []);

  return (
    <Container className="Order">
      <h2>Zamówienia</h2>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <Card key={index} className="my-3">
            <Card.Body>
              <Card.Title>Zamówienie ID: {order.id}</Card.Title>
              <Card.Text>Utworzone: {order.created_at}</Card.Text>
              <Card.Text>Aktualizowane: {order.updated_at}</Card.Text>
              <Card.Text>Adres dostawy: {order.destination_address}</Card.Text>
              <Card.Text>Status: {order.status}</Card.Text>
              <h5>Szczegóły zamówienia:</h5>
              {order.details.map((detail, i) => (
                <div key={i}>
                  <h6>Szczegół {i + 1}</h6>
                  <p>Tytuł książki: {detail.book.title}</p>
                  <p>Ilość: {detail.quantity}</p>
                </div>
              ))}
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>Nie znaleziono zamówień</p>
      )}
    </Container>
  );
}

export default Order;
