import React, { useState } from "react";
import x from "./bansethich.module.scss";
import { Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons/faChevronLeft";
function Bansethich() {
  const male = [
    {
      id: 1,
      image: "/male/aokhoac.webp",
      title: "ÁO KHOÁC",
    },
    {
      id: 2,
      image: "/male/aoplo.webp",
      title: "ÁO POLO",
    },
    {
      id: 3,
      image: "/male/aosomi.webp",
      title: "ÁO SƠ MI",
    },
    {
      id: 4,
      image: "/male/aothun.webp",
      title: "AO THUN",
    },
    {
      id: 5,
      image: "/male/bodo.webp",
      title: "ĐỒ BỘ",
    },
    {
      id: 6,
      image: "/male/dolot.webp",
      title: "ĐỒ LÓT",
    },
    {
      id: 7,
      image: "/male/phukien.webp",
      title: "PHỤ KIỆN",
    },
    {
      id: 8,
      image: "/male/quanbo.webp",
      title: "QUAN BÒ",
    },
    {
      id: 9,
      image: "/male/quanau.png",
      title: "QUAN ÂU",
    },
    {
      id: 10,
      image: "/male/quandui.webp",
      title: "QUẦN ĐÙI",
    },
    {
      id: 11,
      image: "/male/quankaki.webp",
      title: "QUẦN KAKI",
    },
  ];
  const itemsPerPage = 4;
  const [currentPage, setCurrentPage] = useState(0);

  const handleClickPrev = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMale = male.slice(startIndex, endIndex);
  const isPrevDisabled = currentPage === 0;
  const isNextHidden = endIndex >= male.length;
  return (
    <div>
      <div className={x.ins_web_smart_recommender_header}>
        CÓ THỂ BẠN SẼ THÍCH
      </div>
      <div className={x.ins_web_smart_recommender_body_wrapper}>
        <button
          className={x.prev}
          onClick={handleClickPrev}
          disabled={isPrevDisabled}
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        {currentMale.map((items, index) => (
          <div className={x.ins_web_smart_recommender_box_item} key={index}>
            <div>
              <Image src={items.image} alt="anh_loi" preview={false} />
            </div>
            <span>{items.title}</span>
            <span>Giá</span>
            <button className={x.btn_buy_now}>Xem ngay</button>
          </div>
        ))}

        <button
          className={x.next}
          onClick={handleClickNext}
          disabled={isNextHidden}
        >
          <FontAwesomeIcon icon={faChevronLeft} rotation={180} />
        </button>
      </div>
    </div>
  );
}

export default Bansethich;
