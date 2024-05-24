import React, { useState } from 'react';
import Nav1 from '../templates/nav1';  
import Nav2 from '../templates/nav2';  

const SCHEDULE = {
    days: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    events: [
        {
          day: "Dimanche",
          sessions: [
            { id: 1, type: 'Fitness', name: 'Bilan de fitness', time: '7h00 - 7h30', trainer: 'B.Reda', level: 'Débutant' },
            { id: 2, type: 'Musculation', name: 'Musculation', time: '7h30 - 9h00', trainer: 'B. Alae', level: 'Avancé' }
          ]
        },
        {
          day: "Lundi",
          sessions: [
            { id: 1, type: 'Yoga', name: 'Cours de Yoga', time: '7h00 - 7h30', trainer: 'D.Oumaima', level: 'Avancé' },
            { id: 2, type: 'Fitness', name: 'Fitness Power', time: '7h30 - 9h00', trainer: 'S.Yassmine', level: 'Expert' }
          ]
        },
      {
        day: "Mardi",
        sessions: [
          { id: 1, type: 'Échauffement', name: 'Séance d\'échauffement', time: '7h00 - 8h30', trainer: 'B.Alae', level: 'Expert' },
          { id: 2, type: 'Haltérophilie', name: 'Haltérophilie', time: '9h00 - 10h30', trainer: 'B.Alae', level: 'Expert' }
        ]
      },
      {
        day: "Mercredi",
        sessions: [
          { id: 1, type: 'Musculation', name: 'Séance de musculation', time: '10h00 - 12h00', trainer: 'B.Reda', level: 'Expert' }
        ]
      },
      {
        day: "Jeudi",
        sessions: [
          { id: 1, type: 'Fitness', name: 'Fitness Checkup', time: '7h00 - 7h30', trainer: 'B.Reda', level: 'Expert' },
          { id: 2, type: 'Musculation', name: 'Musculation Intensive', time: '7h30 - 9h00', trainer: 'B.Alae', level: 'Expert' }
        ]
      },
      {
        day: "Vendredi",
        sessions: [
          { id: 1, type: 'Yoga', name: 'Yoga et Étirements', time: '7h00 - 7h30', trainer: 'S.Yassmine', level: 'Expert' },
          { id: 2, type: 'Fitness', name: 'Cardio Fitness', time: '7h30 - 9h00', trainer: 'B.Reda', level: 'Expert' }
        ]
      },
      {
        day: "Samedi",
        sessions: [
          { id: 1, type: 'Échauffement', name: 'Routine d\'échauffement', time: '7h00 - 8h00', trainer: 'B.Alae', level: 'Expert' },
        ]
      }
    ]
  };
  const DayColumn = ({ day, sessions, filter }) => {
    // Applique le filtre pour les sessions ou montre toutes les sessions si 'Tous' est sélectionné
    const visibleSessions = filter === 'Tous'
        ? sessions
        : sessions.filter(session => session.type === filter);

    return (
        <td>
            <h3>{day}</h3>
            {visibleSessions.map((session, index) => (
                <div 
                    className="schedule-table-item" 
                    key={session.id}
                    style={{
                        borderBottom: index !== visibleSessions.length - 1 ? '1px solid #ccc' : 'none', // Bordure pour toutes sauf la dernière session
                        padding: '10px'
                    }}
                >
                    <h4>{session.name}</h4>
                    <ul>
                        <li className="time"><i className="fa fa-clock-o"></i> {session.time}</li>
                        <li><i className="fa fa-user"></i> Formateur: {session.trainer}</li>
                        <li><i className="fa fa-signal"></i> Niveau: {session.level}</li>
                    </ul>
                </div>
            ))}
        </td>
    );
};


const ScheduleTable = ({ filter }) => {
    return (
        <table className="table schedule-table">
            <thead>
                <tr>
                    {SCHEDULE.days.map(day => (
                        <th key={day}>{day}</th> // Affiche chaque jour une seule fois dans l'en-tête
                    ))}
                </tr>
            </thead>
            <tbody>
                <tr>
                    {SCHEDULE.days.map(day => {
                        const dayInfo = SCHEDULE.events.find(d => d.day === day);
                        return (
                            <DayColumn key={day} day={day} sessions={dayInfo ? dayInfo.sessions : []} filter={filter} />
                        );
                    })}
                </tr>
            </tbody>
        </table>
    );
};

  
  
const Page = () => {
    const [activeFilter, setActiveFilter] = useState('Tous');
    const filters = ['Tous', 'Échauffement', 'Fitness', 'Musculation', 'Yoga', 'Haltérophilie', 'Boxe', 'Entraînement'];

    return (
        <div className="main-wrapper">
            <Nav1 />
            <div className="page-wrapper">
                <Nav2 />
                <div className="page-content">
                    <div className="row">
                        <section className="section-padding schedule-area">
                            <div className="container">
                                <div className="section-title text-center">
                                    <h1><span>Calendrier des Programmes</span></h1>
                                </div>
                                <div className="intro-text text-center">
                                    <p>Découvrez nos programmes variés et choisissez celui qui vous convient le mieux pour atteindre vos objectifs de santé et de bien-être !</p>
                                    <ul className="benefits-list">
                                        <li><i className="fa fa-person-running"></i> Programmes personnalisés selon votre niveau</li>
                                        <li><i className="fa fa-users"></i> Sessions encadrées par des experts</li>
                                        <li><i className="fa fa-apple-alt"></i> Conseils nutritionnels pour optimiser votre entraînement</li>
                                        <li><i className="fa fa-heartbeat"></i> Suivi de la progression et ajustements en temps réel</li>
                                        <li><i className="fa fa-calendar-check"></i> Planifications adaptées à votre emploi du temps</li>
                                    </ul>
                                </div>
                                <ul className="schedule-filter gallery-filter list-inline text-center">
                                    {filters.map(filter => (
                                        <li key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>
                                            <span>{filter}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="table-responsive">
                                    <ScheduleTable filter={activeFilter} />
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                <section className="footer-bottom-area" style={{ background: 'rgb(249, 250, 251)'}}>
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="clearfix">
                                <div className="pull-left">
                                    <div className="copy-right">
                                        <p>© Harmonize Fit 2024 copy right reserved</p>
                                    </div>
                                </div>
                                <div className="pull-right">
                                    <div className="social-links">
                                        <a href="https://www.facebook.com/profile.php?id=61553821391447"><i className="fa fa-facebook myfbpd"></i></a>
                                        <a href="https://www.instagram.com/harmonizefit"><i className="fa fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Page;
