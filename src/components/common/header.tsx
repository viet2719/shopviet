"use client";

import styles from "@/styles/common/header.module.scss";
import { Input, Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { listdanhmuc } from "./listDanhmuc";
import { useRouter } from "next/navigation";
function BasicExample() {
  const router = useRouter();
  const handleLogin = () => {
    router.push("/login");
  };
  const handleRegister = () => {
    router.push("/Register");
  };
  const handlepropose = () => {
    router.push("/propose");
  };

  return (
    <div className={styles.header}>
      <div className={`container }`}>
        <div className={styles.header_top}>
          <div onClick={() => router.push("/")} className={styles.title_logo}>
            SHOPVIET
          </div>
          <div className={styles.fillter}>
            <Input suffix={<SearchOutlined />} placeholder="Tìm kiếm" />
          </div>

          <div className={styles.location}>
            <Image
              preview={false}
              alt="phanh"
              src={"/icon/map_tb.svg"}
              width={16}
              height={16}
            />
            <p>Tìm cửa hàng</p>
          </div>
          <div className={styles.contact}>
            <div className={styles.contact_me}>
              <Image
                preview={false}
                alt="phanh"
                src={"/icon/call_tb.svg"}
                width={16}
                height={16}
              />
              <span className={styles.phone_number}>0869047103</span>
              <span className={styles.sup_free}>Free</span>
            </div>

            <div className={styles.order_call}>
              <span>- Đặt hàng gọi</span>
              <Image
                preview={false}
                alt="phanh"
                src={"/icon/call_tb.svg"}
                width={16}
                height={16}
              />
              <span className={styles.phone_number}> 0869047103</span>
            </div>
          </div>
        </div>

        {/* -----------------------navigation--------------------- */}
      </div>
      <div className={`${styles.header_bottom} container`}>
        <div className={styles.topbar_bottom_left}>
          {listdanhmuc.map((listItem, index) => (
            <div className={styles.danhmuc} key={index}>
              <h5 className={styles.itemTitle} onClick={handlepropose}>
                {listItem.itemTitle}
              </h5>
              <div className={styles.listdanhmuc}>
                <ul className={styles.list}>
                  {listItem.subItem.map((listSubItem, index) => (
                    <div className={styles.row} key={index}>
                      <li style={{ cursor: "pointer" }}>
                        {listSubItem.subTitle}
                      </li>
                      <ul>
                        {listSubItem.item.map((items) => (
                          <li style={{ cursor: "pointer" }} key={index}>
                            {items.item_type}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.topbar_bottom_right}>
          <div className={styles.cart}>GIỎ HÀNG</div>
          <div className={styles.user}>
            <div className={styles.logandsing} onClick={handleRegister}>
              ĐĂNG KÝ{" "}
            </div>
            <span>/</span>
            <div className={styles.logandsing} onClick={handleLogin}>
              ĐĂNG NHẬP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicExample;
