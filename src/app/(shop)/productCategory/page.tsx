import React from "react";
import styles from "./ProductCategory.module.scss";
import FillterProduct from "@/components/fillterProductCategory/fillterProduct";
import Listproduct from "@/components/listProductCategory/listproduct";
import TitleProductCategory from "@/components/tiltleProductCategory/TitleProductCategory";
function ProductCategory() {
  return (
    <div className="container">
      <div>
        <div className={styles.title_category}>
          {/* <h4>Bán Chạy Nhất Cho Nam</h4> */}
          <TitleProductCategory />
        </div>
        <div className={styles.list_content_product}>
          <div>
            {/* left */}
            <FillterProduct />
            {/* left - end */}
          </div>
          {/* right */}
          <div style={{ width: "100%" }}>
            <Listproduct />
          </div>
          {/* right -  end */}
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
