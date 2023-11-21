// UserManagement.tsx
"use client";
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, Space } from "antd";

interface User {
  id: number;
  username: string;
  email: string;
  // Thêm các trường thông tin người dùng khác nếu cần
}

const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: 1, username: "user1", email: "user1@example.com" },
    { id: 2, username: "user2", email: "user2@example.com" },
    // Thêm các người dùng khác tại đây
  ]);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    setEditingUser(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setEditingUser(null);
  };

  const showEditModal = (record: User) => {
    setEditingUser(record);
    setIsModalVisible(true);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    // Thêm các cột thông tin người dùng khác nếu cần
    {
      title: "Action",
      key: "action",
      render: (_: any, record: User) => (
        <Space size="middle">
          <a onClick={() => handleViewDetails(record)}>Xem chi tiết</a>
          <a onClick={() => showEditModal(record)}>Chỉnh sửa</a>
          <a onClick={() => handleDelete(record)}>Xóa</a>
        </Space>
      ),
    },
  ];

  const onFinish = (values: User) => {
    if (editingUser) {
      // Nếu editingUser không null, cập nhật người dùng hiện tại
      const updatedUsers = users.map((u) =>
        u.id === editingUser.id ? { ...u, ...values } : u
      );
      setUsers(updatedUsers);
    } else {
      // Nếu editingUser là null, thêm một người dùng mới
      const newUser: User = {
        // id: users.length + 1,
        ...values,
      };
      setUsers([...users, newUser]);
    }

    setEditingUser(null);
    setIsModalVisible(false);
  };

  const handleViewDetails = (record: User) => {
    // Thêm logic xem chi tiết nếu cần
  };

  const handleDelete = (record: User) => {
    const updatedUsers = users.filter((u) => u.id !== record.id);
    setUsers(updatedUsers);
    setEditingUser(null);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Thêm Người dùng
      </Button>
      <Table dataSource={users} columns={columns} />

      <Modal
        title={editingUser ? "Chỉnh sửa Người dùng" : "Thêm Người dùng"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish} initialValues={editingUser || {}}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Nhập tên người dùng!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Nhập địa chỉ email!" },
              { type: "email", message: "Địa chỉ email không hợp lệ!" },
            ]}
          >
            <Input />
          </Form.Item>
          {/* Thêm các trường thông tin người dùng khác nếu cần */}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {editingUser ? "Cập nhật" : "Thêm"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default UserManagement;
