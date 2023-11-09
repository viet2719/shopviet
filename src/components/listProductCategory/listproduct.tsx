"use client";
import React, { useState } from "react";
import styles from "./listproduct.module.scss";
import { Image } from "antd";
import x from "@/app/(shop)/propose/propose.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import Footerproduct from "../footerproduct/footerproduct";
function Listproduct() {
  const productsPerPage = 16; // Số sản phẩm trên mỗi trang
  const [currentPage, setCurrentPage] = useState(1);
  const product = [
    {
      id: 1,
      nameProduct: "dgajdhgjahdsadfafgajhd",
      imageProduct: "/images/1.webp",
      link: "",
      price: "13124214đ",
      data: [
        {
          id: 1,
          imageProduct: "/images/1.webp",
        },
        {
          id: 2,
          imageProduct: "/images/1.webp",
        },
        {
          id: 3,
          imageProduct: "/images/1.webp",
        },
        {
          id: 4,
          imageProduct: "/images/1.webp",
        },
      ],
    },
    {
      id: 2,
      nameProduct: "dgajdhgjahdgajhd",
      imageProduct: "/images/2.webp",
      link: "",
      price: "13124214đ",
      data: [
        {
          id: 1,
          imageProduct: "/images/1.webp",
        },
        {
          id: 2,
          imageProduct: "/images/1.webp",
        },
        {
          id: 3,
          imageProduct: "/images/1.webp",
        },
        {
          id: 4,
          imageProduct: "/images/1.webp",
        },
      ],
    },
    {
      id: 3,
      nameProduct: "dgajdhgjahdgajhd",
      imageProduct: "/images/3.jpg",
      link: "",
      price: "13124214đ",
      data: [
        {
          id: 1,
          imageProduct: "/images/1.webp",
        },
        {
          id: 2,
          imageProduct: "/images/1.webp",
        },
        {
          id: 3,
          imageProduct: "/images/1.webp",
        },
        {
          id: 4,
          imageProduct: "/images/1.webp",
        },
      ],
    },
    {
      id: 4,
      nameProduct: "dgajdhgjahdgajhd",
      imageProduct: "/images/4.jpg",
      link: "",
      price: "13124214đ",
    },
    {
      id: 5,
      nameProduct: "dgajdhgjahdgajhd",
      imageProduct: "/images/6.webp",
      link: "",
      price: "13124214đ",
      data: [
        {
          id: 1,
          imageProduct: "/images/1.webp",
        },
        {
          id: 2,
          imageProduct: "/images/1.webp",
        },
        {
          id: 3,
          imageProduct: "/images/1.webp",
        },
        {
          id: 4,
          imageProduct: "/images/1.webp",
        },
      ],
    },
    {
      id: 6,
      nameProduct: "dgajdhgjahdgajhd",
      imageProduct: "/images/5.webp",
      link: "",
      price: "13124214đ",
      data: [
        {
          id: 1,
          imageProduct: "/images/1.webp",
        },
        {
          id: 2,
          imageProduct: "/images/1.webp",
        },
        {
          id: 3,
          imageProduct: "/images/1.webp",
        },
        {
          id: 4,
          imageProduct: "/images/1.webp",
        },
      ],
    },
    {
      id: 7,
      nameProduct: "dgajdhgjahdgajhd",
      imageProduct: "/images/5.webp",
      link: "",
      price: "13124214đ",
      data: [
        {
          id: 1,
          imageProduct: "/images/1.webp",
        },
        {
          id: 2,
          imageProduct: "/images/1.webp",
        },
        {
          id: 3,
          imageProduct: "/images/1.webp",
        },
        {
          id: 4,
          imageProduct: "/images/1.webp",
        },
      ],
    },
  ];
  // Tính toán chỉ mục bắt đầu và kết thúc của sản phẩm trên trang hiện tại
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const productsToShow = product.slice(startIndex, endIndex);
  return (
    <div className={styles.list_product}>
      <div className={styles.list_product_header}>
        <span>432 sản phẩm</span>
        <div className={styles.option}>
          <label htmlFor="">Sắp xếp theo</label>
          <select name="" id="">
            <option className={styles.option__item} value="">
              Mặc định
            </option>
            <option value="">Từ A-Z</option>
            <option value="">Từ Z-A</option>
            <option value="">Rẻ nhất</option>
            <option value="">Giá giảm dần</option>
            <option value="">Mới nhất</option>
          </select>
        </div>
      </div>
      <div className={styles.lists}>
        <div className={x.tab_content}>
          <div className="row">
            {productsToShow.map((pro, index) => (
              <div
                key={index}
                className={`col-6 col-md-4 col-lg-4 col-xl-3 ${x.product_content}`}
              >
                <div className={`${x.item_product_main}`}>
                  <div className={x.wrap_product_sold_info}>
                    <div className={x.product_review}>
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ width: 10, color: "#ffd43b" }}
                      />
                      5
                    </div>
                    <span>|</span>
                    <div className={x.product_sold}>
                      Đã bán
                      <span className={x.number_product_sold}>31.7K</span>
                    </div>
                  </div>
                  <Image
                    width={"220px"}
                    preview={false}
                    alt="anh loi"
                    src={pro.imageProduct}
                  />
                  <p>{pro.nameProduct}</p>
                  <span>{pro.price}</span>
                  <Footerproduct data={[]} />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Hiển thị phân trang */}
        <div className={styles.pagination}>
          {Array.from({
            length: Math.ceil(product.length / productsPerPage),
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={currentPage === index + 1 ? styles.active : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Listproduct;
