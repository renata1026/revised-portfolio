import React, { useState } from 'react';
import { testimonialsData } from '../context';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonialsData.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonialsData.length - 1 : prevSlide - 1
    );
  };

  return (
    <section className="testimonial-area padding" id="testimonials">
      <div className="testimonial">
        <div className="sec-title">
          <h2 className="title-tes" id="title-dark">
            Testimonials
          </h2>
        </div>
      </div>
      <div className="testimonial-container">
        {testimonialsData.map((testimonial, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'slide-active' : ''}`}
          >
            <div className="img-box">
              <img
                src={testimonial.imgSrc}
                alt={`A picture of ${testimonial.name}`}
              />
            </div>
            <p>{testimonial.text}</p>
            <h4>
              {testimonial.name}
              <br />
              <a href={testimonial.email}>{testimonial.company}</a>
            </h4>
          </div>
        ))}
      </div>
      <button className="prev" id="prev" onClick={prevSlide}>
        <i className="bx bxs-chevron-left"></i>
      </button>
      <div className="indicator-container"></div>
      <button className="next" id="next" onClick={nextSlide}>
        <i className="bx bxs-chevron-right"></i>
      </button>
    </section>
  );
};

export default Testimonials;
