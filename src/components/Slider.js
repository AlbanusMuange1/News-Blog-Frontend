import React, { useState, useEffect } from 'react';

const Slider = () => {
  // State to keep track of the current slide (index)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of slider items (news items)
  const slides = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/assets/images/slider_img4.jpg`,
      title: 'Fusce eu nulla semper porttitor felis sit amet',
      description: 'Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris.',
      link: 'pages/single_page.html'
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/assets/images/slider_img2.jpg`,
      title: 'Fusce eu nulla semper porttitor felis sit amet',
      description: 'Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris.',
      link: 'pages/single_page.html'
    }
  ];

  // Function to handle going to the next slide
  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length); // Loop back to the first slide
  };

  // Function to handle going to the previous slide
  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length); // Loop back to the last slide
  };

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);  // Slide every 5 seconds
    return () => clearInterval(interval);  // Clean up the interval on unmount
  }, [currentIndex]);

  return (
        <div className="col-lg-8 col-md-8 col-sm-8">
          <div className="slider-container">
            <div className="slider-content" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {slides.map((slide, index) => (
                <div className="single_iteam" key={slide.id}>
                  <a href={slide.link}><img src={slide.img} alt={`Slide ${index + 1}`} /></a>
                  <div className="slider_article">
                    <h2><a className="slider_tittle" href={slide.link}>{slide.title}</a></h2>
                    <p>{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* Previous and Next Buttons */}
            <button className="prev" onClick={prevSlide}>❮</button>
            <button className="next" onClick={nextSlide}>❯</button>
          </div>
        </div>
  );
};

export default Slider;
