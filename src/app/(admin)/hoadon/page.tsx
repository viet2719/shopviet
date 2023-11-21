// pages/invoices.js
"use client";
import React, { useState } from "react";
import { Table, Button, Modal, Form, Input, DatePicker, Space } from "antd";

const Invoices = () => {
  const [invoices, setInvoices] = useState([
    { key: "1", invoiceNumber: "INV001", amount: 100, date: "2023-01-01" },
    { key: "2", invoiceNumber: "INV002", amount: 150, date: "2023-02-01" },
    // Thêm các hóa đơn khác tại đây
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
      title: "Số hóa đơn",
      dataIndex: "invoiceNumber",
      key: "invoiceNumber",
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
    {
      title: "Action",
      key: "action",
      render: (_: any, record: any) => (
        <Space size="middle">
          <a onClick={() => handleDelete(record)}>Delete</a>
          <a onClick={() => handleViewDetails(record)}>View Details</a>
        </Space>
      ),
    },
  ];
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  const handleViewDetails = (record: any) => {
    setSelectedInvoice(record);
    setIsModalVisible(true);
  };
  const handleDelete = (record: { key: string }) => {
    const updatedInvoices = invoices.filter(
      (invoice) => invoice.key !== record.key
    );
    setInvoices(updatedInvoices);
  };
  const onFinish = (values: any) => {
    const newInvoice = {
      key: (invoices.length + 1).toString(),
      ...values,
    };
    setInvoices([...invoices, newInvoice]);
    setIsModalVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Thêm Hóa đơn
      </Button>
      <Table dataSource={invoices} columns={columns} />

      <Modal
        title="Thêm Hóa đơn"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form onFinish={onFinish}>
          <Form.Item
            label="Số hóa đơn"
            name="invoiceNumber"
            rules={[{ required: true, message: "Nhập số hóa đơn!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Số tiền"
            name="amount"
            rules={[{ required: true, message: "Nhập số tiền!" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Ngày"
            name="date"
            rules={[{ required: true, message: "Chọn ngày!" }]}
          >
            <DatePicker />
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

export default Invoices;
