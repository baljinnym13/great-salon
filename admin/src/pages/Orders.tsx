import React, { useState } from "react";

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<any[]>([]); // Захиалгын мэдээлэл
  const [selectedOrder, setSelectedOrder] = useState<any | null>(null);

  const handleViewOrder = (orderId: string) => {
    // Захиалга үзэх
    const order = orders.find((order) => order.id === orderId);
    setSelectedOrder(order);
  };

  const handleCloseOrder = (orderId: string) => {
    // Захиалга хаах
    setOrders(orders.filter((order) => order.id !== orderId));
  };

  return (
    <div>
      <h2>Захиалгууд</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            {order.service} - {order.time}
            <button onClick={() => handleViewOrder(order.id)}>Үзэх</button>
            <button onClick={() => handleCloseOrder(order.id)}>Хаах</button>
          </li>
        ))}
      </ul>
      {selectedOrder && (
        <div>
          <h3>Захиалга мэдээлэл</h3>
          <p>Үйлчилгээ: {selectedOrder.service}</p>
          <p>Цаг: {selectedOrder.time}</p>
        </div>
      )}
    </div>
  );
};

export default Orders;
