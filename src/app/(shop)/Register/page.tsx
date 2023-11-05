"use client";
import React from "react";
import styles from "./Register.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  return (
    <>
      <Head>
        <title>Trang Đăng Ký - Shop Viet</title>
      </Head>
      <div className={styles.register}>
        <div className={styles.pages_register}>
          <div className={styles.container}>
            <form action="">
              <div className={styles.register_form}>
                <p className={styles.greeting}>
                  Chào mừng bạn đến với Shop Viet!
                </p>
                <h1 className={styles.title_register}>
                  <span className={styles.dang}>ĐĂNG</span>{" "}
                  <span className={styles.ky}>KÝ</span>
                </h1>
                <div className={`${styles.input_register}`}>
                  <input type="text" required placeholder="Họ và tên " />
                </div>
                <div className={`${styles.input_register}`}>
                  <input type="text" required placeholder="Số điện thoại " />
                </div>
                <div className={`${styles.input_register}`}>
                  <input type="email" required placeholder="Địa chỉ email" />
                </div>
                <div className={`${styles.input_register}`}>
                  <input type="password" required placeholder="Mật khẩu" />
                </div>
                <button type="submit" className={styles.btn_register}>
                  Đăng ký
                </button>
                <label className={styles.other}>Hoặc đăng ký bằng</label>
                <div className={styles.btn_other_register}>
                  <div className={`${styles.google}`}>
                    <Image
                      alt="icon-gg"
                      src={"/images/icon_gg.png"}
                      width={48}
                      height={48}
                    />
                    Google
                  </div>
                  <div className={`${styles.facebook}`}>
                    <Image
                      alt="icon-gg"
                      src={"/images/Facebook_Logo.png"}
                      width={35}
                      height={35}
                    />
                    Facebook
                  </div>
                </div>
                <div className={`${styles.login}`}>
                  <p>
                    Bạn đã có tài khoản?{" "}
                    <span onClick={handleLogin}>Đăng nhập ngay!</span>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
