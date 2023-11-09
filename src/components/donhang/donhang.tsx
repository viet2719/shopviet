import React from "react";
import styles from "./donhang.module.scss";
import { Badge, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { useRouter } from "next/navigation";
function Donhang() {
  const router = useRouter();
  return (
    <div>
      <div className={styles.sidebar__header}>
        <h2 className={styles.sidebar__title}>Đơn hàng (2 sản phẩm)</h2>
      </div>
      <div className={styles.sidebar__content}>
        <div className={styles.order_summary}>
          <div className={styles.order_summary__sections}>
            <div className={styles.order_summary__section__product_list}>
              <div>
                <Badge count={5}>
                  <Image
                    width={50}
                    height={50}
                    alt="anh loi"
                    src="/images/slider_2.webp"
                    preview={false}
                  />
                </Badge>
              </div>
              <div>
                <span>tên sản phẩm</span>
                <div>
                  <span>Màu</span>/<span>kích thước</span>
                </div>
              </div>
              <div className={styles.priice}>giá sản phẩm</div>
            </div>
            <div className={styles.field}>
              <div className={styles.field__input_btn_wrapper}>
                <input
                  className={styles.field__input}
                  type="text"
                  placeholder="Nhập mã giảm giá"
                />
                <button className={styles.field__input_btn}>Áp dụng</button>
              </div>
            </div>
            <div className="divider"></div>
            <div className={styles.total_money}>
              <div className={styles.money}>
                <span>Tạm tính</span>
                <span>
                  4444 <sup>đ</sup>
                </span>
              </div>
              <div className={styles.money}>
                <span>Phí vận chuyển</span>
                <span>-</span>
              </div>
              <div className="divider"></div>
              <div className={styles.total}>
                <span>Tổng tiền</span>
                <span>5672436523465723</span>
              </div>
              <div className={styles.order_block}>
                <span
                  className={styles.back}
                  onClick={() => {
                    router.push("/cart");
                  }}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                  Quay về giỏ hàng
                </span>
                <button className={styles.order}>Đặt hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donhang;
