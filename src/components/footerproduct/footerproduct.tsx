// import React, { useState } from "react";
// import styles from "./footerproduct.module.scss";
// import { Image } from "antd";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
// import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";
// interface FooterProductProps {
//   data: ProductData[];
// }
// interface ProductData {
//   id: number;
//   imageProduct: string;
//   // Các thuộc tính khác của sản phẩm
// }

// function Footerproduct(props: FooterProductProps) {
//   const { data } = props;
//   const itemsPerPage = 3;
//   const [currentPage, setCurrentPage] = useState(0);

//   const totalPages = Math.ceil(data.length / itemsPerPage);
//   const startIndex = currentPage * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const handleNextClick = () => {
//     setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
//   };

//   const handlePrevClick = () => {
//     setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
//   };

//   const visibleImages = data.slice(startIndex, endIndex);

//   return (
//     <div>
//       <div className={styles.footer_pro}>
//         <div className={styles.prev} onClick={handlePrevClick}>
//           <FontAwesomeIcon icon={faAngleLeft} />
//         </div>
//         {visibleImages.map((item, index) => (
//           <div className={styles.img_footer_prod} key={index}>
//             <Image
//               alt="anh loi"
//               src={item.imageProduct}
//               width={26.7}
//               height={26.7}
//               preview={false}
//             />
//           </div>
//         ))}

//         <div className={styles.next} onClick={handleNextClick}>
//           <FontAwesomeIcon icon={faAngleRight} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Footerproduct;
import React, { useState } from "react";
import styles from "./footerproduct.module.scss";
import { Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons/faAngleRight";

interface FooterProductProps {
  data: ProductData[];
}

interface ProductData {
  id: number;
  imageProduct: string;
}

function Footerproduct(props: FooterProductProps) {
  const { data } = props;
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handleNextClick = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const handlePrevClick = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  const visibleImages = data.slice(startIndex, endIndex);

  return (
    <div>
      <div className={styles.footer_pro}>
        <div className={styles.prev} onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </div>
        {visibleImages.map((item, index) => (
          <div className={styles.img_footer_prod} key={index}>
            <Image
              alt="anh loi"
              src={item.imageProduct}
              width={26.7}
              height={26.7}
              preview={false}
            />
          </div>
        ))}
        <div className={styles.next} onClick={handleNextClick}>
          <FontAwesomeIcon icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
}

export default Footerproduct;
