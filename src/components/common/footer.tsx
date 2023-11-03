import React from "react";
import styles from "@/styles/common/footer.module.scss";
import { Image } from "antd";
function Footer() {
  const about = [
    {
      id: 1,
      titleAbout: "Giới thiệu",
      link: "",
    },
    {
      id: 2,
      titleAbout: "Liên hệ",
      link: "",
    },
    {
      id: 3,
      titleAbout: "Tuyển dụng",
      link: "",
    },
    {
      id: 4,
      titleAbout: "Tin tức",
      link: "",
    },
    {
      id: 5,
      titleAbout: "Hệ thống cửa hàng",
      link: "",
    },
    {
      id: 6,
      titleAbout: "Hàng mới về",
      link: "",
    },
  ];
  const support = [
    {
      id: 1,
      itemSup: "Hướng đãn chọn size",
      link: "",
    },
    {
      id: 2,
      itemSup: "Chính sách Khách hàng thân thiết",
      link: "",
    },
    {
      id: 3,
      itemSup: "Chính sách Báo hành, đổi/trả",
      link: "",
    },
    {
      id: 4,
      itemSup: "Chính sách Thanh toán,giao nhận",
      link: "",
    },
    {
      id: 5,
      itemSup: "Chính sách Bảo mật thông tin khách hàng",
      link: "",
    },
    {
      id: 6,
      itemSup: "Chính sách Sử dụng Cookies",
      link: "",
    },
  ];
  const iconCt = [
    {
      id: 1,
      iconSrc: "/icon/social_1.webp",
      link: "",
    },
    {
      id: 2,
      iconSrc: "/icon/social_2.png",
      link: "",
    },
    {
      id: 3,
      iconSrc: "/icon/social_3.png",
      link: "",
    },
    {
      id: 4,
      iconSrc: "/icon/social_4.png",
      link: "",
    },
  ];
  return (
    <div className={styles.footer_footer}>
      <div className={`container ${styles.footer}`}>
        <div className={styles.footer_content}>
          <div className={`col-4 ${styles.col_1}`}>
            <div>
              “Đặt sự hài lòng của khách hàng là ưu tiên số 1 trong mọi suy nghĩ
              hành động của mình” là sứ mệnh, là triết lý, chiến lược.. luôn
              cùng YODY tiến bước
            </div>
            <div className={styles.icon_contact}>
              {iconCt.map((src, index) => (
                <div key={index} className={styles.imgSrc}>
                  <Image alt="anh loi" src={src.iconSrc} preview={false} />
                </div>
              ))}
            </div>
          </div>
          <div className={`col-2 ${styles.col_2}`}>
            <h4 className={styles.tiitle_menu}>VỀ SHOPVIET</h4>
            {about.map((abouts, index) => (
              <ul key={index}>
                <li className={styles.li_menu}>{abouts.titleAbout}</li>
              </ul>
            ))}
          </div>
          <div className={`col-3 ${styles.col_3}`}>
            <h4 className={styles.tiitle_menu}>HỖ TRỢ KHÁCH HÀNG</h4>
            {support.map((sp, index) => (
              <ul key={index}>
                <li className={styles.li_menu}>{sp.itemSup}</li>
              </ul>
            ))}
          </div>
          <div className={`col-3 ${styles.col_4}`}>
            <h4 className={styles.tiitle_menu}>CÔNG TY THỜI TRANG SHOPVIET</h4>
            <div>
              <div className={styles.contact_company}>
                <Image alt="anh-loi" src={"/icon/map.svg"} preview={false} />
                Công ty cổ phần thời trang SHOPVIET
              </div>
            </div>
            <div>
              <div className={styles.contact_company}>Mã số thuế :87687345</div>
            </div>
            <div>
              <div className={styles.contact_company}>
                Địa chỉ: Đường An Định - Phường Việt Hòa - Thành phố Hải Dương -
                Hải Dương
              </div>
            </div>
            <div>
              <div
                className={`${styles.contact_company}  ${styles.ct_address_hover}`}
              >
                <Image
                  preview={false}
                  alt="anh-loi"
                  src={"/icon/icon_address.png"}
                />
                Tìm cửa hàng gần bạn nhất
              </div>
            </div>
            <div>
              <div
                className={`${styles.contact_company}  ${styles.ct_phone_hover} `}
              >
                <Image preview={false} alt="anh-loi" src={"/icon/phone.svg"} />
                Liên hệ đặt hàng: 0869047103.
              </div>
            </div>
            <div>
              <div
                className={`${styles.contact_company}  ${styles.ct_tele_hover}`}
              >
                Thắc mắc đơn hàng: 0869047103.
              </div>
            </div>
            <div>
              <div
                className={`${styles.contact_company}  ${styles.ct_complain_hover}`}
              >
                Góp ý khiếu nại: 1800 2086.
              </div>
            </div>
            <div>
              <div
                className={`${styles.contact_company} ${styles.ct_email_hover} `}
              >
                <Image preview={false} alt="anh-loi" src={"/icon/email.svg"} />
                Emaiil: vietnh2719@gmail.com
              </div>
            </div>
          </div>
        </div>
        <div className={styles.divider}></div>
        <div className={styles.footer_bottom}>
          <p>
            © SHOPVIET - Bản quyền thuộc về Công ty cổ phần thời trang SHOPVIET
          </p>
        </div>
      </div>
    </div>
  );
}
export default Footer;
