"use client";
import React, { useState } from "react";
import styles from "./checkout.module.scss";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons/faCircleUser";
import { Checkbox, Input, Radio, Select, Space } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import type { RadioChangeEvent } from "antd";
import Donhang from "@/components/donhang/donhang";
function Checkout() {
  const [receivingInformation, setReceivingInformation] = useState(false);
  const [cod, setCod] = useState(false);
  const handleClickCod = () => {
    setCod(true);
  };
  const onChange1 = (value: string) => {};
  const onSearch = (value: string) => {};
  const [value, setValue] = useState();
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  // Filter `option.label` match the user type `input`
  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
  const onChange2 = (e: CheckboxChangeEvent) => {};
  return (
    <div className={`${styles.wrap} container`}>
      <main className={styles.main}>
        <header className={styles.main__header}>
          <h4 className={styles.logo}>SHOPVIET</h4>
        </header>
        <div className={styles.main_content}>
          <article className={styles.animate_floating_labels}>
            <div className={styles.col_two}>
              <section className={styles.section}>
                <div className={styles.section_header}>
                  <div className={styles.layout_flex}>
                    <span className={styles.text_layout_flex}>
                      Thông tin giao hàng
                    </span>
                    <Link
                      href={"/login"}
                      style={{
                        textDecoration: "none",
                        color: "#fcaf17",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 5,
                        }}
                      >
                        <FontAwesomeIcon
                          style={{
                            width: "18.68px",
                          }}
                          icon={faCircleUser}
                        />
                        Đăng nhập
                      </div>
                    </Link>
                  </div>
                  <Input placeholder="Họ và tên" />
                  <Input placeholder="Số điện thoại" />
                  <Input placeholder="Địa chỉ" />
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Tỉnh thành"
                    optionFilterProp="children"
                    onChange={onChange1}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Quận huyện"
                    optionFilterProp="children"
                    onChange={onChange1}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Phường xã"
                    optionFilterProp="children"
                    onChange={onChange1}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                </div>
              </section>
              <div className={styles.checkbox_shipping_address}>
                <Checkbox
                  onChange={onChange2}
                  onClick={() => {
                    setReceivingInformation(!receivingInformation);
                  }}
                >
                  Giao hàng đến địa chỉ khác
                </Checkbox>
              </div>

              {receivingInformation && (
                <section className={styles.shipping_address}>
                  <Input placeholder="Họ và tên" />
                  <Input placeholder="Số điện thoại" />
                  <Input placeholder="Địa chỉ" />
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Tỉnh thành"
                    optionFilterProp="children"
                    onChange={onChange1}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Quận huyện"
                    optionFilterProp="children"
                    onChange={onChange1}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                  <Select
                    style={{ width: "100%" }}
                    showSearch
                    placeholder="Phường xã"
                    optionFilterProp="children"
                    onChange={onChange1}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    options={[
                      {
                        value: "jack",
                        label: "Jack",
                      },
                      {
                        value: "lucy",
                        label: "Lucy",
                      },
                      {
                        value: "tom",
                        label: "Tom",
                      },
                    ]}
                  />
                </section>
              )}

              <textarea
                className={styles.textarea_note}
                name=""
                id=""
                placeholder="Ghi chú (tùy chọn)"
              ></textarea>
            </div>
            <div className={styles.col_two}>
              <section className={styles.section}>
                <div className={styles.section_header}>
                  <span className={styles.text_layout_flex}>Vận chuyển</span>
                </div>
                <div className={styles.section_content}>
                  <p>Vui lòng nhập thông tin giao hàng</p>
                </div>
              </section>
              <section className={styles.section}>
                <div className={styles.section_header}>
                  <span className={styles.text_layout_flex}>Thanh toán</span>
                </div>
                <div className={styles.section_content}>
                  <div className={styles.content_box}>
                    <div className={styles.content_box__row}>
                      <Radio.Group onChange={onChange} value={value}>
                        <Space direction="vertical">
                          <Radio value={1}>Thanh toán qua VNPAY</Radio>
                          <Radio value={2}>Thanh toán qua Ví MoMo</Radio>
                          <Radio value={3} onClick={handleClickCod}>
                            Thanh toán khi nhận hàng (COD)
                          </Radio>
                        </Space>
                      </Radio.Group>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>
      <aside className={styles.sidebar}>
        <div>
          <Donhang />
        </div>
      </aside>
    </div>
  );
}

export default Checkout;
