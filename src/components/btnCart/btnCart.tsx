import React from "react";
import styles from "./btnCart.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons/faBagShopping";
import { useRouter } from "next/navigation";
import { Badge, Image } from "antd";

function BtnCart() {
  const router = useRouter();
  const handleCart = () => {
    router.push("/cart");
  };
  return (
    <div className={styles.popup}>
      <div className={styles.cart} onClick={handleCart}>
        <Badge size="small" count={5}>
          <FontAwesomeIcon
            style={{ width: 28, height: 24.5 }}
            icon={faBagShopping}
          />
        </Badge>
        GIỎ HÀNG
      </div>
      <div className={styles.top_cart_content}>
        <div className={styles.CartHeaderContainer}>
          <div className={styles.cart__empty_message}>
            <Image src={"/icon/blank_cart.svg"} alt="cart" preview={false} />
            <div style={{ fontWeight: "normal" }}>Giỏ hàng của bạn trống</div>
            <div className={styles.account}>
              <p
                onClick={() => {
                  router.push("/login");
                }}
              >
                Đăng ký/Đăng nhập
              </p>
            </div>
            <div className={styles.buy__now}>Mua ngay</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BtnCart;
