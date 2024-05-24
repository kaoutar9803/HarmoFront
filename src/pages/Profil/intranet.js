import React from 'react';
import Nav1 from '../templates/nav1';   
import Nav2 from '../templates/nav2';   
import Table from '../templates/table'; 
import Dashboard from './dashboard.js'; 
import Chatbot from './chat';

function intranet() {
    return (
        <div className="main-wrapper">
            <Nav1 />
            <div className="page-wrapper">
                <Nav2 />
                <div className="page-content">
                    <div className="row">
                        <Dashboard />
                    </div>
                    <div className="row"> 
                        <Chatbot />
                    </div>
                </div>
                <section class="footer-bottom-area" style={{ background: 'rgb(249, 250, 251)'}}>
        <div class="container ">
            <div class="footer-bottom" >
                <div class="clearfix">
                    <div class="pull-left">
                        <div class="copy-right">
                            <p>© Harmonize Fit 2024</p>
                        </div>
                    </div>
                    <div class="pull-right">
                        <div class="social-links">
                            <a href="https://www.facebook.com/profile.php?id=61553821391447"><i
                                    class="fa fa-facebook myfbpd"></i></a>
                            <a
                                href="#https://www.instagram.com/harmonizefit?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><i
                                    class="fa fa-instagram"></i></a>
                                      <a href="https://www.youtube.com/@HarmonizeFit"><i class="fa fa-youtube"></i></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

            </div>
        </div>
    );
}

export default intranet;
