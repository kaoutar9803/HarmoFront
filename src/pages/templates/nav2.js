import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const user = JSON.parse(localStorage.getItem('user'));  
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const handleLogout = (event) => {
        event.preventDefault();

        window.location.href = '/login'; 
    };
   const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="navbar">
            <a href="#" className="sidebar-toggler">
                <i className="icon" data-feather="menu"></i>
            </a>
            <div className="navbar-content">
                        {user ? (
                            
                    <ul className="navbar-nav">
                         <li className="nav-item dropdown">
                <span 
                    className="nav-link" 
                    id="profileDropdown" 
                    role="button" 
                    onClick={toggleDropdown}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                    <img 
                        src="/img/user.png" 
                        alt="Profile" 
                        style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '10px' }} 
                    />
                    {user ? `${user.nom} ${user.prenom}` : 'Loading...'}
                </span>
                {isDropdownOpen && (
                    <ul className="dropdown-menu show" aria-labelledby="profileDropdown" style={{ position: 'absolute' }}>
                        <li>
                            <button className="dropdown-item" style={{ lineHeight: '30px', color: '#ffffff', background: '#056738', fontWeight: '900',textTransform: 'uppercase', padding: '10px 45px'}} onClick={handleLogout}>Déconnexion</button>
                        </li>
                    </ul>
                )}
            </li>
                    </ul>
                ) : (
                    <p>Please log in.</p>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
