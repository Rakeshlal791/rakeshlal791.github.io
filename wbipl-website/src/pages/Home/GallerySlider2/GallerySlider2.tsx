import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./GallerySlider2.css";

type GallerySlider2Props = {
  images?: string[];
  className?: string;
};

export default function GallerySlider2({
  images = defaultImages,
  className = "",
}: GallerySlider2Props) {
  return (
    <section className={`slider-container ${className}`}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop
        navigation // ✅ default swiper arrows
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={700}
        className="slider2-swiper"
      >
        {images.map((src, idx) => (
          <SwiperSlide key={`${src}-${idx}`}>
            <div className="slider2-slide">
              <img src={src} alt={`slide-${idx + 1}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

const defaultImages = [
  "/images/hero-image-2.png",
  "/images/hero-image-3.png",
  "/images/hero-image-4.png",
  "/images/hero-image-5.png",
];