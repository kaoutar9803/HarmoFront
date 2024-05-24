import React, { useEffect } from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

export default function Index() {

  const trainingDays = [
    {
      day: "Dimanche",
      sessions: [
        { time: "7h00 - 7h30", name: "Bilan de fitness", trainer: "B.Bader", level: "Expert" },
        { time: "7h30 - 9h00", name: "Musculation", trainer: "B.Alae", level: "Expert" },
        { image: "img/gallery-5.jpg" }
      ]
    },
    {
      day: "Lundi",
      sessions: [
        { time: "7h00 - 7h30", name: "Cours de Yoga", trainer: "D.Oumaima", level: "Avancé" },
        { time: "7h30 - 9h00", name: "Fitness Power", trainer: "S.Yassmine", level: "Expert" },
        { image: "img/yoga.jpg" }
      ]
    },
    {
      day: "Mardi",
      sessions: [
        { time: "7h00 - 8h30", name: "Séance d'échauffement", trainer: "B.Alae", level: "Expert" },
        { time: "9h00 - 10h30", name: "Haltérophilie", trainer: "B.Alae", level: "Expert" },
        { image: "img/victor-freitas-WvDYdXDzkhs-unsplash.jpg" }
      ]
    }
  ];

  

  return (
    <div>
      <>
      <section class="rev_slider_wrapper slider-2">
    <div id="slider2" class="rev_slider" data-height="825" data-version="5.0">
        <ul>

            <li data-transition="random">
                <img src="img/fit6.jpg" alt="" width="1920" height="705" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1"/>

                <div className="tp-caption tp-resizeme banner-caption-h1 banner-caption-bg" data-x="right" data-hoffset="-30" data-y="top" data-voffset="305" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1000">
                  <div style={{ marginBottom: '20px' }}>
                      <span>Atteignez </span> Vos Objectifs de Fitness
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 'bolder', clear: 'both', textAlign: 'center' }}>
                      Programmes personnalisés de musculation & nutrition
                  </div>
                  <div style={{ clear: 'both', textAlign: 'center' }}>
                      <a href="/register" className="thm-btn arrow-push-in-right"><span>Découvrez nos programmes<i className="fa fa-caret-right"></i></span></a>
                  </div>
              </div>
            </li>
            <li data-transition="random">
                <img src="img/fit7.jpg" alt="" width="1920" height="705" data-bgposition="top center" data-bgfit="cover" data-bgrepeat="no-repeat" data-bgparallax="1"/>
                <div className="tp-caption tp-resizeme banner-caption-h1 banner-caption-bg" data-x="center" data-hoffset="-30" data-y="top" data-voffset="305" data-transform_idle="o:1;" data-transform_in="y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;s:2000;e:Power4.easeInOut;" data-transform_out="s:1000;e:Power3.easeInOut;s:1000;e:Power3.easeInOut;" data-splitin="none" data-splitout="none" data-responsive_offset="on" data-start="1000">
                  <div style={{ marginBottom: '20px' }}>
                      <span>Maximisez </span>  Votre Potentiel
                  </div>
                  <div style={{ fontSize: '24px', fontWeight: 'bolder', clear: 'both', textAlign: 'center' }}>
                  Découvrez nos programmes exclusifs de bodybuilding 
                  </div>
                  <div style={{ clear: 'both', textAlign: 'center' }}>
                      <a href="/register" className="thm-btn arrow-push-in-right"><span>Découvrez nos programmes<i className="fa fa-caret-right"></i></span></a>
                  </div>
              </div>
            </li>
        </ul>
    </div>
      </section>
     <section className="fitness-services-boxed">
            <div className="container">
                <div className="clearfix">
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="single-fitness-service">
                            <i className="fc-icon ftc-icon-yoga13"></i>
                            <h3>Yoga & Méditation</h3>
                            <div className="single-fitness-service-details">
                                <div className="img-box">
                                    <img src="img/meditation.jpg" alt="Harmonize Fit" />
                                    <div className="overlay">
                                        <div className="content">
                                            <div className="box">
                                                <Link to="/register"><i className="fa fa-share"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-box clearfix">
                                    <div className="pull-left">
                                        <h3>Yoga & Méditation</h3>
                                    </div>
                                    <div className="pull-right">
                                        <i className="fc-icon ftc-icon-yoga13"></i>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <p>Rejoignez nos cours de yoga et méditation pour améliorer votre flexibilité, réduire le stress et trouver un équilibre intérieur. Nos séances sont adaptées à tous les niveaux et vous aident à renforcer votre corps et votre esprit.</p>
                                </div>
                                <div className="bottom-box clearfix">

                                    <div className="pull-right">
                                        <Link to="/register" className="flip-flop-btn"><span data-hover="Rejoignez-nous">Rejoignez-nous</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="single-fitness-service">
                            <i className="fc-icon ftc-icon-weightlifter3"></i>
                            <h3>Activité Physique</h3>
                            <div className="single-fitness-service-details">
                                <div className="img-box">
                                    <img src="img/phisique.jpg" alt="Harmonize Fit" />
                                    <div className="overlay">
                                        <div className="content">
                                            <div className="box">
                                                <Link to="/register"><i className="fa fa-share"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-box clearfix">
                                    <div className="pull-left">
                                        <h3>Activité Physique</h3>
                                    </div>
                                    <div className="pull-right">
                                        <i className="fc-icon ftc-icon-weightlifter3"></i>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <p>Découvrez nos programmes d'activité physique conçus pour tous les niveaux. Que vous soyez débutant ou avancé, nos entraîneurs vous guideront à travers des exercices qui augmenteront votre force, votre endurance et votre santé générale.</p>
                                </div>
                                <div className="bottom-box clearfix">

                                    <div className="pull-right">
                                        <Link to="/register" className="flip-flop-btn"><span data-hover="Rejoignez-nous">Rejoignez-nous</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="single-fitness-service">
                            <i className="fc-icon ftc-icon-trophy"></i>
                            <h3>Perte/Gain Poids</h3>
                            <div className="single-fitness-service-details">
                                <div className="img-box">
                                    <img src="img/perte.jpg" alt="Harmonize Fit" />
                                    <div className="overlay">
                                        <div className="content">
                                            <div className="box">
                                                <Link to="/register"><i className="fa fa-share"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-box clearfix">
                                    <div className="pull-left">
                                        <h3>Perte/Gain Poids</h3>
                                    </div>
                                    <div className="pull-right">
                                        <i className="fc-icon ftc-icon-trophy"></i>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <p>Des programmes sur mesure pour atteindre vos objectifs de poids, adaptés à votre style de vie, que ce soit pour perdre ou gagner du poids de manière saine et durable.</p>
                                </div>
                                <div className="bottom-box clearfix">
                                    <div className="pull-right">
                                        <Link to="/register" className="flip-flop-btn"><span data-hover="Rejoignez-nous">Rejoignez-nous</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6 col-xs-12">
                        <div className="single-fitness-service">
                            <i className="fc-icon ftc-icon-kickboxing"></i>
                            <h3>Nutrition Saine</h3>
                            <div className="single-fitness-service-details">
                                <div className="img-box">
                                    <img src="img/nutrition.jpg" alt="Harmonize Fit" />
                                    <div className="overlay">
                                        <div className="content">
                                            <div className="box">
                                                <Link to="/register"><i className="fa fa-share"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="top-box clearfix">
                                    <div className="pull-left">
                                        <h3>Nutrition Saine</h3>
                                    </div>
                                    <div className="pull-right">
                                        <i className="fc-icon ftc-icon-kickboxing"></i>
                                    </div>
                                </div>
                                <div className="content-box">
                                    <p>Adoptez une alimentation équilibrée avec nos programmes de nutrition conçus pour améliorer votre santé et votre bien-être. Nos plans sont élaborés par des nutritionnistes certifiés pour vous aider à manger mieux au quotidien.</p>
                                </div>
                                <div className="bottom-box clearfix">
                                    <div className="pull-right">
                                        <Link to="/register" className="flip-flop-btn"><span data-hover="Rejoignez-nous">Rejoignez-nous</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </section> 


    <section class="fitness-service-round-icon">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="single-fitness-service-round-icon">
                        <div class="icon-box">
                            <i class="fc-icon ftc-icon-dumbbell"></i>
                        </div>
                        <h3>Vidéos Instructionnelles</h3>
                        <p>Profitez de nos vidéos pédagogiques pour maîtriser parfaitement chaque exercice. Nos formateurs experts vous accompagnent visuellement, garantissant une exécution précise et sécurisée. Suivez nos conseils étape par étape et transformez votre pratique.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-fitness-service-round-icon">
                        <div class="icon-box">
                            <i class="fc-icon ftc-icon-calendar"></i>
                        </div>
                        <h3>Calendriers d'Entraînement</h3>
                        <p>Nos calendriers d'entraînement personnalisés vous guident jour après jour vers vos objectifs de forme physique. Chaque jour franchi est une étape de plus vers votre transformation. Restez motivé avec notre plan clair et structuré.</p>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="single-fitness-service-round-icon">
                        <div class="icon-box">
                            <i class="fc-icon ftc-icon-music-player"></i>
                        </div>
                        <h3>Assistance Équipe Disponible</h3>
                        <p>Notre équipe de formateurs passionnés est à votre disposition pour vous assurer une expérience fitness sans faille. Bénéficiez d'un accompagnement personnalisé et constant, accessible en tout temps pour répondre à vos questions et booster votre motivation.</p>
                    </div>
                </div>
            </div>
        </div>
    </section> 

    <section class="join-now-area">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="join-now text-center">
                        <h1>Une nouvelle session commence bientôt – Rejoignez-nous chez Harmonize Fit pour transformer votre vie !</h1>
                        <div class="button">
                            <a class="thm-btn arrow-push-out-right borderd " href="/register"><span>Inscrivez-vous <i class="fa fa-caret-right"></i></span></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="fitness-video-area section-padding">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-6">
                    <div class="video-box">
                        <div class="inner-box">
                            <ul class="img-list">
                                <li class="active" data-video-img="img/wtsp2.jpeg" data-video-url="https://www.youtube.com/watch?v=DhPp-UsThyc"><img src="img/wtsp8.jpeg" style={{ width: '273px', height: '260px' }} alt="" /></li>
                                <li data-video-img="img/video-gallery/main-2.jpg" data-video-url="https://www.youtube.com/watch?v=DhPp-UsThyc"><img src="img/wtsp4.jpeg" style={{ width: '265px', height: '260px' }} alt="" /></li>
                                <li data-video-img="img/video-gallery/main-3.jpg" data-video-url="https://www.youtube.com/watch?v=DhPp-UsThyc"><img src="img/wtsp2.jpeg" style={{ width: '347px', height: '300px' }} alt="" /></li>
                            </ul>
                            <div class="main-box">
                                <div class="img-box">
                                    <img src="img/wtsp7.jpeg" style={{ width: '545px', height: '400px' }}  alt="Harmonize Fit" />
                                    <div class="overlay">
                                        <div class="box-content">
                                            <div class="content">
                                                <a class="play-video video-fancybox" href="https://www.youtube.com/watch?v=DhPp-UsThyc"><img src="img/resources/video-play.png" alt="Harmonize Fit" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul class="navigation vid-nav">
                                <li><a data-dir="prev" href="#"><i class="fa fa-angle-left"></i></a></li>
                                <li><a data-dir="next" href="#"><i class="fa fa-angle-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5 col-md-6">
                  <div class="right-text">
                      <h3>Dépassez vos Limites avec Harmonize Fit</h3>
                      <p>Plongez au cœur d'une expérience fitness révolutionnaire avec Harmonize Fit, où chaque entraînement est conçu pour harmoniser corps et esprit. Nos séances de fitness ne se contentent pas de sculpter votre physique, elles transforment également votre bien-être intérieur.</p>
                      <br/><ul>
                          <li><strong>Programmes Personnalisés :</strong> Adaptés à vos objectifs de perte ou gain de poids, amélioration de la santé globale, avec un suivi précis et empathique.</li>
                          <li><strong>Cours de Yoga et Méditation :</strong> Intégrez calme et sérénité dans votre routine, améliorez la flexibilité et renforcez la concentration mentale.</li>
                          <li><strong>Nutrition Équilibrée :</strong> Un plan nutritionnel complet pour nourrir votre corps de l'intérieur, avec le soutien de nos experts.</li>
                          <li><strong>Soutien Continu :</strong> Vous n'êtes jamais seul, notre communauté et nos coachs sont là pour vous motiver et vous conseiller.</li>
                      </ul>
                      <br />
                      <h4>VOTRE SUCCÈS EST NOTRE PASSION</h4>
                  </div>
              </div>
            </div>
        </div>
    </section>
 
  {/* /.fitness-service-round-icon */}
   <section className="section-padding package-area" id="packs">
      <div className="container">
        <div className="section-title text-center">
          <h1><span>Packs de Bien-être</span></h1>
        </div>
        <div className="table-responsive">
          <table className="table pricing-table text-center">
            <thead>
                        <tr>
                            <td class="pattern-4">
                                <h3>Programmes</h3>
                            </td>
                            <td class="pattern-3">
                                <h4>Pack Basique</h4>
                               
                            </td>
                            <td class="pattern-5">
                                <h4>Pack Intermédiaire</h4>
                              
                            </td>
                            <td class="pattern-6">
                                <h4>Pack Premium</h4>

                            </td>
                        </tr>
                    </thead>
            <tbody>
              {/* Programme de Perte de Poids */}
              <tr>
                <td><p>Programme de Perte de Poids</p></td>
                <td>
                  <p>Plan nutritionnel de 4 semaines<br/>
                  Exercices de base<br/>
                  Accès à un forum de soutien<br/>
                  Prix : 500 Dh</p>
                </td>
                <td>
                  <p>Plan nutritionnel de 8 semaines<br/>
                  Programme d'exercices détaillé<br/>
                  Suivi hebdomadaire par un coach<br/>
                  Accès à un forum de soutien<br/>
                  Prix : 1000 Dh</p>
                </td>
                <td>
                  <p>Plan nutritionnel personnalisé de 12 semaines<br/>
                  Programme d'exercices avancé<br/>
                  Suivi bi-hebdomadaire par un coach<br/>
                  Prix : 2000 Dh</p>
                </td>
              </tr>
              {/* Programme de Prise de Poids */}
              <tr>
                <td><p>Programme de Prise de Poids</p></td>
                <td>
                  <p>Plan nutritionnel de 4 semaines pour prise de poids<br/>
                  Exercices de base<br/>
                  Accès à un forum de soutien<br/>
                  Prix : 500 Dh</p>
                </td>
                <td>
                  <p>Plan nutritionnel de 8 semaines pour prise de poids<br/>
                  Programme d'exercices détaillé<br/>
                  Suivi hebdomadaire par un coach<br/>
                  Accès à un forum de soutien<br/>
                  Prix : 1000 Dh</p>
                </td>
                <td>
                  <p>Plan nutritionnel personnalisé de 12 semaines pour prise de poids<br/>
                  Programme d'exercices avancé<br/>
                  Suivi bi-hebdomadaire par un coach<br/>
                  Prix : 2000 Dh</p>
                </td>
              </tr>
              {/* Programme de Musculation */}
              <tr>
                <td><p>Programme de Musculation</p></td>
                <td>
                  <p>Programme d'entraînement de 4 semaines<br/>
                  Plan nutritionnel de base<br/>
                  Accès à un forum de soutien<br/>
                  Prix : 600 Dh</p>
                </td>
                <td>
                  <p>Programme d'entraînement de 8 semaines<br/>
                  Plan nutritionnel intermédiaire<br/>
                  Suivi hebdomadaire par un coach<br/>
                  Accès à un forum de soutien<br/>
                  Prix : 1200 Dh</p>
                </td>
                <td>
                  <p>Programme d'entraînement personnalisé de 12 semaines<br/>
                  Plan nutritionnel avancé<br/>
                  Suivi bi-hebdomadaire par un coach<br/>
                  Prix : 2500 Dh</p>
                </td>
              </tr>
              <tr class="button-row">
                            <td></td>
                            <td><a href="/register" class="flip-flop-btn"><span data-hover="Inscrivez-vous ">Inscrivez-vous </span></a></td>
                            <td><a href="/register" class="flip-flop-btn"><span data-hover="Inscrivez-vous ">Inscrivez-vous </span></a></td>
                            <td><a href="/register" class="flip-flop-btn"><span data-hover="Inscrivez-vous ">SInscrivez-vous </span></a></td>
                        </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  {/* /.fitness-team-style-two */}

  <section className="workout-schedules-area" id="evenements">
      <div className="container">
        <div className="section-title">
          <h1><span>Programmes d'entraînement quotidien</span></h1>
        </div>
        <div className="row">
          {trainingDays.map((day, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
              <div className="single-item">
                <div className="img-holder">
                  <img src={day.sessions[2].image} alt={`Jour ${day.day}`} />
                  <div className="overlay">
                    <div className="icon-holder">
                      <a href="/register"><i className="fa fa-share" /></a>
                    </div>
                  </div>
                  <div className="date">
                    <h4>{`Jour ${index + 1}`}</h4>
                  </div>
                </div>
                <div className="content">
                  {day.sessions.slice(0, 2).map((session, sIndex) => (
                    <div key={sIndex}>
                      <h3>{session.name} <span>({session.level})</span></h3>
                      <ul>
                        <li><i className="fa fa-clock-o" /> {session.time}</li>
                        <li><i className="fa fa-user" /> {session.trainer}</li>
                      </ul>
                    </div>
                  ))}
                  <a href="/register" className="arrow-push-out-right">
                    <span>Voir les details<i className="fa fa-caret-right" /></span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>



    <section className="pattern-4 section-padding">
  <div className="container">
    <div className="row">
      <div className="col-md-1"></div>
      <div className="col-md-10">
        <div className="section-title text-left">
          <h1  class="centered-content">
            <span>
              Obtenez un devis personnalisé
            </span>
          </h1>
          <br/>
   
        </div>
      </div>
      <div className="col-md-1"></div>
    </div>
    <div className="row mt-5">
      <div className="col-md-4">
        <div className="benefit-box text-center">
      <h3>Rapide et Facile</h3>
          <p>Remplissez notre formulaire en quelques minutes et recevez votre devis rapidement.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="benefit-box text-center">
          <h3>Personnalisé</h3>
          <p>Obtenez un devis qui correspond parfaitement à vos besoins et objectifs.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="benefit-box text-center">
          <h3>Support Dédié</h3>
          <p>Notre équipe est là pour répondre à toutes vos questions et vous accompagner.</p>
        </div>
      </div>
    </div>
    <br/>
    <div className="row mt-5">
      <div className="col-md-12 text-center">
        <h2>Comment ça marche ?</h2> <br/>
      </div>

     
      <div className="col-md-4">
        <div className="step-box text-center">
          <h4>1. Inscrivez Vous</h4>
          <p>Complétez le formulaire avec vos informations et vos objectifs.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="step-box text-center">
          <h4>2. Soumettez Votre Demande</h4>
          <p>Envoyez votre formulaire et notre équipe traitera votre demande.</p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="step-box text-center">
          <h4>3. Recevez Votre Devis</h4>
          <p>Vous recevrez votre devis personnalisé par email sous 48 heures.</p>
        </div>
      </div>
    </div>

    <div className="row mt-5">
      <div className="col-md-12 text-center">
        <a href="/register" className="btn btn-primary btn-lg">Commencer Maintenant</a>
      </div>
    </div>
  </div>
</section>
  <section className="perfect-plan-area">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-3">
          <div className="perfect-plan-left">
            <div className="img-holder">
              <img src="img/class-4.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-9">
          <div className="perfect-plan-right">
            <h2>Choisissez votre plan parfait et suivez vos entraînements</h2>
            <span>
              Retrouvez des amis et des passionnés de fitness sur BodySpace !
              Avec une armée de supporters derrière vous, vous ne vous sentirez
              jamais seul dans votre entraînement.
            </span>
            <ul>
              <li>
                <i className="fa fa-check" />
                Application de fitness que tout le monde adore
              </li>
              <li>
                <i className="fa fa-check" />
                Contrôlez les changements pour obtenir les meilleurs résultats
              </li>
              <li>
                <i className="fa fa-check" />
                Obtenez votre dose de fitness dès maintenant
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

    </div>
  )
}
