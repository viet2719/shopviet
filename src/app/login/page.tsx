"use client";
import React from "react";
import Image from "next/image";
import styles from "./login.module.scss";
import { useRouter } from "next/navigation";
function Login() {
  const router = useRouter();
  const handleRegister = () => {
    router.push("/Register");
  };
  return (
    <>
      <div className={styles.bg_video}>
        <section className={styles.section}>
          <div className={styles.box}>
            <div className={styles.form_value}>
              <form action="">
                <h2>ĐĂNG NHẬP</h2>
                <div className={styles.input_field}>
                  <input type="text" required />
                  <label htmlFor="">Email</label>
                </div>
                <div className={styles.input_field}>
                  <input type="password" required />
                  <label htmlFor="">Password</label>
                </div>
                <div className={styles.forget}>
                  <label htmlFor="checkpass" style={{ cursor: "pointer" }}>
                    <input
                      style={{ cursor: "pointer" }}
                      type="checkbox"
                      id="checkpass"
                    />
                    Nhớ mật khẩu
                  </label>
                  <span style={{ cursor: "pointer" }}>Quên mật khẩu</span>
                </div>
                <button className={styles.button}>Đăng Nhập</button>
                <div className={styles.register}>
                  <p>
                    Bạn chưa có tài khoản?
                    <span onClick={handleRegister}>Đăng ký ngay!</span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Login;
