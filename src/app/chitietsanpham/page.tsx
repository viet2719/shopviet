"use client";
import React, { useState } from "react";
import styles from "./chitietsanpham.module.scss";
import { Rate, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { faPlus } from "@fortawesome/free-solid-svg-icons/faPlus";
import { faMinus } from "@fortawesome/free-solid-svg-icons/faMinus";
import { faTags } from "@fortawesome/free-solid-svg-icons/faTags";
import { faUserShield } from "@fortawesome/free-solid-svg-icons/faUserShield";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";
import { faRepeat } from "@fortawesome/free-solid-svg-icons/faRepeat";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
function Chitietsanpham() {
  const [quantity, setQuantity] = useState(1);
  const handleReduce = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };
  return (
    <div className={`container ${styles.mb_20}`}>
      <div>
        <h4>Áo khoác nữ</h4> / <span>Áo Khoác Phao Nữ Siêu Nhẹ Siêu Ấm</span>
      </div>
      <div className="product-grid">
        <div className="product-grid-item-image">
          <div>image</div>
          <div className="divider"></div>
          {/* mo tả sản phẩm */}
          <div>
            <div>
              <div className={styles.property_outstanding}>
                Đặc tính nổi bật
              </div>
            </div>
            <div>
              <div className={styles.accordion_panel}>
                <div className={styles.accordion_content}>
                  <div className={styles.box_km}>
                    <div className={styles.box_promotion}>
                      <p>dsjfghdf</p>
                      <p>sfgjkhdfsgjdkfg</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-grid-item-info details-pro">
          <div className={styles.box_divider}>
            <h4 className={styles.name_product}>
              Áo Khoác Phao Nữ Siêu Nhẹ Siêu Ấm
            </h4>
            <div className={styles.product_top}>
              <span className={styles.product_id}>Mã sản phẩm</span>|
              <span className={styles.product_sold}>Số lượng đã bán</span>
              <div className={styles.product_review}>
                <Rate />
              </div>
            </div>
            <div className={styles.price}>
              <span>giá sản phảm</span>
            </div>
          </div>
          <div>màu săc sản phẩm</div>
          <div>
            {/* ảnh các sản phẩm */}
            <Image alt="anh-loi" preview={false} />
          </div>
          <div>{/* kích thước */}S</div>
          <div className={styles.quantity}>
            {/* số lượng */}

            <button
              className={styles.reduce}
              onClick={handleReduce}
              disabled={quantity === 1}
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <div className={styles.num_quantity}>{quantity}</div>
            <button className={styles.increase} onClick={handleIncrease}>
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
          <div className={styles.btn_buy_item}>
            <button className={styles.add_cart}>
              <FontAwesomeIcon icon={faCartShopping} />
              Thêm vào giỏ hàng
            </button>
            <button className={styles.buy_now}>Mua ngay</button>
          </div>
          {/* mô tả mua hàng */}
          <div className={styles.payment_policy_wrapper}>
            <div className={styles.pdp_thong_tin}>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faTags} />
                Sử dụng mã giảm giá ở bước thanh toán
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faUserShield} />
                Thông tin bảo mật và mã hoá
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faTruck} />
                Miễn phí vận chuyển: đơn hàng 200k
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faClock} />
                Giao hàng: Từ 1 - 3 ngày
              </div>
              <div className={styles.icon}>
                <FontAwesomeIcon icon={faRepeat} />
                Miễn phí đổi trả: tại cửa hàng trong 15 ngày
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chitietsanpham;
