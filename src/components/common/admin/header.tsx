import React from "react";
import styles from "./header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons/faShop";
function Header() {
  return (
    <div>
      <div className={styles.logo_admin}>
        <FontAwesomeIcon style={{ width: 40, height: 44 }} icon={faShop} />
        SHOPVIETdfsdfadfasdf
      </div>
      <div className={styles.logo_admin_right}></div>
    </div>
  );
}

export default Header;
