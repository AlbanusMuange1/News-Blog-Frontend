import React from 'react';

const Home = () => {
  return (
    <div>
      {/* News Section */}
      <section id="newsSection">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="latest_newsarea">
              <span>Latest News</span>
              <ul id="ticker01" className="news_sticker">
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My First News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My Second News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My Third News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My Four News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My Five News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My Six News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My Seven News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail3.jpg`} alt=""/>My Eight News Item</a></li>
                <li><a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/news_thumbnail2.jpg`} alt=""/>My Nine News Item</a></li>
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

      {/* Slider Section */}
      <section id="sliderSection">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="slick_slider">
              <div className="single_iteam">
                <a href="pages/single_page.html"><img src={`${process.env.PUBLIC_URL}/assets/images/slider_img4.jpg`} alt=""/></a>
                <div className="slider_article">
                  <h2><a className="slider_tittle" href="pages/single_page.html">Fusce eu nulla semper porttitor felis sit amet</a></h2>
                  <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris.</p>
                </div>
              </div>
              <div className="single_iteam">
                <a href="pages/single_page.html"><img src={`${process.env.PUBLIC_URL}/assets/images/slider_img2.jpg`} alt=""/></a>
                <div className="slider_article">
                  <h2><a className="slider_tittle" href="pages/single_page.html">Fusce eu nulla semper porttitor felis sit amet</a></h2>
                  <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Latest Posts */}
          <div className="col-lg-4 col-md-4 col-sm-4">
            <div className="latest_post">
              <h2><span>Latest post</span></h2>
              <div className="latest_post_container">
                <div id="prev-button"><i className="fa fa-chevron-up"></i></div>
                <ul className="latest_postnav">
                  <li>
                    <div className="media">
                      <a href="pages/single_page.html" className="media-left">
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/>
                      </a>
                      <div className="media-body">
                        <a href="pages/single_page.html" className="catg_title">Aliquam malesuada diam eget turpis varius 1</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media"> 
                      <a href="pages/single_page.html" class="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> 
                      </div>
                    </div>
                  </li>
                </ul>
                <div id="next-button"><i className="fa fa-chevron-down"></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section id="contentSection">
        <div className="row">
          <div className="col-lg-8 col-md-8 col-sm-8">
            <div className="left_content">
              <div className="single_post_content">
                <h2><span>Business</span></h2>
                <div className="single_post_content_left">
                  <ul className="business_catgnav">
                    <li>
                      <figure className="bsbig_fig">
                        <a href="pages/single_page.html" className="featured_img">
                          <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/featured_img1.jpg`}/>
                          <span className="overlay"></span>
                        </a>
                        <figcaption>
                          <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a>
                        </figcaption>
                        <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris.</p>
                      </figure>
                    </li>
                  </ul>
                </div>
                <div className="single_post_content_right">
                  <ul className="spost_nav">
                    <li>
                      <div className="media wow fadeInDown"> 
                        <a href="pages/single_page.html" className="media-left"> 
                          <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                        </a>
                        <div className="media-body"> 
                          <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media wow fadeInDown"> 
                        <a href="pages/single_page.html" className="media-left"> 
                          <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                        </a>
                        <div className="media-body"> 
                          <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media wow fadeInDown"> 
                        <a href="pages/single_page.html" className="media-left"> 
                          <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                        </a>
                        <div className="media-body"> 
                          <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media wow fadeInDown"> 
                        <a href="pages/single_page.html" className="media-left"> 
                          <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                        </a>
                        <div className="media-body"> 
                          <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> 
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
          <div className="fashion_technology_area">
            <div className="fashion">
              <div className="single_post_content">
                <h2><span>Fashion</span></h2>
                <ul className="business_catgnav wow fadeInDown">
                  <li>
                    <figure className="bsbig_fig"> 
                      <a href="pages/single_page.html" className="featured_img"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/featured_img2.jpg`}/> 
                        <span className="overlay">
                        </span> 
                        </a>
                      <figcaption> 
                        <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> 
                      </figcaption>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                    </figure>
                  </li>
                </ul>
                <ul className="spost_nav">
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                        </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assetsimages/post_img2.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> 
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="technology">
              <div className="single_post_content">
                <h2><span>Technology</span></h2>
                <ul className="business_catgnav">
                  <li>
                    <figure className="bsbig_fig wow fadeInDown"> 
                      <a href="pages/single_page.html" className="featured_img"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/featured_img3.jpg`}/> 
                        <span className="overlay"></span> 
                      </a>
                      <figcaption> 
                        <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> 
                      </figcaption>
                      <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                    </figure>
                  </li>
                </ul>
                <ul className="spost_nav">
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a> 
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media wow fadeInDown"> 
                      <a href="pages/single_page.html" className="media-left"> 
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                      </a>
                      <div className="media-body"> 
                        <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> 
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="single_post_content">
            <h2><span>Photography</span></h2>
            <ul className="photograph_nav  wow fadeInDown">
              <li>
                <div className="photo_grid">
                  <figure className="effect-layla"> 
                    <a className="fancybox-buttons" data-fancybox-group="button" href="images/photograph_img2.jpg" title="Photography Ttile 1"> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/photograph_img2.jpg`} alt=""/></a> 
                  </figure>
                </div>
              </li>
              <li>
                <div className="photo_grid">
                  <figure className="effect-layla"> 
                    <a className="fancybox-buttons" data-fancybox-group="button" href="images/photograph_img3.jpg" title="Photography Ttile 2"> <img src="images/photograph_img3.jpg" alt=""/> </a> 
                  </figure>
                </div>
              </li>
              <li>
                <div className="photo_grid">
                  <figure className="effect-layla"> 
                    <a className="fancybox-buttons" data-fancybox-group="button" href="images/photograph_img4.jpg" title="Photography Ttile 3"> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/photograph_img4.jpg`} alt=""/> </a> 
                  </figure>
                </div>
              </li>
              <li>
                <div className="photo_grid">
                  <figure className="effect-layla"> 
                    <a className="fancybox-buttons" data-fancybox-group="button" href="images/photograph_img4.jpg" title="Photography Ttile 4"> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/photograph_img4.jpg`} alt=""/> 
                    </a> </figure>
                </div>
              </li>
              <li>
                <div className="photo_grid">
                  <figure className="effect-layla"> 
                    <a className="fancybox-buttons" data-fancybox-group="button" href="images/photograph_img2.jpg" title="Photography Ttile 5"> 
                    <img src={`${process.env.PUBLIC_URL}/assets/images/photograph_img2.jpg`} alt=""/> </a> 
                  </figure>
                </div>
              </li>
              <li>
                <div className="photo_grid">
                  <figure className="effect-layla"> 
                    <a className="fancybox-buttons" data-fancybox-group="button" href="images/photograph_img3.jpg" title="Photography Ttile 6"> <img src={`${process.env.PUBLIC_URL}/assets/images/photograph_img3.jpg`} alt=""/> </a> 
                  </figure>
                </div>
              </li>
            </ul>
          </div>
          <div className="single_post_content">
            <h2><span>Games</span></h2>
            <div className="single_post_content_left">
              <ul class="business_catgnav">
                <li>
                  <figure className="bsbig_fig  wow fadeInDown"> 
                    <a className="featured_img" href="pages/single_page.html"> 
                      <img src={`${process.env.PUBLIC_URL}/assets/images/featured_img1.jpg`} alt=""/> <span className="overlay"></span> 
                    </a>
                    <figcaption> 
                      <a href="pages/single_page.html">Proin rhoncus consequat nisl eu ornare mauris</a> 
                    </figcaption>
                    <p>Nunc tincidunt, elit non cursus euismod, lacus augue ornare metus, egestas imperdiet nulla nisl quis mauris. Suspendisse a phare...</p>
                  </figure>
                </li>
              </ul>
            </div>
            <div className="single_post_content_right">
              <ul className="spost_nav">
                <li>
                  <div className="media wow fadeInDown"> 
                    <a href="pages/single_page.html" className="media-left"> 
                      <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                    </a>
                    <div className="media-body"> 
                      <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 1</a> 
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media wow fadeInDown"> 
                    <a href="pages/single_page.html" className="media-left"> 
                      <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                    </a>
                    <div className="media-body"> 
                      <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> 
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media wow fadeInDown"> 
                    <a href="pages/single_page.html" className="media-left"> 
                      <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                    </a>
                    <div className="media-body"> 
                      <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a> 
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media wow fadeInDown"> 
                    <a href="pages/single_page.html" className="media-left"> 
                      <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                    </a>
                    <div className="media-body"> 
                      <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> 
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

            </div>
          </div>

          {/* Right Sidebar Section */}
          <div className="col-lg-4 col-md-4 col-sm-4">
            <aside className="right_content">
              <div className="single_sidebar">
                <h2><span>Popular Post</span></h2>
                <ul className="spost_nav">
                  <li>
                    <div className="media wow fadeInDown">
                      <a href="pages/single_page.html" className="media-left">
                        <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/>
                      </a>
                      <div className="media-body">
                        <a href="pages/single_page.html" className="catg_title">Aliquam malesuada diam eget turpis varius 1</a>
                      </div>
                    </div>
                  </li>
                  <li>
                  <div className="media wow fadeInDown"> 
                    <a href="pages/single_page.html" className="media-left"> 
                      <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/> 
                    </a>
                    <div className="media-body"> 
                      <a href="pages/single_page.html" class="catg_title"> Aliquam malesuada diam eget turpis varius 2</a> 
                    </div>
                  </div>
                </li>
                <li>
                  <div className="media wow fadeInDown"> 
                    <a href="pages/single_page.html" className="media-left"> 
                      <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img1.jpg`}/> 
                    </a>
                    <div className="media-body"> 
                      <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 3</a>
                      </div>
                  </div>
                </li>
                <li>
                  <div className="media wow fadeInDown"> 
                    <a href="pages/single_page.html" className="media-left"> 
                      <img alt="" src={`${process.env.PUBLIC_URL}/assets/images/post_img2.jpg`}/>
                    </a>
                    <div class="media-body"> 
                      <a href="pages/single_page.html" className="catg_title"> Aliquam malesuada diam eget turpis varius 4</a> 
                    </div>
                  </div>
                </li>
                </ul>
              </div>

              <div className="single_sidebar">
                <ul className="nav nav-tabs" role="tablist">
                  <li role="presentation" className="active">
                    <a href="#category" aria-controls="home" role="tab" data-toggle="tab">Category</a>
                  </li>
                  <li role="presentation">
                    <a href="#video" aria-controls="profile" role="tab" data-toggle="tab">Video</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div role="tabpanel" className="tab-pane active" id="category">
                    <ul>
                      <li className="cat-item"><a href="#">Sports</a></li>
                      <li className="cat-item"><a href="#">Fashion</a></li>
                      <li className="cat-item"><a href="#">Business</a></li>
                      <li className="cat-item"><a href="#">Technology</a></li>
                    </ul>
                  </div>
                  <div role="tabpanel" className="tab-pane" id="video">
                    <div className="vide_area">
                      <iframe width="100%" height="250" src="http://www.youtube.com/embed/h5QWbURNEpA" frameBorder="0" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="single_sidebar">
                <h2><span>Sponsor</span></h2>
                <a className="sideAdd" href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/add_img.jpg`} alt=""/></a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
