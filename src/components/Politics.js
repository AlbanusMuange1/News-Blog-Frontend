import React from 'react';
import 'animate.css'; // Import Animate.css

const Politics = () => {
  // Featured News (main story)
  const featuredNews = {
    title: "Proin rhoncus consequat nisl eu ornare mauris",
    image: `${process.env.PUBLIC_URL}/assets/images/featured_img1.jpg`,
    description: "Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris.",
    link: "pages/single_page.html"
  };

  // Additional news for the sidebar
  const additionalNews = [
    {
      title: "Aliquam malesuada diam eget turpis varius 1",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: "pages/single_page.html"
    },
    {
      title: "Aliquam malesuada diam eget turpis varius 2",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`,
      link: "pages/single_page.html"
    },
    {
      title: "Aliquam malesuada diam eget turpis varius 3",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`,
      link: "pages/single_page.html"
    },
    {
      title: "Aliquam malesuada diam eget turpis varius 4",
      image: `${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`,
      link: "pages/single_page.html"
    }
  ];

  return (
    <div className="single_post_content">
      <h2 className="animate__animated animate__bounceIn"><span>Politics</span></h2>
      <div className="single_post_content_left animate__animated animate__fadeInLeft">
        <ul className="business_catgnav">
          <li>
            <figure className="bsbig_fig">
              <a href={featuredNews.link} className="featured_img">
                <img alt="" src={featuredNews.image} />
                <span className="overlay"></span>
              </a>
              <figcaption className="animate__animated animate__fadeInUp">
                <a href={featuredNews.link}>{featuredNews.title}</a>
              </figcaption>
              <p className="animate__animated animate__fadeInUp">
                {featuredNews.description}
              </p>
            </figure>
          </li>
        </ul>
      </div>
      
      <div className="single_post_content_right animate__animated animate__fadeInRight">
        <ul className="spost_nav">
          {additionalNews.map((news, index) => (
            <li key={index} className="animate__animated animate__fadeInDown">
              <div className="media wow fadeInDown">
                <a href={news.link} className="media-left">
                  <img alt="" src={news.image} />
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

export default Politics;
