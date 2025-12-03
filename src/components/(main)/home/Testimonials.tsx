'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { HomeTestimonialsProps } from '@/types';
import { Label } from '../ui/Label';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Testimonials = ({
  label,
  title,
  description,
  testimonials,
}: Readonly<HomeTestimonialsProps>) => {

  useEffect(() => {
    // Initialize Swiper after component mounts
    if (typeof window !== 'undefined' && (window as any).Swiper) {
      const swiper = new (window as any).Swiper('#slider-testimonials', {
        modules: [(window as any).Swiper.Navigation, (window as any).Swiper.Pagination],
        navigation: {
          nextEl: '#slider-testimonials-button-next',
          prevEl: '#slider-testimonials-button-prev',
        },
        pagination: {
          el: '#slider-pagination-testimonials',
          clickable: true,
          bulletClass: 'slider-pagination-testimonials-bullet',
          bulletActiveClass: 'slider-pagination-bullet-active',
        },
        slidesPerView: 1,
        spaceBetween: 10,
        autoHeight: false,
        breakpoints: {
          1024: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });

      return () => {
        if (swiper) swiper.destroy();
      };
    }
  }, [testimonials]);

  return (
    <section className="section-white" aria-labelledby="testimonials-title">
      <div className="wrapper px-5 py-10 lg:p-20 flex flex-col justify-start items-start gap-20">
        <div className="self-stretch flex flex-col justify-center items-start gap-10">
          <Label label={label} />

          <div className="self-stretch flex flex-col lg:flex-row justify-end items-end gap-20 lg:gap-10">
            <div className="flex-1 flex flex-col justify-start items-start gap-6">
              <h2
                className="self-stretch justify-start text-secondary-navy text-4xl font-medium leading-tight"
                id="testimonials-title"
              >
                {title}
              </h2>
              <p className="self-stretch justify-start text-base-grey text-lg font-normal leading-relaxed">
                {description}
              </p>
            </div>
            <nav
              className="flex justify-start items-start gap-6"
              aria-label="Testimonial navigation"
            >
              <button
                id="slider-testimonials-button-prev"
                className="px-6 py-3.5 outline-[0.50px] outline-offset-[-0.50px] outline-secondary-navy flex justify-start items-center text-secondary-navy transition-all hover:bg-primary-orange hover:text-base-white hover:outline-primary-orange cursor-pointer"
                aria-label="Previous testimonial"
              >
                <i className="ph ph-arrow-left text-xl" aria-hidden="true"></i>
              </button>
              <button
                id="slider-testimonials-button-next"
                className="px-6 py-3.5 outline-[0.50px] outline-offset-[-0.50px] outline-secondary-navy flex justify-start items-center text-secondary-navy transition-all hover:bg-primary-orange hover:text-base-white hover:outline-primary-orange cursor-pointer"
                aria-label="Next testimonial"
              >
                <i className="ph ph-arrow-right text-xl" aria-hidden="true"></i>
              </button>
            </nav>
          </div>
        </div>

        <div id="slider-testimonials" className="swiper w-full">
          <div className="swiper-wrapper">
            {testimonials?.map((testimonial) => (
              <div key={testimonial.id} className="swiper-slide">
                <blockquote className="p-10 bg-primary-light-orange flex flex-col justify-start items-start gap-10 h-full">
                  <picture>
                    <Image
                      src="/icon/quote.svg"
                      alt="Quote icon"
                      width={60}
                      height={46}
                      aria-hidden="true"
                    />
                  </picture>
                  <div className="self-stretch flex flex-1 flex-col justify-start items-start gap-4">
                    <p className="self-stretch justify-start text-secondary-navy text-xl font-medium leading-normal">
                      {testimonial.quote}
                    </p>
                  </div>
                  <footer className="justify-center text-xl">
                    <cite>
                      <span className="text-secondary-navy font-semibold leading-relaxed">
                        {testimonial.authorName}
                      </span>
                      {' '}
                      <span className="text-base-grey font-normal leading-relaxed">
                        {testimonial.authorTitle}
                      </span>
                    </cite>
                  </footer>
                </blockquote>
              </div>
            ))}
          </div>
          <nav
            id="slider-pagination-testimonials"
            className="self-stretch flex justify-center items-center gap-3 mt-8"
            aria-label="Testimonial pagination"
          ></nav>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;