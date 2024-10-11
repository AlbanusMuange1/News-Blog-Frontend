import React, { useEffect, useState } from 'react';

const MostPopular = () => {
  // Simulated popular news data from a database (Replace with actual API data)
  const newsData = [
    { id: 1, title: "Aliquam malesuada diam eget turpis varius 1", image: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`, link: "/single_page/1", clicks: 120 },
    { id: 2, title: "Aliquam malesuada diam eget turpis varius 2", image: `${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`, link: "/single_page/2", clicks: 200 },
    { id: 3, title: "Aliquam malesuada diam eget turpis varius 3", image: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`, link: "/single_page/3", clicks: 180 },
    { id: 4, title: "Aliquam malesuada diam eget turpis varius 4", image: `${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`, link: "/single_page/4", clicks: 250 }
  ];

  // Initial order of news items
  const [newsList, setNewsList] = useState(newsData);

  // Function to rotate the news list (move first item to the end)
  useEffect(() => {
    const interval = setInterval(() => {
      setNewsList(prevNewsList => {
        const [firstItem, ...rest] = prevNewsList;
        return [...rest, firstItem]; // Move the first item to the end
      });
    }, 3000); // Rotate every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="single_sidebar">
      <h2><span>Popular Post</span></h2>
      <ul className="spost_nav">
        {newsList.map((news, index) => (
          <li key={news.id} className={`media ${index}`}>
            <div className="media wow fadeInDown">
              <a href={news.link} className="media-left">
                <img alt={news.title} src={news.image} />
              </a>
              <div className="media-body">
                <a href={news.link} className="catg_title">{news.title}</a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MostPopular;
