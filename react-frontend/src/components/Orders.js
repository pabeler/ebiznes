import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@material-ui/core";

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
    <div className="Order">
      <Typography variant="h2">Orders</Typography>
      {orders.length > 0 ? (
        orders.map((order, index) => (
          <Card variant="outlined" style={{ marginTop: "1rem" }} key={index}>
            <CardContent>
              <Typography variant="h6">Order ID: {order.id}</Typography>
              <Typography variant="body1">
                Created at: {order.created_at}
              </Typography>
              <Typography variant="body1">
                Updated at: {order.updated_at}
              </Typography>
              <Typography variant="body1">
                Destination Address: {order.destination_address}
              </Typography>
              <Typography variant="body1">Status: {order.status}</Typography>
              <Typography variant="h5">Order Details:</Typography>
              {order.details.map((detail, i) => (
                <div key={i}>
                  <Typography variant="h6">Detail {i + 1}</Typography>
                  <Typography variant="body1">
                    Book Title: {detail.book.title}
                  </Typography>
                  <Typography variant="body1">
                    Quantity: {detail.quantity}
                  </Typography>
                </div>
              ))}
            </CardContent>
          </Card>
        ))
      ) : (
        <Typography variant="body1">No orders found</Typography>
      )}
    </div>
  );
}

export default Order;
