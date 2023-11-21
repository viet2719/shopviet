// OrderStatistics.tsx
"use client";
import React, { useState } from "react";
import { Table, DatePicker, Button } from "antd";

interface Order {
  id: number;
  orderNumber: string;
  amount: number;
  date: string;
  // Thêm các trường thông tin đơn hàng khác nếu cần
}

const OrderStatistics: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([
    { id: 1, orderNumber: "ORD001", amount: 100, date: "2023-01-01" },
    { id: 2, orderNumber: "ORD002", amount: 150, date: "2023-02-01" },
    // Thêm các đơn hàng khác tại đây
  ]);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Số đơn hàng",
      dataIndex: "orderNumber",
      key: "orderNumber",
    },
    {
      title: "Số tiền",
      dataIndex: "amount",
      key: "amount",
    },
    {
      title: "Ngày",
      dataIndex: "date",
      key: "date",
    },
    // Thêm các cột thông tin đơn hàng khác nếu cần
  ];

  const handleDateChange = (date: any, dateString: string) => {
    // Xử lý khi người dùng chọn ngày
    setSelectedDate(dateString);
  };

  const filterOrdersByDate = () => {
    // Lọc đơn hàng theo ngày được chọn
    if (selectedDate) {
      const filteredOrders = orders.filter(
        (order) => order.date === selectedDate
      );
      return filteredOrders;
    }
    return orders;
  };

  return (
    <div>
      <DatePicker onChange={handleDateChange} />
      <Button type="primary" onClick={() => setSelectedDate(null)}>
        Xem Tất Cả Đơn Hàng
      </Button>
      <Table dataSource={filterOrdersByDate()} columns={columns} />
    </div>
  );
};

export default OrderStatistics;
