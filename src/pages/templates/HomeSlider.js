// import React from 'react';
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

  
// const CustomSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     fade: true,
//     adaptiveHeight: true
//   };

//   return (
// //     <section class="rev_slider_wrapper slider-2">
// //     <div id="slider2" class="rev_slider" data-height="825" data-version="5.0">
// //         <ul>
// //             <li data-transition="random">
// //                 <img src="img/slides/2-2.jpg" alt="" width="1920" height="705" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1"/>
// //                 <div class="tp-caption  tp-resizeme banner-caption-h1  text-center" data-x="center" data-hoffset="0" data-y="top" data-voffset="230" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="500">
// //                 Découvrez nos programmes 
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme banner-caption-h1 banner-caption-bg text-center" data-x="center" data-hoffset="0" data-y="top" data-voffset="315" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1000">
// //                     <span>GYM & Fitness</span> Template
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme feature-list-item " data-x="center" data-hoffset="-302" data-y="top" data-voffset="415" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1200">
// //                     <div class="icon-box">
// //                         <div class="box">
// //                             <i class="fa fa-database"></i>
// //                         </div>
// //                     </div>
// //                     <div class="text-box">
// //                         <p>Responsive Layout</p>
// //                     </div>
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme feature-list-item " data-x="center" data-hoffset="-289" data-y="top" data-voffset="500" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1400">
// //                     <div class="icon-box">
// //                         <div class="box">
// //                             <i class="fa fa-calculator"></i>
// //                         </div>
// //                     </div>
// //                     <div class="text-box">
// //                         <p>BMI & IWC Calculator </p>
// //                     </div>
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme feature-list-item " data-x="center" data-hoffset="22" data-y="top" data-voffset="415" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1600">
// //                     <div class="icon-box">
// //                         <div class="box">
// //                             <i class="fa fa-codepen"></i>
// //                         </div>
// //                     </div>
// //                     <div class="text-box">
// //                         <p>Premium Plugins Free</p>
// //                     </div>
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme feature-list-item " data-x="center" data-hoffset="16" data-y="top" data-voffset="500" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1800">
// //                     <div class="icon-box">
// //                         <div class="box">
// //                             <i class="fa fa-calendar"></i>
// //                         </div>
// //                     </div>
// //                     <div class="text-box">
// //                         <p>Active Contact Form</p>
// //                     </div>
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme feature-list-item " data-x="center" data-hoffset="318" data-y="top" data-voffset="415" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="2000">
// //                     <div class="icon-box">
// //                         <div class="box">
// //                             <i class="fa fa-users"></i>
// //                         </div>
// //                     </div>
// //                     <div class="text-box">
// //                         <p>MailChimp Support</p>
// //                     </div>
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme feature-list-item " data-x="center" data-hoffset="336" data-y="top" data-voffset="500" data-transform_idle="o:1;" data-transform_in="x:[175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[-100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="2200">
// //                     <div class="icon-box">
// //                         <div class="box">
// //                             <i class="fa fa-calculator"></i>
// //                         </div>
// //                     </div>
// //                     <div class="text-box">
// //                         <p>Free Customer support</p>
// //                     </div>
// //                 </div>
// //             </li>
// //             <li data-transition="random">
// //                 <img src="img/slides/2-1.jpg" alt="" width="1920" height="705" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1"/>
// //                 <div class="tp-caption  tp-resizeme banner-caption-h1  " data-x="right" data-hoffset="0" data-y="top" data-voffset="210" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="500">
// //                     Body Building
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme banner-caption-h1 banner-caption-bg" data-x="right" data-hoffset="-15" data-y="top" data-voffset="305" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1000">
// //                     <span>special</span> Packages
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme banner-caption-p " data-x="right" data-hoffset="10" data-y="top" data-voffset="400" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
// //                     We have a session starting soon – Join now and meet us at Fitness Care GYM
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme  " data-x="right" data-hoffset="0" data-y="top" data-voffset="475" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="2000">
// //                     <p class="price-p">Only for <span>$ 209</span>/ Yearly Plan</p>&emsp;&emsp;<a href="#" class="thm-btn arrow-push-in-right"><span>Buy Now <i class="fa fa-caret-right"></i></span></a>
// //                 </div>
// //             </li>
// //             <li data-transition="random">
// //                 <img src="img/slides/2-3.jpg" alt="" width="1920" height="705" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1"/>
// //                 <div class="tp-caption  tp-resizeme banner-caption-h1  text-center" data-x="center" data-hoffset="0" data-y="top" data-voffset="230" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="500">
// //                     Yoga & Streching
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme banner-caption-h1 banner-caption-bg text-center" data-x="center" data-hoffset="0" data-y="top" data-voffset="315" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1000">
// //                     <span>special</span> Packages
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme banner-caption-p large text-center" data-x="center" data-hoffset="0" data-y="top" data-voffset="420" data-transform_idle="o:1;" data-transform_in="x:[-175%];y:0px;z:0;rX:0;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0.01;s:3000;e:Power3.easeOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-mask_in="x:[100%];y:0;s:inherit;e:inherit;" data-splitin="none" data-splitout="none" data-start="1500">
// //                     We have a session starting soon – Join now and meet us at Fitness Care GYM
// //                 </div>
// //                 <div class="tp-caption  tp-resizeme text-center " data-x="center" data-hoffset="0" data-y="top" data-voffset="495" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="2000">
// //                     <p class="price-p">Only for <span>$ 178</span>/ Yearly Plan</p>&emsp;&emsp;<a href="#" class="thm-btn arrow-push-in-right"><span>Join Now<i class="fa fa-caret-right"></i></span></a>
// //                 </div>
// //             </li>
// //         </ul>
// //     </div>
// // </section>

//     // <section className="rev_slider_wrapper slider-2">
//     //   <Slider {...settings}>
//     //     <div>
//     //       <img src="img/fit6.jpg" alt="Fitness"  />
//     //       <div className="caption-container">
//     //         <h1 className="banner-caption-h1 text-center">Atteignez Vos Objectifs de Fitness</h1>
//     //         <p className="banner-caption-p text-center">Programmes personnalisés de musculation & nutrition</p>
//     //         <div className="button-container text-center">
//     //           <a href="#" className="thm-btn">
//     //             <span>Découvrez nos programmes <i className="fa fa-caret-right"></i></span>
//     //           </a>
//     //         </div>
//     //       </div>
//     //     </div>
//     //     <div>
//     //       <img src="img/fit7.jpg" alt="Yoga & Streching" />
//     //       <div className="caption-container">
//     //         <h1 className="banner-caption-h1 text-center">Maximisez Votre Potentiel</h1>
//     //         <p className="banner-caption-p text-center">Découvrez nos programmes exclusifs de bodybuilding</p>
//     //         <div className="button-container text-center">
//     //           <a href="#" className="thm-btn">
//     //             <span>Commencez aujourd'hui <i className="fa fa-caret-right"></i></span>
//     //           </a>
//     //         </div>
//     //       </div>
//     //     </div>
//     //   </Slider>
//     // </section>
//   );
// }

// export default CustomSlider;
