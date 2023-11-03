import React from "react";
import { Image } from "antd";
import styles from "./bosuutap.module.scss";
import Menuslide from "../menuslide/menuslide";
function Bosuutap() {
  const bst = [
    {
      id: 1,
      src: "/images/slider_2.webp",
    },
    {
      id: 2,
      src: "/images/slider_4.webp",
    },
    {
      id: 3,
      src: "/images/1920x600-3.webp",
    },
  ];
  return (
    <div>
      <div className={styles.section_promotion}>
        <div className={styles.gr_promotion}>
          <div className={styles.item_promotion}>
            <div>
              <div className={styles.img_box_shadow}>
                <Image
                  preview={false}
                  alt="anh-loi"
                  src={"/images/home_khuyenmai_1_image.png"}
                />
              </div>
              <div>Freeship cho đơn hàng từ 200K</div>
            </div>
          </div>
          <div className={styles.item_promotion}>
            <div>
              <div className={styles.img_box_shadow}>
                <Image
                  preview={false}
                  alt="anh-loi"
                  src={"/images/home_khuyenmai_2_image.png"}
                />
              </div>
              <div>Tổng hợp khuyến mãi</div>
            </div>
          </div>
          <div className={styles.item_promotion}>
            <div>
              <div className={styles.img_box_shadow}>
                <Image
                  preview={false}
                  alt="anh-loi"
                  src={"/images/home_khuyenmai_3_image.webp"}
                />
              </div>
              <div>Giảm 33K sản phẩm nguyên giá</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.text_bst}>
        <p className={styles.text}>BỘ SƯU TẬP</p>
      </div>
      <div className={styles.bosuutap}>
        {bst.map((img, index) => (
          <div key={index} className={styles.img_bst}>
            <Image
              height={200}
              src={img.src}
              alt="bộ sưu tập"
              preview={false}
            />
          </div>
        ))}
      </div>
      <Menuslide />
    </div>
  );
}

export default Bosuutap;
