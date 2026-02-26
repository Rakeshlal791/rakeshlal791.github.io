import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Testament.css";

type Testimonial = {
  text: string;
  name: string;
  role: string;
};

export default function Testament() {
  const testimonials: Testimonial[] = [
    {
      text:
        "The team's attention to detail and commitment to meeting stringent quality standards have been exceptional. Their steel fabrication expertise was instrumental in the successful completion of our bridge construction project.",
      name: "P. Venkateswara Rao",
      role: "Managing Partner",
    },
    {
      text:
        "From the initial design phase to final installation, their steel fabrication capabilities exceeded our expectations. Their efficiency and adherence to project timelines were truly commendable.",
      name: "Vijay Bhaskar Reddy",
      role: "VBRL Constructions",
    },
    {
      text:
        "Their innovative slope stabilization solutions not only protected our infrastructure but also demonstrated a strong commitment to environmental sustainability. We were thoroughly impressed with their geotechnical engineering prowess.",
      name: "Vice President",
      role: "Hyderabad based infrastructure company",
    },
  ];

  return (
    <section className="testamentWrap">
      <div className="container">
        <div className="testamentHead">
          <h2 className="testamentHeading">Built to Last, Bridging Gaps</h2>
          <p className="testamentSub">
            Our clients trust us to deliver exceptional engineering solutions for walls and bridges.
            <br/>Hear what they have to say about our commitment to quality, innovation, and reliability.
          </p>
        </div>

        <div className="testamentSlider">
          <Swiper
            modules={[Pagination, Navigation]}
            loop={true}
            navigation={false}
            pagination={{ clickable: true }}
            watchOverflow={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 12,
                slidesPerGroup: 1,
              },
              861: {
                slidesPerView: 2,
                spaceBetween: 16,
                slidesPerGroup: 2,
              },
            }}
            className="testamentSwiper"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <article className="testamentCard">
                  <p className="testamentText">{t.text}</p>

                  <div className="testamentFooter">
                    <div>
                      <div className="testamentName">{t.name}</div>
                      <div className="testamentRole">{t.role}</div>
                    </div>

                    <div className="testamentQuote" aria-hidden="true">
                      ”
                    </div>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}