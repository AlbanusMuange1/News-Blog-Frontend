import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="container">
        <section id="navArea">
          <nav className="navbar navbar-inverse" role="navigation">
            {/* <div className="navbar-header">
              <button 
                type="button" 
                className="navbar-toggle collapsed" 
                data-toggle="collapse" 
                data-target="#navbar" 
                aria-expanded="false" 
                aria-controls="navbar"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
            </div> */}
            <div id="navbar" className="navbar-collapse collapse">
              <ul className="nav navbar-nav main_nav">
                <li className="active">
                  <Link to="/">
                    <span className="fa fa-home desktop-home"></span>
                    <span className="mobile-show">Home</span>
                  </Link>
                </li>
                <li><Link to="/politics">Politics</Link></li>
                <li><Link to="/business">Business</Link></li>
                <li><Link to="/lifestyle">Lifestyle & Society</Link></li>
                <li><Link to="/technology">Technology</Link></li>
                <li><Link to="/sports">Sports & Entertainment</Link></li>
              </ul>
            </div>
          </nav>
        </section>
    </div>
  );
};

export default Navbar;
