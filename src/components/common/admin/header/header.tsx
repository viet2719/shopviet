"use client";
import React, { useState } from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons/faShop";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons/faAnglesRight";
function Header() {
  const [sidebar, setSidebar] = useState(false);
  const handleClickSidebar = () => {
    setSidebar(!sidebar);
  };
  return (
    <div className={styles.he}>
      <div className={styles.header_admin}>
        <div className={styles.logo_admin}>
          <FontAwesomeIcon style={{ width: 40, height: 44 }} icon={faShop} />
          SHOPVIET
        </div>
        <div className={styles.logo_admin_right}>
          <div onClick={handleClickSidebar}>
            {sidebar ? (
              <FontAwesomeIcon icon={faBars} style={{ width: 50 }} />
            ) : (
              <FontAwesomeIcon icon={faAnglesRight} style={{ width: 50 }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
