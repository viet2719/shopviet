import React, { useState } from "react";
import styles from "./menuslide.module.scss";
import { Image } from "antd";
import { male, female, children } from "./data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { useRouter } from "next/navigation";

function Menuslide() {
  const router = useRouter();
  const [activeItem, setActiveItem] = useState("male");
  const [startIndex, setStartIndex] = useState(0);
  let id = 8;
  const handleItemClick = (item: any) => {
    setActiveItem(item);
    setStartIndex(0); // Reset the start index when changing categories
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + id);
  };

  const handlePrevClick = () => {
    if (startIndex >= id) {
      setStartIndex(startIndex - id);
    }
  };

  const getRenderedContent = () => {
    const itemsToDisplay =
      activeItem === "male"
        ? male
        : activeItem === "female"
        ? female
        : children;
    const visibleItems = itemsToDisplay.slice(startIndex, startIndex + id);

    return (
      <div className={styles.menu}>
        <div className={styles.item_menu_list}>
          <button
            className={`${styles.btn_next_prev} ${styles.prev}`}
            onClick={handlePrevClick}
            disabled={startIndex === 0}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          {visibleItems.map((item, index) => (
            <div
              key={index}
              className={styles.item}
              onClick={() => {
                router.push("/productCategory");
              }}
            >
              <div>
                <Image
                  width={90}
                  alt="anh-loi"
                  preview={false}
                  src={item.image}
                />
              </div>
              <p>{item.title}</p>
            </div>
          ))}
          <button
            onClick={handleNextClick}
            disabled={startIndex + id >= male.length}
            className={`${styles.btn_next_prev} ${styles.next}`}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className={`${styles.menu_list} `}>
        <div
          className={`${styles.menu_list_content} ${
            styles.menu_list_content_male
          } ${activeItem === "male" ? styles.active : ""}`}
          onClick={() => handleItemClick("male")}
        >
          NAM
        </div>
        <div
          className={`${styles.menu_list_content} ${
            styles.menu_list_content_female
          } ${activeItem === "female" ? styles.active : ""}`}
          onClick={() => handleItemClick("female")}
        >
          NỮ
        </div>
        <div
          className={`${styles.menu_list_content} ${
            styles.menu_list_content_children
          } ${activeItem === "children" ? styles.active : ""}`}
          onClick={() => handleItemClick("children")}
        >
          TRẺ EM
        </div>
      </div>

      <div>{getRenderedContent()}</div>
    </div>
  );
}

export default Menuslide;
