import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState('');

    const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

    // Function to handle clicking on menu items
    const handleMenuClick = (menuName) => {
        // Toggle the active menu: if it's already active, deactivate it; otherwise, activate it.
        setActiveMenu(activeMenu === menuName ? '' : menuName);
    };

    return (

      <header class="header header-v2 stricky">
      <div class="header-top">
          <div class="container">
              <div class="row">
                  <div class="col-lg-9 col-md-12 pull-right">
                      <div class="top-info">
                          <div class="clearfix">
                          <ul className="contact-info pull-left">
                                        <li><span><i className="fc-icon ftc-icon-email"></i> Contact@harmonizefit.com</span></li>
                                        <li><span><i className="fc-icon ftc-icon-phone-contact"></i> Appelez nous: +33603317435</span></li>
                                    </ul>
                              <ul class="social pull-right">
                                  <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                  <li><a href="https://www.instagram.com/harmonizefit/"><i class="fa fa-instagram"></i></a></li>
                                  <li><a href="https://www.youtube.com/@HarmonizeFit"><i class="fa fa-youtube"></i></a></li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <div class="container">
          <nav class="navigation clearfix">
              <div id="menuzord" class="menuzord">
                  <a href="/" class="menuzord-brand">
                  <img src="/img/logo1.png" alt="Harmonize Fit" style={{ width: '99px', marginTop: '-41px' }}/>
                  </a>
                  <ul class="menuzord-menu">
                      <li>
                          <a href="/" class="flip-flop-btn"><span data-hover="Accueil">Accueil</span></a>

                      </li>
                      <li>
                          <a href="#packs" class="flip-flop-btn"><span data-hover="Nos Packs">Nos Packs</span></a>
                      
                      </li>
                     
  

                      <li><a href="#evenements" class="flip-flop-btn"><span data-hover="Evenements">Evenements</span></a></li>
                      <li><a href="/apropos" class="flip-flop-btn"><span data-hover="A propos">A propos</span></a></li>

                      <li><a href="/contact" class="flip-flop-btn"><span data-hover="Contact">Contact</span></a></li>
                      <li><a href="/login" className="flip-flop-btn"><span data-hover="Connexion">Connexion</span></a></li>
                      <li><a href="/register" className="flip-flop-btn"><span data-hover="Inscription">Inscription</span></a></li>
                      <li class="search-button">
                          <a data-toggle="collapse" href="#search-box" aria-expanded="false" aria-controls="search-box"><i class="fa fa-search"></i> <span class="text">Search</span></a>
                      </li>
                  </ul>
              </div>
          </nav>
      </div>
      <div class="search-box collapse" id="search-box">
          <div class="container">
              <form action="#">
                  <input type="text" placeholder="To Search Start Typing..."/>
              </form>
          </div>
      </div>
      </header>
      
    );
}

export default Header;
