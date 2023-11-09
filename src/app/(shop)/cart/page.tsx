"use client";
import React from "react";
import styles from "./cart.module.scss";
import TableCart from "@/components/Table_cart_product/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShield } from "@fortawesome/free-solid-svg-icons/faShield";
import x from "../chitietsanpham/chitietsanpham.module.scss";
import { faTags } from "@fortawesome/free-solid-svg-icons/faTags";
import { faUserShield } from "@fortawesome/free-solid-svg-icons/faUserShield";
import { faTruck } from "@fortawesome/free-solid-svg-icons/faTruck";
import { faClock } from "@fortawesome/free-solid-svg-icons/faClock";
import { faRepeat } from "@fortawesome/free-solid-svg-icons/faRepeat";
import { useRouter } from "next/navigation";
export default function Cart() {
  const router = useRouter();
  return (
    <div className={styles.wrap_background_aside}>
      <div className="container">
        <div className={styles.cart_page}>
          <div className={styles.drawer__inner}>
            <div className={styles.CartPageContainer}>
              <form action="" method="POST" className={styles.cart}>
                <div className={styles.row}>
                  {/* left */}
                  <div className={`col-12 col-xl-8 ${styles.order_1} `}>
                    <div className={styles.ajaxcart__inner}>
                      <p className={styles.title}>
                        <span className={styles.text_uppercase}>GIỎ HÀNG</span>
                        <span className={styles.total_cart}>(1) Sản phẩm</span>
                      </p>
                      <div className="divider"></div>
                      <div className={styles.buymore_notification_wrapper}>
                        <div className={styles.message_normal}>
                          Mua thêm 100.000đ để nhận quà tặng từ YODY
                        </div>
                        <div className={styles.message_note}>
                          * CTKM áp dụng với hóa đơn nguyên giá
                        </div>
                      </div>
                      <div className="divider"></div>
                      <div>
                        <TableCart />
                      </div>
                    </div>
                  </div>
                  {/* right */}
                  <div
                    className={`col-12 col-xl-4 ${styles.ajaxcart__wrap_footer} `}
                  >
                    <div className={styles.ajaxcart__footer}>
                      <div className={styles.update_checkout}>
                        <div className={styles.ajaxcart__subtotal}>
                          <div className={styles.cart__subtotal}>
                            <div className={styles.cart__col_6}>
                              Tổng đơn hàng (tạm tính):
                            </div>
                            <div
                              className={`${styles.text_right} ${styles.cart__totle}`}
                            >
                              <span className={styles.total_price}>
                                299.000đ
                              </span>
                            </div>
                          </div>
                          <div
                            className={styles.cart__btn_proceed_checkout}
                            onClick={() => {
                              router.push("/checkout");
                            }}
                          >
                            <FontAwesomeIcon icon={faShield} />
                            Thanh toán ngay
                          </div>
                          <div className={x.payment_policy_wrapper}>
                            <div className={x.pdp_thong_tin}>
                              <div className={x.icon}>
                                <FontAwesomeIcon icon={faTags} />
                                Sử dụng mã giảm giá ở bước thanh toán
                              </div>
                              <div className={x.icon}>
                                <FontAwesomeIcon icon={faUserShield} />
                                Thông tin bảo mật và mã hoá
                              </div>
                              <div className={x.icon}>
                                <FontAwesomeIcon icon={faTruck} />
                                Miễn phí vận chuyển: đơn hàng 200k
                              </div>
                              <div className={x.icon}>
                                <FontAwesomeIcon icon={faClock} />
                                Giao hàng: Từ 1 - 3 ngày
                              </div>
                              <div className={x.icon}>
                                <FontAwesomeIcon icon={faRepeat} />
                                Miễn phí đổi trả: tại cửa hàng trong 15 ngày
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
