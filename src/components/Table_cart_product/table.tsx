import React, { useState } from "react";
import { Image, Table, Space, Modal } from "antd";
import type { ColumnsType } from "antd/es/table";
import styles from "./tableCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons/faTrashCan";

interface ProductType {
  name: string;
  color: string;
  size: string;
  image: string;
}

interface DataType {
  key: string;
  product: ProductType;
  price: number;
  quantity: number;
  money: number;
}

const TableCart: React.FC = () => {
  const data: DataType[] = [
    {
      key: "1",
      product: {
        name: "Sản phẩm 1",
        color: "Màu 1",
        size: "Size 1",
        image: "/images/1.webp",
      },
      price: 32,
      quantity: 1,
      money: 32,
    },
    {
      key: "2",
      product: {
        name: "Sản phẩm 2",
        color: "Màu 2",
        size: "Size 2",
        image: "/images/2.webp",
      },
      price: 45,
      quantity: 3,
      money: 135,
    },
  ];
  const columns: ColumnsType<DataType> = [
    {
      title: "Sản phẩm",
      dataIndex: "product",
      key: "product",
      render: (product) => (
        <div className={styles.product}>
          <div>
            <Image
              src={product.image}
              width={90}
              height={120}
              preview={false}
              alt="anh loi"
            />
          </div>
          <div>
            <p>{product.name}</p>
            <div>
              <span>{product.color}</span> / <span>{product.size}</span>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Đơn giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
      key: "quantity",
      render: (quantity, record) => (
        <div className={styles.quantity}>
          <div
            className={styles.sub}
            onClick={() => handleQuantityChange(record, -1)}
          >
            <FontAwesomeIcon icon={faMinus} />
          </div>
          <div className={styles.number}>{quantity}</div>
          <div
            className={styles.add}
            onClick={() => handleQuantityChange(record, 1)}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
        </div>
      ),
    },
    {
      title: "Tổng tiền",
      key: "money",
      dataIndex: "money",
      render: (money, record) => (
        <div className={styles.money_del}>
          <span>{money}</span>
          <div>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={styles.delete_prod_order}
              // onClick={showModal}
              onClick={() => handleDeleteProduct(record)}
            />
          </div>
          {/* <Modal
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={null}
          >
            <div>
              <p>Bạn có chắc chắn muốn xoá sản phẩm này?</p>
              <p>Áo Polo Nam Coolmax</p>
            </div>
            <div>
              <button
                onClick={() => {
                  handleDeleteProduct(record);
                  handleOk();
                }}
              >
                Đồng ý
              </button>
              <button>Không</button>
            </div>
          </Modal> */}
        </div>
      ),
    },
  ];
  const [cartData, setCartData] = useState(data);
  const handleQuantityChange = (record: DataType, change: number) => {
    const updatedCartData = cartData.map((item) => {
      if (item.key === record.key) {
        const newQuantity = item.quantity + change;
        if (newQuantity >= 0) {
          item.quantity = newQuantity;
          item.money = item.price * newQuantity;
        }
      }
      return item;
    });

    setCartData(updatedCartData);
  };
  const handleDeleteProduct = (record: DataType) => {
    const updatedCartData = cartData.filter((item) => item.key !== record.key);
    setCartData(updatedCartData);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Table columns={columns} dataSource={cartData} pagination={false} />
    </>
  );
};

export default TableCart;
