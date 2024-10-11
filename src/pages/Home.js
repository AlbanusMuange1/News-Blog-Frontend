import React, { useEffect } from 'react';
import { WOW } from 'wowjs';
import SliderHighlights from '../components/SliderHighlights';
import Slider from '../components/Slider';
import LatestPost from '../components/LatestPost'; 
import Politics from '../components/Politics';
import LifeStyleSociety from '../components/LifeStyleSociety';
import Technology from '../components/Technology';
import Business from '../components/Business';
import SportsEntertainment from '../components/SportsEntertainment';
import MostPopular from '../components/MostPopular';

const Home = () => { 
    useEffect(() => {
    new WOW().init();
  }, []);
  return (
    <div className="container">
      {/* News Highlight Section */}
      <SliderHighlights />

      {/* Slider Section */}
      <section id="sliderSection">
        <div className="row">
          <Slider />

          {/* Latest Posts */}
          <div className="col-lg-4 col-md-4 col-sm-4">
            <LatestPost />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="contentSection">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="left_content">
              {/* Politics */}
              <Politics />
              <div className="fashion_technology_area">
                {/* Life Style & Society */}
                <LifeStyleSociety />
                {/* Technology */}
                <Technology />
              </div>
              {/* Business */}
              <Business />
              {/* Sports and Entertainment */}
              <SportsEntertainment />
            </div>
          </div>

          {/* Right Sidebar Section */}
          <div className="col-lg-4 col-md-4 col-sm-4">
            <aside className="right_content">
              {/* Most Popular */}
              <MostPopular />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
