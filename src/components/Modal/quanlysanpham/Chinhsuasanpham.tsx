import React, { useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Select,
  Space,
} from "antd";
function Chinhsuasanpham() {
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

  return (
    <div>
      <button onClick={showModal}>Chỉnh sửa</button>
      <Modal
        title="Chỉnh Sửa Sản phẩm"
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form>
          <Form.Item
            label="Tên sản phẩm"
            name="name"
            rules={[{ required: true, message: "Nhập tên sản phẩm!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Giá"
            name="price"
            rules={[{ required: true, message: "Nhập giá sản phẩm!" }]}
          >
            <InputNumber min={0} />
          </Form.Item>
          <Form.Item
            label="Kích thước"
            name="size"
            rules={[{ required: true, message: "Nhập kích thước!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Màu sắc"
            name="color"
            rules={[{ required: true, message: "Nhập màu sắc!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Loại quần áo"
            name="category"
            rules={[{ required: true, message: "Nhập loại quần áo!" }]}
          >
            <Select>
              <Select.Option value="Áo">Áo</Select.Option>
              <Select.Option value="Quần">Quần</Select.Option>
              {/* Thêm loại quần áo khác nếu cần */}
            </Select>
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
}

export default Chinhsuasanpham;
