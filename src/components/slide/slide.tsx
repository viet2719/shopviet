import React from "react";
import { Carousel, ConfigProvider, Image } from "antd";

const contentStyle: React.CSSProperties = {
  height: "100%",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  width: "100%",
};
const imageSlide = [
  {
    id: 1,
    src: "/images/slider_2.webp",
  },
  {
    id: 2,
    src: "/images/slider_4.webp",
  },
  {
    id: 3,
    src: "/images/1920x600-3.webp",
  },
];

const Slide: React.FC = () => (
  <ConfigProvider
    theme={{
      components: {
        Carousel: {
          /* here is your component tokens */
          dotWidth: 6,
          dotHeight: 6,
          dotActiveWidth: 6,
        },
      },
    }}
  >
    <Carousel autoplay>
      {imageSlide.map((item, index) => (
        <div key={index}>
          <Image
            preview={false}
            src={item.src}
            alt="mất rồi"
            style={contentStyle}
          ></Image>
        </div>
      ))}
    </Carousel>
  </ConfigProvider>
);

export default Slide;
