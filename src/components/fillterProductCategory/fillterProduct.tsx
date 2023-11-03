"use client";
import React, { useState } from "react";
import styles from "./fillterProduct.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons/faChevronUp";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons/faArrowDown";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons/faArrowUp";
function FillterProduct() {
  const loai = [
    { id: 1, name: "đdfgdgfa" },
    { id: 2, name: "dfgdfgá" },
    { id: 3, name: "ággdfgda" },
    { id: 4, name: "ágdfd" },
    { id: 5, name: "ádgdfgdas" },
  ];
  const [showmore, setShowmore] = useState(false);
  const handleShowmore = () => {
    // setShowmore(!showmore);
    setShowAll(!showAll);
  };
  const [showAll, setShowAll] = useState(true);
  const [updown, setUpdown] = useState(false);
  const [size, setSize] = useState(true);
  const [color, setColor] = useState(true);
  const [price, setPrice] = useState(true);
  const [adap, setAdap] = useState(true);
  return (
    <div className={styles.fillter_container}>
      {/* header db none */}
      <div className={styles.fillter_container__selected_fillter}>
        <div className={styles.selected_header}>
          <span className={styles.selected_header_title}>Bạn chọn</span>
          <span className={styles.clear_all}>Bỏ hết</span>
        </div>
        <div className={styles.selected_content}>
          <ul>
            <li className={styles.selected_fillter_item}>
              <FontAwesomeIcon icon={faXmark} style={{ color: "#FFF" }} />
              sdfsdf
            </li>
          </ul>
        </div>
      </div>
      {/* header db none - end */}
      <aside className={`${styles.aside_item}`}>
        <div className={`${styles.aside_item_header}`}>
          <span className={styles.selected_header_title}>Loại sản phẩm</span>
          <div onClick={handleShowmore}>
            {showAll ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        {showAll && (
          <div className={styles.aside_item_content}>
            <div className={styles.list_item}>
              {loai.map((item, index) => (
                <span key={index} className={styles.item}>
                  {item.name}
                </span>
              ))}
            </div>

            <div
              onClick={() => {
                setUpdown(!updown);
              }}
              className={styles.showmore}
            >
              <span>
                Xem thêm
                <FontAwesomeIcon
                  icon={faArrowDown}
                  style={{ color: "#fcaf17" }}
                />
              </span>

              <span>
                Thu gọn
                <FontAwesomeIcon
                  icon={faArrowUp}
                  style={{ color: "#fcaf17" }}
                />
              </span>
            </div>
          </div>
        )}
      </aside>
      <aside className={`${styles.aside_item}`}>
        <div className={`${styles.aside_item_header}`}>
          <span className={styles.selected_header_title}>Kích thước</span>
          <div
            onClick={() => {
              setSize(!size);
            }}
          >
            {size ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={styles.aside_item_content}>
          {size ? (
            <div className={styles.list_item}>
              {loai.map((item, index) => (
                <span key={index} className={styles.item}>
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </aside>
      <aside className={`${styles.aside_item}`}>
        <div className={`${styles.aside_item_header}`}>
          <span className={styles.selected_header_title}>Màu sắc</span>
          <div
            onClick={() => {
              setColor(!color);
            }}
          >
            {color ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={styles.aside_item_content}>
          {color ? (
            <div className={styles.list_item}>
              {loai.map((item, index) => (
                <span key={index} className={styles.item}>
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </aside>
      <aside className={`${styles.aside_item}`}>
        <div className={`${styles.aside_item_header}`}>
          <span className={styles.selected_header_title}>Khoảng giá(VNĐ)</span>
          <div
            onClick={() => {
              setPrice(!price);
            }}
          >
            {price ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={styles.aside_item_content}>
          {price ? (
            <div className={styles.list_item}>
              {loai.map((item, index) => (
                <span key={index} className={styles.item}>
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </aside>
      <aside className={`${styles.aside_item}`}>
        <div className={`${styles.aside_item_header}`}>
          <span className={styles.selected_header_title}>Chất liệu</span>
          <div
            onClick={() => {
              setAdap(!adap);
            }}
          >
            {adap ? (
              <FontAwesomeIcon icon={faChevronUp} />
            ) : (
              <FontAwesomeIcon icon={faChevronDown} />
            )}
          </div>
        </div>
        <div className={styles.aside_item_content}>
          {adap ? (
            <div className={styles.list_item}>
              {loai.map((item, index) => (
                <span key={index} className={styles.item}>
                  {item.name}
                </span>
              ))}
            </div>
          ) : null}
        </div>
      </aside>
    </div>
  );
}

export default FillterProduct;
