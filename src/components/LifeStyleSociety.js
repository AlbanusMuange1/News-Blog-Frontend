import React, { useEffect } from 'react';
import { WOW } from 'wowjs';
import 'animate.css';

const LifeStyleSociety = () => {
  // Featured News (main story)
  const featuredNews = {
    title: "Proin rhoncus consequat nisl eu ornare mauris",
    image: `${process.env.PUBLIC_URL}/assets/images/featured_img2.jpg`,
    description: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...",
    link: "/single_page"
  };

  // Additional news for the sidebar
  const additionalNews = [
    {
      title: "Aliquam malesuada diam eget turpis varius 1",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: "/single_page"
    },
    {
      title: "Aliquam malesuada diam eget turpis varius 2",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`,
      link: "/single_page"
    },
    {
      title: "Aliquam malesuada diam eget turpis varius 3",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: "/single_page"
    },
    {
      title: "Aliquam malesuada diam eget turpis varius 4",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`,
      link: "/single_page"
    }
  ];

  // Initialize Wow.js for scroll animations
  useEffect(() => {
    new WOW().init();
  }, []);

  return (
    <div className="fashion">
      <div className="single_post_content">
        <h2 className="animate__animated animate__fadeInDown"><span>Life Style & Society</span></h2>

        {/* Featured News */}
        <ul className="business_catgnav wow animate__fadeInDown">
          <li>
            <figure className="bsbig_fig">
              <a href={featuredNews.link} className="featured_img">
                <img alt={featuredNews.title} src={featuredNews.image} />
                <span className="overlay"></span>
              </a>
              <figcaption>
                <a href={featuredNews.link}>{featuredNews.title}</a>
              </figcaption>
              <p>{featuredNews.description}</p>
            </figure>
          </li>
        </ul>

        {/* Additional News */}
        <ul className="spost_nav">
          {additionalNews.map((news, index) => (
            <li key={index} className="wow animate__fadeInDown">
              <div className="media">
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
    </div>
  );
};

export default LifeStyleSociety;
