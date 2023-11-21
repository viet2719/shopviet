"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import styles from "./siderbar.module.scss";
import { useRouter } from "next/navigation";
interface SiderBarProps {
  children: React.ReactNode;
  updateSiderBarData: (data: any) => void;
}

const SiderBar: React.FC<SiderBarProps> = ({
  children,
  updateSiderBarData,
}) => {
  const [activeItem, setActiveItem] = useState<number | null>(1);
  const router = useRouter();

  const handleSiderBarItemClick = (data: any) => {
    updateSiderBarData(data);
  };
  const listsiderbar = [
    {
      id: 1,
      title: "Dashboard",
      link: "/Dashboard",
    },
    {
      id: 2,
      title: "Danh mục sản phẩm",
      link: "/danhmucsanpham",
    },
    {
      id: 3,
      title: "Hóa đơn",
      link: "/hoadon",
    },
    {
      id: 4,
      title: "Quản lý sản phẩm",
      link: "/quanlysanpham",
    },
    {
      id: 5,
      title: "Thống kê đơn hàng",
      link: "thongkedonhang",
    },
    {
      id: 6,
      title: "Quản lý tài khoản",
      link: "quanlytaikhoan",
    },
  ];
  useEffect(() => {
    // Thiết lập mục mặc định khi component được tải lần đầu
    handleSiderBarItemClick({ title: listsiderbar[0].title });
    router.push(listsiderbar[0].link);
  }, []); // Mảng phụ thuộc trống đảm bảo rằng effect chỉ chạy một lần khi mount

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.navbar_sider}`}>
        <ul>
          {listsiderbar.map((item, index) => (
            <div key={index}>
              <li
                className={activeItem === item.id ? styles.active : ""}
                onClick={() => {
                  setActiveItem(item.id);
                  handleSiderBarItemClick({ title: item.title });
                  router.push(item.link);
                }}
              >
                {item.title}
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className={`${styles.page_wrapper}`}>
        <div className={`${styles.page_inner}`}>{children}</div>
      </div>
    </div>
  );
};
export default SiderBar;
