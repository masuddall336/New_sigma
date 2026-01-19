import { useState, useEffect } from "react";
import "./carousel.css";
import slide1 from "../../public/slider/slider-1.png"
import slide1Small from "../../public/slider/slider-1-sm.png"
import slide2 from "../../public/slider/slider-2.jpg"
import slide3 from "../../public/slider/slider-3.jpg"
import slide4 from "../../public/slider/slider-4.jpg"
import slide5 from "../../public/slider/slider-5.jpg"
import drop from "../../public/slider/drop.jpg"

const slides = [
  {
    image: slide1,
    image_sm: slide1Small,
    title: "Sigma Oil Industries Limited",
    desc: "Go beyond your limit with our premium quality light-duty engine oil. A leading petroleum products manufacturing company the Country.",
    button: "KNOW MORE ABOUT US",
  },
  {
    image: slide2,
    title: "Heavy-Duty Diesel Engine Oil",
    desc: "Heavy-duty engines usually operate on an oil that is 10W40 or 15W40, whereas passenger car engines usually use a 0W30, 5W30, 0W20 or 5W20 oil.",
    button: "CALL US FOR PRICING",
  },
  {
    image: slide3,
    title: "Keep Your Passenger Car on the Go",
    desc: "There is a huge range of passenger car engine oils on the market that suit all makes and models of vehicle. Whereas passenger car engines usually use a 0W30, 5W30, 0W20 or 5W20 oil.",
    button: "CALL US FOR PRICING",
  },
  {
    image: slide4,
    title: "Your Guide to Motorcycle Engine Oil",
    desc: "Supreme – 4T, Supra – 4T, Super 4T, Zoom are high performance conventional four-stroke motorcycle engine oils primarily intended for general use of four-stroke motorcycles and engines.",
    button: "IMPROVE YOUR DRIVING EXPRICENCE",
  },
  {
    image: slide5,
    title: "Industrial Machineries Engine Oil",
    desc: "Go beyond your limit with our premium quality industrial engine oil.",
    button: "BOOST ENGIN PERFORMANCE",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  const nextSlide = () => {
    setPrev(current);
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setPrev(current);
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Auto-play every 4s
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="carousel-wrapper z-10 ">
      <div className="carousel-container">
        {slides.map((slide, index) => {
          let className = "carousel-slide";
          if (index === current) className += " active";
          else if (index === prev) className += " prev";
          return (
            <div
              key={index}
              className={className}
              style={{
                backgroundImage: `url(${window.innerWidth <= 768 ? slide.image_sm || slide.image
                  : slide.image
                  })`,
                backgroundPosition: "left",
              }}
            >
              <div className="carousel-content">
                <h1>{slide.title}</h1>
                <p>{slide.desc}</p>
                <button>{slide.button}</button>
              </div>
            </div>
          );
        })}

        {/* Arrows */}
        <div className="arrow left" onClick={prevSlide}>
          ❮
        </div>
        <div className="arrow right" onClick={nextSlide}>
          ❯
        </div>
      </div>

      {/* Water / River Waves */}
      <div className="wefewfe">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave3"></div>
      </div>
      {/* Drop */}
      <div className="z-[1001] absolute top-[98%] left-[50%]">
        <img className="w-5" src={drop} alt="" />
      </div>
    </div>
  );
}
