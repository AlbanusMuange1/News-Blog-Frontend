import React from 'react';

const Business = () => {
  const images = [
    { src: `${process.env.PUBLIC_URL}/assets/images/photograph_img2.jpg`, title: "Photography Title 1", link: "/images/photograph_img2.jpg" },
    { src: `${process.env.PUBLIC_URL}/assets/images/photograph_img3.jpg`, title: "Photography Title 2", link: "/images/photograph_img3.jpg" },
    { src: `${process.env.PUBLIC_URL}/assets/images/photograph_img4.jpg`, title: "Photography Title 3", link: "/images/photograph_img4.jpg" },
    { src: `${process.env.PUBLIC_URL}/assets/images/photograph_img4.jpg`, title: "Photography Title 4", link: "/images/photograph_img4.jpg" },
    { src: `${process.env.PUBLIC_URL}/assets/images/photograph_img2.jpg`, title: "Photography Title 5", link: "/images/photograph_img2.jpg" },
    { src: `${process.env.PUBLIC_URL}/assets/images/photograph_img3.jpg`, title: "Photography Title 6", link: "/images/photograph_img3.jpg" },
  ];

  return (
    <div className="single_post_content">
      <h2><span>Business</span></h2>
      <ul className="photograph_nav wow fadeInDown">
        {images.map((image, index) => (
          <li key={index}>
            <div className="photo_grid">
              <figure className="effect-layla">
                <a className="fancybox-buttons" data-fancybox-group="button" href={image.link} title={image.title}>
                  <img src={image.src} alt={image.title} />
                  <figcaption>
                    <div className="image-title">{image.title}</div>
                  </figcaption>
                </a>
              </figure>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Business;
