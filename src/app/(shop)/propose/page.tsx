"use client";
import React from "react";
import { Image } from "antd";
import styles from "./propose.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { useRouter } from "next/navigation";
import Footerproduct from "@/components/footerproduct/footerproduct";
import TitleProductCategory from "@/components/tiltleProductCategory/TitleProductCategory";
function Propose() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/productCategory");
  };
  const title = [
    {
      id: 1,
      title: "Bán Chạy Nhất",
      link: "",
    },
    {
      id: 2,
      title: "Hàng Mới Về",
      link: "",
    },
    {
      id: 3,
      title: "Áo",
      link: "",
    },
    {
      id: 4,
      title: "Quần",
      link: "",
    },
    {
      id: 5,
      title: "Váy Đầm",
      link: "",
    },
    {
      id: 6,
      title: "Đồ Mặc Trong",
      link: "",
    },
    {
      id: 7,
      title: "Phụ Kiện",
      link: "",
    },
  ];
  const product = [
    {
      id: 1,
      nameProduct: "dgajdhgjahdgajhd",
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
  return (
    <div className="container">
      <div className={styles.tab_title__ajax}>
        <h4 className={styles.title_block}>ĐỀ XUẤT CHO BẠN</h4>

        <div className={styles.tab_desktop}>
          <ul className={styles.tab_title}>
            {title.map((item, index) => (
              <li key={index} className={styles.li_title}>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.tab_content}>
        <div className="row">
          {product.map((pro, index) => (
            <div
              key={index}
              className={`col-xl-2 col-lg-3 col-md-3 col-6 ${styles.product_content}`}
            >
              <div className={`${styles.item_product_main}`}>
                <div className={styles.wrap_product_sold_info}>
                  <div className={styles.product_review}>
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{ width: 10, color: "#ffd43b" }}
                    />
                    5
                  </div>
                  <span>|</span>
                  <div className={styles.product_sold}>
                    Đã bán
                    <span className={styles.number_product_sold}>31.7K</span>
                  </div>
                </div>
                <Image
                  width={"100%"}
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
        <div className={styles.more} onClick={handleClick}>
          Xem thêm
        </div>
      </div>
    </div>
  );
}

export default Propose;
