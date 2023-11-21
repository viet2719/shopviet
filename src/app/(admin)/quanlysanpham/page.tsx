// pages/products.tsx
"use client";
import React, { useState } from "react";
import { Table, Space } from "antd";
import Themmoisanpham from "@/components/Modal/quanlysanpham/Themmoisanpham";
import Chinhsuasanpham from "@/components/Modal/quanlysanpham/Chinhsuasanpham";
import Xoasanpham from "@/components/Modal/quanlysanpham/Xoasanpham";

interface Product {
  key: number;
  name: string;
  price: number;
  size: string;
  color: string;
  category: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      key: 1,
      name: "Áo Polo",
      price: 20,
      size: "M",
      color: "Đen",
      category: "Áo",
    },
    {
      key: 2,
      name: "Quần Jean",
      price: 30,
      size: "L",
      color: "Xanh",
      category: "Quần",
    },
    // Thêm các sản phẩm khác tại đây
  ]);

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Kích thước",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Màu sắc",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Loại quần áo",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "",
      key: "action",
      render: (_: any, record: Product) => (
        <Space size="middle">
          <Chinhsuasanpham />
          <Xoasanpham />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Themmoisanpham />
      <Table dataSource={products} columns={columns} />
    </div>
  );
};

export default Products;
