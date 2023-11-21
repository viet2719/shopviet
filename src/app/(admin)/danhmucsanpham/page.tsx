// pages/categories.js
"use client";
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input } from "antd";

const Categories = () => {
  const [categories, setCategories] = useState([
    { key: "1", name: "Áo", description: "Danh mục áo" },
    { key: "2", name: "Quần", description: "Danh mục quần" },
    // Thêm các danh mục khác tại đây
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Tên",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mô tả",
      dataIndex: "description",
      key: "description",
    },
  ];

  const onFinish = (values: any) => {
    const newCategory = {
      key: (categories.length + 1).toString(),
      ...values,
    };
    setCategories([...categories, newCategory]);
    setIsModalVisible(false);
  };

  return (
    <div className="container-pages">
      <Button type="primary" onClick={showModal}>
        Thêm Danh mục
      </Button>
      <Table dataSource={categories} columns={columns} />

      <Modal
        title="Thêm Danh mục"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label="Tên"
            name="name"
            rules={[{ required: true, message: "Nhập tên danh mục!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="Mô tả" name="description">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Thêm
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Categories;
