import React, { useState, useEffect } from 'react';

const LatestPost = () => {
  // State to track the current visible news item
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of latest news items (you can add more items as needed)
  const newsItems = [
    {
      id: 1,
      title: 'Aliquam malesuada diam eget turpis varius 1',
      img: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: 'pages/single_page.html'
    },
    {
      id: 2,
      title: 'Aliquam malesuada diam eget turpis varius 2',
      img: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: 'pages/single_page.html'
    },
    {
      id: 3,
      title: 'Aliquam malesuada diam eget turpis varius 3',
      img: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: 'pages/single_page.html'
    },
    {
      id: 4,
      title: 'Aliquam malesuada diam eget turpis varius 4',
      img: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: 'pages/single_page.html'
    },
    {
      id: 5,
      title: 'Aliquam malesuada diam eget turpis varius 5',
      img: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: 'pages/single_page.html'
    }
  ];

  // Function to go to the next news item automatically
  const nextNews = () => {
    setCurrentIndex((currentIndex + 1) % newsItems.length);  // Loop back to the first item
  };

  // Auto-scroll effect every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextNews, 3000);  // Change news every 3 seconds
    return () => clearInterval(interval);  // Clean up the interval on unmount
  }, [currentIndex]);

  return (
    <div className="latest_post">
      <h2><span>Latest Post</span></h2>
      <div className="latest_post_container">
        {/* Only the scrolling animation */}
        <ul className="latest_postnav" style={{ transform: `translateY(-${currentIndex * 100}px)` }}>
          {newsItems.map((news) => (
            <li key={news.id}>
              <div className="media">
                <a href={news.link} className="media-left">
                  <img alt={news.title} src={news.img} />
                </a>
                <div className="media-body">
                  <a href={news.link} className="catg_title">{news.title}</a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LatestPost;
