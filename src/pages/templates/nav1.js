import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true); 
    const toggleSidebar = () => setIsOpen(!isOpen); 
    return (
        <nav className={isOpen ? "sidebar open" : "sidebar"}>
            <div className="sidebar-header">
                <Link to="/" className="sidebar-brand">
                    <img src="/img/logo1.png" alt="Harmonize Fit" style={{ width: '99px'}}/>
                </Link>
                <div className="sidebar-toggler" onClick={toggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <Collapse in={isOpen}>
            <div className="sidebar-body">
                <ul className="nav">
                    <li className="nav-item nav-category">Principal</li>
                    <li className="nav-item">
                        <Link to="/intranet" className="nav-link">
                            <i className="link-icon" data-feather="home"></i>
                            <span className="link-title">Tableau de bord</span>
                        </Link>
                    </li>
                    <li className="nav-item nav-category">Programmes et Offres</li>

                    <li className="nav-item">

                        <Collapse in={true}>
                            <div>
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <Link to="/chat" className="nav-link">Mes Programmes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/programmes" className="nav-link">Parcourir les Programmes</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/offres" className="nav-link">Offres Spéciales</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                    </li>
                    <li className="nav-item nav-category">Santé et Bien-être</li>

                    <li className="nav-item">
                        <Collapse in={true}>
                            <div>
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <Link to="/articles" className="nav-link">Articles et Conseils</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/tutoriels" className="nav-link">Vidéos et Tutoriels</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                    </li>
                    <li className="nav-item nav-category">Gestion du Compte</li>

                    <li className="nav-item">

                        <Collapse in={true}>
                            <div>
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <Link to="/profil" className="nav-link">Profil</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/parametres" className="nav-link">Paramètres</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/abonnements" className="nav-link">Abonnements</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                    </li>
                    <li className="nav-item nav-category">Communauté et Support</li>

                    <li className="nav-item">

                        <Collapse in={true}>
                            <div>
                                <ul className="nav sub-menu">
                                    <li className="nav-item">
                                        <Link to="/forums" className="nav-link">Forums</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/faq-support" className="nav-link">FAQ et Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </Collapse>
                    </li>
                </ul>
            </div>
            </Collapse>
        </nav>
    );
}

export default Sidebar;
