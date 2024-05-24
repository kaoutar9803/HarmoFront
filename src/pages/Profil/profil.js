import React, { useState } from 'react';
import axios from 'axios';
import Nav1 from '../templates/nav1';  
import Nav2 from '../templates/nav2';  
import { useNavigate } from 'react-router-dom';


const UserProfileForm = () => {
    const [typeObjectif, setTypeObjectif] = useState('');
    const [valeurCible, setValeurCible] = useState('');
    const [dateDebut, setDateDebut] = useState('');
    const [dateFin, setDateFin] = useState('');
    const [priorite, setPriorite] = useState('Moyenne');
    const [frequenceHebdomadaire, setFrequenceHebdomadaire] = useState('');
    const [dureeActivite, setDureeActivite] = useState('');
    const [preferencesAlimentaires, setPreferencesAlimentaires] = useState('');
    const [allergiesAlimentaires, setAllergiesAlimentaires] = useState('');
    const [caloriesJournalieres, setCaloriesJournalieres] = useState('');
    const [niveauConditionPhysique, setNiveauConditionPhysique] = useState('Modéré');
    const [equipementDisponible, setEquipementDisponible] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const token = localStorage.getItem('jwtToken');
        if (!token) {
            console.error('Token JWT manquant');
            alert('Session expirée. Veuillez vous reconnecter.');
            navigate('/login');
            return;
        }

        try {
            const response = await axios.post('https://api.harmonizefit.com/api/profilForm', {
                typeObjectif,
                valeurCible,
                dateDebut,
                dateFin,
                priorite,
                frequenceHebdomadaire,
                dureeActivite,
                preferencesAlimentaires,
                allergiesAlimentaires,
                caloriesJournalieres,
                niveauConditionPhysique,
                equipementDisponible
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('Profile Update successful:', response.data);
            alert('Votre profil a été mis à jour avec succès. Notre équipe vous contactera sous peu.');
            navigate('/intranet'); 
        } catch (error) {
            console.error('Profile Update failed:', error.response ? error.response.data : 'Network Error');
            alert('La mise à jour du profil a échoué. Veuillez réessayer.');
        }
    };



    return (
        <div className="main-wrapper">
            <Nav1 />
            <div className="page-wrapper">
                <Nav2 />
                <div className="page-content">
                    <div className="container mt-4" style={{width: '987px !important'}}>
                     <h2 style={{ color: '#28ad6c' , textAlign: 'center'}}>Finalisez votre inscription</h2>
                            <p style={{ textAlign: 'center'}}>
                                Nous vous remercions de bien vouloir compléter votre profil. Les informations que vous fournirez nous permettront de mieux comprendre vos besoins et vos objectifs de fitness. En nous communiquant ces détails, vous nous aidez à vous offrir un programme personnalisé et adapté à vos attentes. Votre parcours de fitness est notre priorité, et ces données sont essentielles pour vous fournir le meilleur soutien possible.
                            </p>
                            <br/>
                        <form onSubmit={handleSubmit} className="container">
                        <div className="row mb-3">
                            <div className="col-md-6">
                            <label htmlFor="typeObjectif" className="form-label">Type d'Objectif</label>
                            <select className="form-control" id="typeObjectif" value={typeObjectif} onChange={e => setTypeObjectif(e.target.value)}>
                                <option value="">Choisir...</option>
                                <option value="Prise de masse maigre">Prise de masse maigre</option>
                                <option value="Renforcement musculaire">Renforcement musculaire</option>
                                <option value="Perte de masse graisseuse">Perte de masse graisseuse</option>
                                <option value="Yoga & Méditation">Yoga & Méditation</option>
                                <option value="Nutrition Saine">Nutrition Saine</option>
                                <option value="Autre">Autre</option>
                            </select>
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="valeurCible" className="form-label">Valeur Cible</label>
                            <input type="text" className="form-control" id="valeurCible" value={valeurCible} onChange={e => setValeurCible(e.target.value)} placeholder="Valeur Cible" />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                            <label htmlFor="dateDebut" className="form-label">Date de Début</label>
                            <input type="text" className="form-control" id="dateDebut" placeholder='AAAA-MM-JJ' value={dateDebut} onChange={e => setDateDebut(e.target.value)} />
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="dateFin" className="form-label">Date de Fin</label>
                            <input type="text" placeholder='AAAA-MM-JJ' className="form-control" id="dateFin" value={dateFin} onChange={e => setDateFin(e.target.value)} />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                            <label htmlFor="priorite" className="form-label">Priorité</label>
                            <select className="form-control" id="priorite" value={priorite} onChange={e => setPriorite(e.target.value)}>
                                <option value="">Choisir...</option>
                                <option value="Faible">Faible</option>
                                <option value="Moyenne">Moyenne</option>
                                <option value="Élevé">Élevé</option>
                            </select>
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="frequenceHebdomadaire" className="form-label">Fréquence Hebdomadaire</label>
                            <input type="number" className="form-control" id="frequenceHebdomadaire" value={frequenceHebdomadaire} onChange={e => setFrequenceHebdomadaire(e.target.value)} placeholder="Nombre de fois par semaine" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                            <label htmlFor="dureeActivite" className="form-label">Durée de l'activité (en minutes)</label>
                            <input type="number" className="form-control" id="dureeActivite" value={dureeActivite} onChange={e => setDureeActivite(e.target.value)} placeholder="Durée en minutes" />
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="preferencesAlimentaires" className="form-label">Préférences Alimentaires</label>
                            <input type="text" className="form-control" id="preferencesAlimentaires" value={preferencesAlimentaires} onChange={e => setPreferencesAlimentaires(e.target.value)} placeholder="Ex. Végan, Sans gluten" />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-md-6">
                            <label htmlFor="allergiesAlimentaires" className="form-label">Allergies Alimentaires</label>
                            <input type="text" className="form-control" id="allergiesAlimentaires" value={allergiesAlimentaires} onChange={e => setAllergiesAlimentaires(e.target.value)} placeholder="Listez vos allergies alimentaires" />
                            </div>
                            <div className="col-md-6">
                            <label htmlFor="niveauConditionPhysique" className="form-label">Niveau de Condition Physique</label>
                            <select className="form-control" id="niveauConditionPhysique" value={niveauConditionPhysique} onChange={e => setNiveauConditionPhysique(e.target.value)}>
                                <option value="">Choisir...</option>
                                <option value="Bas">Bas</option>
                                <option value="Modéré">Modéré</option>
                                <option value="Élevé">Élevé</option>
                            </select>
                            </div>
                        </div>
                 

                        <div className="centered-content text-center pt-1 mb-5 pb-1">
                            <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="submit"
                            >
                                Mettre à jour le profil
                            </button>
                        </div>                        </form>
        

                       
                    </div>
                </div>
                <section className="footer-bottom-area" style={{ background: 'rgb(249, 250, 251)' }}>
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
                                        <a href="#https://www.instagram.com/harmonizefit"><i className="fa fa-instagram"></i></a>
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

export default UserProfileForm;