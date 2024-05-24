import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../templates/card.css'; 

function Dashboard() {
    const [objectifs, setObjectifs] = useState([]);
    const [activites, setActivites] = useState([]);
    const [suivis, setSuivis] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            console.error('Token JWT manquant');
            setLoading(false);
            return;
        }

        const fetchObjectifs = async () => {
            try {
                const { data } = await axios.get('https://api.harmonizefit.com/api/objectifs', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setObjectifs(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des objectifs', error);
            }
        };

        const fetchActivites = async () => {
            try {
                const { data } = await axios.get('https://api.harmonizefit.com/api/activites', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setActivites(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des activités', error);
            }
        };

        const fetchSuivis = async () => {
            try {
                const { data } = await axios.get('https://api.harmonizefit.com/api/suivi', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setSuivis(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des suivis', error);
            }
        };

        fetchObjectifs();
        fetchActivites();
        fetchSuivis();
        setLoading(false);
    }, []);

    if (loading) {
        return <div>Chargement...</div>;
    }

    return (
        <div className="container mt-5">
        <div className="intro-text mb-5">
        <div className="motivation">
            <h2 style={{ color: '#28ad6c' }}>Votre parcours commence ici !</h2>
            <p>
                Chaque jour est une nouvelle opportunité pour vous améliorer. Que vous soyez en train de brûler des calories,
                de gagner en masse musculaire ou simplement de rester en forme, chaque petit pas compte.
            </p>
            <p className="quote">
                "Le seul mauvais entraînement est celui que vous n'avez pas fait."
            </p>
        </div>
            </div>

        <div className="row">
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: '34rem' }}>
                    <img src="/img/obje.jpg" className="card-img-top" alt="Chicago Skyscrapers" />
                    <div className="card-body">
                        <h2 className="card-title" style={{ textAlign: 'center', color: '#28ad6c' }}>Objectifs</h2>
                        <p className="card-text" style={{ textAlign: 'center'}}>Vos objectifs actuels pour atteindre vos buts de fitness.</p>
                    </div>
                    <ul className="list-group list-group-light list-group-small" style={{ textAlign: 'center'}}>
                        {objectifs.map((objectif, index) => (
                            <li className="list-group-item px-4" key={index}>
                                <strong>Type:</strong> {objectif.type_objectif}<br />
                                <strong>Valeur cible:</strong> {objectif.valeur_cible}<br />
                                <strong>Date début:</strong> {objectif.date_debut}<br />
                                <strong>Date fin:</strong> {objectif.date_fin}<br />
                                <strong>Statut:</strong> {objectif.statut}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: '34rem' }}>
                    <img src="/img/activite.jpg" className="card-img-top" alt="Chicago Skyscrapers" />
                    <div className="card-body">
                        <h2 className="card-title"  style={{ textAlign: 'center', color: '#28ad6c' }}>Activités Récentes</h2>
                        <p className="card-text" style={{ textAlign: 'center'}}>Les dernières activités que vous avez réalisées.</p>
                    </div>
                    <ul className="list-group list-group-light list-group-small" style={{ textAlign: 'center'}}>
                        {activites.map((activite, index) => (
                            <li className="list-group-item px-4" key={index}>
                                <strong>Type:</strong> {activite.type_activite}<br />
                                <strong>Date:</strong> {activite.date}<br />
                                <strong>Durée:</strong> {activite.duree} minutes<br />
                                <strong>Calories brûlées:</strong> {activite.calories} kcal
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="col-md-4 mb-4">
                <div className="card" style={{ width: '34rem' }}>
                    <img src="/img/suivi.jpg" className="card-img-top" alt="Chicago Skyscrapers" />
                    <div className="card-body">
                        <h2 className="card-title"  style={{ textAlign: 'center', color: '#28ad6c' }}>Suivi</h2>
                        <p className="card-text" style={{ textAlign: 'center'}}>Détails de vos suivis récents.</p>
                    </div>
                    <ul className="list-group list-group-light list-group-small" style={{ textAlign: 'center'}}>
                        {suivis.map((suivi, index) => (
                            <li className="list-group-item px-4" key={index}>
                                <strong>Date du suivi:</strong> {suivi.date_suivi}<br />
                                <strong>Valeur actuelle:</strong> {suivi.valeur_actuelle}<br />
                                <strong>Type d'objectif:</strong> {suivi.type_objectif}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Dashboard;
