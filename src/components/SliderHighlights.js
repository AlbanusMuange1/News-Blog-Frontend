import React, { useEffect, useRef } from 'react';

const SliderHighlights = () => {
  const tickerRef = useRef(null); // Using React ref to access the ticker

  // Array of latest news items (dynamic for future database integration)
  const newsItems = [
    {
      id: 1,
      title: 'My First News Item',
      img: `${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`,
      link: '#'
    },
    {
      id: 2,
      title: 'My Second News Item',
      img: `${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`,
      link: '#'
    },
    {
      id: 3,
      title: 'My Third News Item',
      img: `${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`,
      link: '#'
    },
    {
      id: 4,
      title: 'My Fourth News Item',
      img: `${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`,
      link: '#'
    },
    {
      id: 5,
      title: 'My Fifth News Item',
      img: `${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`,
      link: '#'
    }
  ];

  // Function to handle the ticker animation
  const slideTicker = () => {
    const ticker = tickerRef.current;
    if (ticker) {
      let position = 0;
      const tickerWidth = ticker.scrollWidth / 2; // Only half the width since we duplicate the items
      let speed = 1; // Control the speed of the ticker

      const animate = () => {
        position -= speed;
        if (Math.abs(position) >= tickerWidth) {
          position = 0; // Reset position to the beginning smoothly
        }
        ticker.style.transform = `translateX(${position}px)`; // Move the ticker left
        requestAnimationFrame(animate); // Smooth animation using requestAnimationFrame
      };

      animate(); // Start the animation
    }
  };

  // useEffect to initialize the ticker animation after the component mounts
  useEffect(() => {
    slideTicker(); // Start the ticker sliding
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <section id="newsSection">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="latest_newsarea">
            <span>Latest News</span>
            <ul id="ticker01" ref={tickerRef} className="news_sticker">
              {/* Render news items twice for circular motion */}
              {newsItems.concat(newsItems).map((news) => (
                <li key={news.id + Math.random()}>
                  <a href={news.link}>
                    <img src={news.img} alt={news.title} />{news.title}
                  </a>
                </li>
              ))}
            </ul>
            <div className="social_area">
              <ul className="social_nav">
                <li className="facebook"><a href="#"></a></li>
                <li className="twitter"><a href="#"></a></li>
                <li className="flickr"><a href="#"></a></li>
                <li className="pinterest"><a href="#"></a></li>
                <li className="googleplus"><a href="#"></a></li>
                <li className="vimeo"><a href="#"></a></li>
                <li className="youtube"><a href="#"></a></li>
                <li className="mail"><a href="#"></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderHighlights;
