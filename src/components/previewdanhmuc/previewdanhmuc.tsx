import { Image } from "antd";
import React, { useState } from "react";
import styles from "./previewdanhmuc.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import Footerproduct from "../footerproduct/footerproduct";
import { useRouter } from "next/navigation";
function Previewdanhmuc() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const itemsPerPage = 4;
  const totalItems = product.length;

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsPerPage) % totalItems);
  };
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0
        ? totalItems - itemsPerPage
        : prevIndex - itemsPerPage
    );
  };
  const visibleProducts = product.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  return (
    <div className={styles.previewdanhmuc}>
      <div>
        <div>
          <div className={`${styles.header_content_preview}`}>
            <h4 className={`${styles.header_content_preview_item}`}>
              Sản phẩm bán chạy nhất
            </h4>
            <div className={`${styles.header_content_preview_item}`}>
              Xem thêm
              <Image
                preview={false}
                alt="anh loi"
                src={"/icon/arrow-show-more.svg"}
              />
            </div>
          </div>
          <div className={`${styles.content_preview}`}>
            <div className={styles.slider}>
              <div className="slideshow-container">
                <div className={styles.mySlides}>
                  {/* btn prev =>*/}
                  <button
                    className={styles.swiper_button_prev}
                    onClick={handlePrevClick}
                    disabled={currentIndex === 0}
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>
                  {/* <= btn prev */}
                  {visibleProducts.map((pro, index) => (
                    <div key={index} className={`${styles.product} fapro`}>
                      <div className={styles.product_item}>
                        <Image
                          className="imgpro"
                          src={pro.imageProduct}
                          width={220}
                          alt="mat roi"
                          preview={false}
                          onClick={() => {
                            router.push("/chitietsanpham");
                          }}
                        />
                        <p
                          className={styles.name_product}
                          onClick={() => {
                            router.push("/chitietsanpham");
                          }}
                        >
                          {pro.nameProduct}
                        </p>
                        <span className={styles.price}>{pro.price}</span>

                        <div className={`${styles.list_product} `}>
                          {pro.data && <Footerproduct data={pro.data} />}
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* btn next => */}
                  <button
                    className={styles.swiper_button_next}
                    onClick={handleNextClick}
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>
                  {/* <= btn next  */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Previewdanhmuc;
