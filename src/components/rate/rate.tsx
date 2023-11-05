import React, { useState } from "react";
import styles from "./rate.module.scss";
import { Button, Input, Modal, Rate, Upload, Image } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons/faImage";
import { faStar } from "@fortawesome/free-solid-svg-icons/faStar";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons/faCircleCheck";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons/faThumbsUp";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons/faTriangleExclamation";
const { TextArea } = Input;
function Rates() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState("");
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const fillterrate = [
    { id: 1, namefillter: "Tất cả", quantityrate: 2 },
    { id: 2, namefillter: "5 Điểm", quantityrate: 2 },
    { id: 3, namefillter: "4 Điểm", quantityrate: 2 },
    { id: 4, namefillter: "3 Điểm", quantityrate: 2 },
    { id: 5, namefillter: "2 Điểm", quantityrate: 2 },
    { id: 6, namefillter: "1 Điểm", quantityrate: 2 },
    { id: 7, namefillter: "Có hình ảnh", quantityrate: 2 },
  ];
  return (
    <div className={styles.block_rate_content}>
      <div className={styles.text_title_rate}>
        <div>Đánh giá</div>
      </div>
      {/* khi chưa có đánh giá nào */}
      {/* <div className={styles.rate_block}>
        <div className={styles.rate}>
          <p>
            Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu
            tiên đánh giá cho sản phẩm này
          </p>
          <button onClick={showModal} className={styles.btn_rate}>
            Gửi đánh giá của bạn
          </button>
        </div>
      </div> */}

      {/* khi đã có đánh giá */}
      <div className={styles.rated}>
        <div className={styles.tong_quan_danh_gia}>
          <div className={styles.over_left}>
            <span>5/5</span>
            <div>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
            </div>
            <p>10 đánh giá</p>
            <button onClick={showModal} className={styles.btn_rate}>
              Gửi đánh giá của bạn
            </button>
          </div>
          <div className={styles.list_fillter}>
            {fillterrate.map((items, index) => (
              <span key={index}>
                {items.namefillter}({items.quantityrate})
              </span>
            ))}
          </div>
        </div>
        <div className={styles.show_comment}>
          <div className={styles.user_rate}>
            <span className={styles.user_name}>tên người mua</span>
            <div>
              <FontAwesomeIcon icon={faStar} style={{ color: "#ffd43b" }} />
            </div>
          </div>
          <div className={styles.sapo_review_verified}>
            <FontAwesomeIcon icon={faCircleCheck} />
            Đã mua hàng tại YODY - Mặc Mỗi Ngày, Thoải Mái Mỗi Ngày
          </div>
          <span className={styles.sapo_review_content_body}>
            Hàng của yody rất ok. Chất đẹp mà mặc lại mát nữa mình đã mua rất
            nhiều sản phẩm của shop. Luôn tin tưởng và ủng hộ
          </span>
          <div className={styles.sapo_review_actions}>
            <ul className={styles.list_sapo_review_actions}>
              <li className={styles.sapo_review_reply}>Gửi câu trả lời</li>
              <li className={styles.sapo_review_useful}>
                <FontAwesomeIcon icon={faThumbsUp} />
                Hữu ích
              </li>
              <li className={styles.sapo_review_reportreview}>
                <FontAwesomeIcon icon={faTriangleExclamation} />
                Báo cáo vi phạm
              </li>
            </ul>
          </div>
          <div className={styles.sapo_review_images}>
            <div className={styles.image}>
              <Image
                alt="anh-loi"
                width={90}
                src="/images/1.webp"
                preview={false}
              />
            </div>
          </div>
        </div>
        <div className={styles.more_cmt}>Xem thêm đánh giá</div>
        <div className={styles.more_cmt}>Thu gọn đánh giá</div>
        <div className="divider"></div>
      </div>
      <Modal
        title="Đánh giá sản phẩm"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
        className="modal-custom"
      >
        <div className={styles.content_rate}>
          <h4 className={styles.title_product}>Áo Polo Nữ Coolmax</h4>
          <div>
            <div className={styles.rate_modal}>
              <span className={styles.span_rate}>
                Đánh giá của bạn về sản phẩm:
              </span>
              <Rate />
            </div>
            <Input type="text" placeholder="Nhập tên của bạn" />
            <div className={styles.email_phone}>
              <Input type="email" placeholder="Địa chỉ Email" />
              <Input type="text" placeholder="Số điện thoại(nếu có)" />
            </div>
            <div className={styles.content_cmt}>
              <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Nhập nội dung đánh giá của bạn về sản phẩm này"
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                maxCount={3}
                multiple
              >
                <Button>
                  {" "}
                  <FontAwesomeIcon icon={faImage} />
                  Đính kèm hình ảnh(Tối đa 3 ảnh)
                </Button>
              </Upload>
            </div>
          </div>
          <div className={styles.btn_submit}>
            <button type="submit" onClick={handleOk}>
              Gửi đánh giá
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Rates;
