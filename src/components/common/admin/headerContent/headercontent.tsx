import { Breadcrumb } from "antd";
import React from "react";
import styles from "./headerContent.module.scss";
interface PropTitle {
  siderBarData: {
    title: string;
  } | null;
}
const Headercontent: React.FC<PropTitle> = ({ siderBarData }) => {
  if (!siderBarData) {
    return null; // or handle it in some way that makes sense for your application
  }

  return (
    <div className={styles.header_top}>
      <h4>{siderBarData.title}</h4>
      <div>
        <Breadcrumb
          items={[
            {
              title: "Home",
            },
            {
              title: <p>{siderBarData.title}</p>,
            },
            {
              title: "Data",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Headercontent;
