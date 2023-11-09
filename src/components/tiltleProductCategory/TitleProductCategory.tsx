"use client";
import React, { useState } from "react";
import styles from "./TitleProductCategory.module.scss";
function TitleProductCategory() {
  const [activeTab, setActiveTab] = useState(0);
  const gender = [
    {
      id: 1,
      title: "NỮ",
    },
    {
      id: 2,
      title: "NAM",
    },
    {
      id: 3,
      title: "TRẺ EM",
    },
  ];
  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };
  return (
    <div style={{ width: "100%" }}>
      <div>
        <div className={styles.breadcrumb}>
          <span className={styles.item_1}>NỮ</span>
          <span>/</span>
          <span className={styles.item_2}>Áo Nữ</span>
        </div>
        <div className={styles.last}>
          <h4>ÁO THUN - ÁO PHÔNG NỮ</h4>
        </div>
      </div>
      <div>
        <div className={styles.tabs_title}>
          {gender.map((item, index) => (
            <ul key={index}>
              <li
                className={`${styles.tab_link} ${
                  activeTab === item.id ? styles.active : ""
                }`}
                onClick={() => handleTabClick(item.id)}
              >
                {" "}
                {item.title}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TitleProductCategory;
