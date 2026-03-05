import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import FadeIn from "@components/animations/FadeIn";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollContainerRef = useRef(null);

  const scrollToIndex = (index) => {
    setCurrentIndex(index);

    if (scrollContainerRef.current) {
      const cardWidth = scrollContainerRef.current.offsetWidth;
      scrollContainerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth',
      });
    }
  };

  const nextTestimonial = () => {
    const newIndex = (currentIndex + 1) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const prevTestimonial = () => {
    const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    scrollToIndex(newIndex);
  };

  const testimonialStats = [
    { value: '3x', label: 'Faster Delivery' },
    { value: '95%', label: 'Client Satisfaction' },
    { value: '100%', label: 'On-Time Delivery' },
    { value: '5★', label: 'Average Rating' }
  ];

  return (
    <section id="testimonials" className="relative py-20 bg-black overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 opacity-90 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
              <Quote className="w-4 h-4 text-primary">
                <span className="text-sm text-primary font-medium tracking-wider uppercase">Testimonials</span>
              </Quote>
            </div>

            <h2 className="text-4xl lg:text-5xl font-normal text-white mb-4 max-w-xl mx-auto">
              Trusted by forward-thinking teams
            </h2>

            <p className="text-lg text-white/60 max-w-xl mx-auto">
              Empowering clients with design-driven, high-quality solutions solutions build for success.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="relative ">
          <div 
            ref={scrollContainerRef}
            className="overflow-x-hidden scroll-smooth"
            style={{ scrollSnapType: "x mandatory" }}
          >
            <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="w-full shrink-0 px-4"
                style={{ scrollSnapAlign: "start" }}
              >

                <div className="max-w-4xl mx-auto">
                  <div className="flex flex-col md:flex-row gap-6 items-stretch">
                    {/* Image Section */}
                    <div className="relative w-full md:w-1/3">
                      <div className="relative h-72 rounded-2xl overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  {/* https://youtu.be/UQVB8fe_b4E?si=GCnyhWhmrXonUYD3&t=6906 */}

                  {/* Stat Badge Overlay */}
                  <div className="">
                    <div className="">
                      <div className="">
                        <div className="">
                          {testimonialStats[index]?.value}
                        </div>
                        <div className="">
                          {testimonialStats[index]?.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <div className="">
                    <Quote className="" />
                    <p className="">
                      "{testimonial.quote}"
                    </p>
                  </div>

                  <div className="">
                    <div>
                      <div className="">
                        {testimonial.name}
                      </div>
                      <div className="">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>

                    <div className="">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`
                transition-all duration-300 rounded-full
                ${currentIndex === index
                  ? 'bg-white w-6 h-2'
                  : 'bg-white/30 w-2 h-2 hover:bg-white'
                }
              `}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={prevTestimonial}
          className=""
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="" />
        </button>

        <button
          onClick={nextTestimonial}
          className=""
          aria-label="Next testimonial"
        >
          <ChevronRight className="" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
