"use client";
import React from "react";
import styles from "./hethongcuahang.module.scss";
import { Input, Select } from "antd";
export default function Hethongcuahang() {
  const store = [
    {
      id: 1,
      title: "Cửa hàng",
      counter: 2,
    },
    {
      id: 2,
      title: "Nhà máy may",
      counter: 2,
    },
    {
      id: 3,
      title: "Tỉnh thành",
      counter: 2,
    },
    {
      id: 4,
      title: "Văn phòng",
      counter: 2,
    },
    {
      id: 5,
      title: "Nhân sự SHOPVIET",
      counter: 2,
    },
  ];
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log("search:", value);
  };

  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  return (
    <div className="container">
      <div className={`${styles.row} `}>
        {store.map((stores, index) => (
          <div className="col-lg-2 col-6" key={index}>
            <div className={`${styles.item} ${styles["item_" + stores.id]}`}>
              <span>{stores.title}</span>
              <b>
                <span className={`${styles.counter}`}>{stores.counter}</span>
              </b>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.map_list}>
        <div className={styles.map} id="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d4236.6013066209935!2d106.03166272558352!3d20.082731640424615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjDCsDA1JzAwLjgiTiAxMDbCsDAxJzUxLjAiRQ!5e0!3m2!1svi!2s!4v1699414347877!5m2!1svi!2s"
            width="811.66"
            height="616"
            style={{ border: 0 }}
            // allowfullscreen=
            loading="lazy"
            // referrerpolicy={no-referrer-when-downgrade}
          ></iframe>
        </div>
        <div className={styles.list_add}>
          <div className={styles.title}>
            <div className={styles.city}>
              <p>Tỉnh / Thành</p>
              <Select
                showSearch
                placeholder="Tất cả tỉnh, thành phố"
                optionFilterProp="children"
                onChange={onChange}
                onSearch={onSearch}
                filterOption={filterOption}
                options={[
                  {
                    value: "jack",
                    label: "Jack",
                  },
                ]}
              />
            </div>
            <div className={styles.search}>
              <p>Nhập tên cửa hàng</p>
              <Input placeholder="Tìm kiếm cửa hàng" />
            </div>
          </div>
          <div className={styles.list_store}>
            <ul className={styles.list_store_item}>
              <li className={`${styles.item} ${styles.checked}`}>
                <b>SHOPVIET Hoàng Mai</b>
                <p>số 6 ngõ 236 đại từ hoàng mai hà nội</p>
                <span>0869047103</span>
                <span>Chỉ đường</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
