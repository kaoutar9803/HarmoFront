import React from 'react'

function Footer() {
  return (
<div>

<footer className="footer-area">
  <div className="container">
    <div className="row">
      {/*Start single footer widget*/}
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="single-footer-widget">
          <div className="footer-logo">
            <a href="#">
              <img
                alt="Image impressionnante"
                src="img/logo1.png"
                width="100px"
              />
            </a>
          </div>
          <div className="caption-text">
            <p>
              Votre transformation est notre passion. Nous sommes vos
              entraîneurs personnels.
            </p>
            <a className="thm-btn arrow-push-out-right" href="/register">
              <span>
                S'inscrire maintenant <i className="fa fa-caret-right" />
              </span>
            </a>
          </div>
        </div>
      </div>
      {/*End single footer widget*/}
      {/*Start single footer widget*/}
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="single-footer-widget">
          <h3 className="title">Liens rapides</h3>
          <ul className="quick-links ">
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">À propos de nous</a>
            </li>
            <li>
              <a href="#">Actualités &amp; Conseils</a>
            </li>
            <li>
              <a href="#">Événements</a>
            </li>
            <li>
              <a href="#">Nos offres</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Boutique</a>
            </li>
          </ul>
        </div>
      </div>
      {/*End single footer widget*/}
      {/*Start single footer widget*/}
   
      {/*End single footer widget*/}
      <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
        <div className="single-footer-widget">
          <h3 className="title">Contactez-nous</h3>
          <ul className="contact">
            <li>
              <div className="icon-holder">
                <i className="fa fa-map-marker" />
              </div>
              <div className="text">
                <p>
                  14 Tottenham Road, N1 4EP
                  <br /> Londres, Royaume-Uni
                </p>
              </div>
            </li>
            <li>
              <div className="icon-holder">
                <i className="fa fa-phone" />
              </div>
              <div className="text">
                <p>Appelez nous : +33603317435</p>
              </div>
            </li>
            <li>
              <div className="icon-holder">
                <i className="fa fa-envelope" />
              </div>
              <div className="text">
                <p>contact@harmonizefit.com</p>
              </div>
            </li>
            <li>
              <div className="icon-holder">
                <i className="fa fa-clock-o" />
              </div>
              <div className="text">
                <p>
                  Jours ouvrables : 05:00 – 22:00
                  <br />
                  Samedi : 08:00 – 18:00
                  <br />
                  Dimanche : 08:00 – 12:00
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
   
<section class="footer-bottom-area">
        <div class="container ">
            <div class="footer-bottom">
                <div class="clearfix">
                    <div class="pull-left">
                        <div class="copy-right">
                            <p>© Harmonize Fit 2024 copy right reserved</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61553821391447"><i
                                    class="fa fa-facebook myfbpd"></i></a>
                            <a
                                href="#https://www.instagram.com/harmonizefit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i
                                    class="fa fa-instagram"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</div>
  )
}

export default Footer;
