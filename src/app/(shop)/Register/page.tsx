"use client";
import React, { useState } from "react";
import styles from "./Register.module.scss";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Register() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };

  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const handleSubmit = async (e: any) => {
    fetch("http://localhost:8000/api/auth/signUp", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName, email, password, confirmPassword }),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  return (
    <>
      <Head>
        <title>Trang Đăng Ký - Shop Viet</title>
      </Head>
      <div className={styles.register}>
        <div className={styles.pages_register}>
          <div className={styles.container}>
            <form>
              <div className={styles.register_form}>
                <p className={styles.greeting}>
                  Chào mừng bạn đến với Shop Viet!
                </p>
                <h1 className={styles.title_register}>
                  <span className={styles.dang}>ĐĂNG</span>{" "}
                  <span className={styles.ky}>KÝ</span>
                </h1>
                <div className={`${styles.input_register}`}>
                  <input
                    type="text"
                    name="userName"
                    required
                    placeholder="Tên đăng nhập"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>

                <div className={`${styles.input_register}`}>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className={`${styles.input_register}`}>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className={`${styles.input_register}`}>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="Nhập lại mật khẩu"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <button
                  // type="submit"
                  onClick={handleSubmit}
                  className={styles.btn_register}
                >
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
