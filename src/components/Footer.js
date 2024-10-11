import React from 'react';

const Footer = () => {
  // Get the current year
  const currentYear = new Date().getFullYear();

  return (
    <div className="container">
      <footer id="footer">
        <div className="footer_top">
          <div className="row">
            {/* Flickr Images Section */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="footer_widget wow fadeInLeftBig">
                <h2>Flickr Images</h2>
              </div>
            </div>

            {/* Tag Navigation Section */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="footer_widget wow fadeInDown">
                <h2>Tag</h2>
                <ul className="tag_nav">
                  <li><a href="#">Games</a></li>
                  <li><a href="#">Sports</a></li>
                  <li><a href="#">Fashion</a></li>
                  <li><a href="#">Business</a></li>
                  <li><a href="#">Life &amp; Style</a></li>
                  <li><a href="#">Technology</a></li>
                  <li><a href="#">Photo</a></li>
                  <li><a href="#">Slider</a></li>
                </ul>
              </div>
            </div>

            {/* Contact Section */}
            <div className="col-lg-4 col-md-4 col-sm-4">
              <div className="footer_widget wow fadeInRightBig">
                <h2>Contact</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                <address>
                  Perfect News, 1238 S . 123 St. Suite 25 Town City 3333, USA <br />
                  Phone: 123-326-789 <br />
                  Fax: 123-546-567
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer_bottom">
          {/* Dynamically show the current year */}
          <p className="copyright">
            Copyright &copy; 2018 - {currentYear} <a href="index.html">NewsFeed</a>
          </p>
          <p className="developer"><a href="https://albanus-muange-mutunga-portfolio.vercel.app/">Developed by AlbahSoftware</a></p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
