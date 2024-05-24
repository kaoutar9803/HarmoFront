import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../pages/Profil/AuthProvider'; 


function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://api.harmonizefit.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.token) {
                localStorage.setItem('jwtToken', data.token);
                localStorage.setItem('user', JSON.stringify(data.user));  
                navigate('/profil');  
                fetchObjectifs(data.token);
            } else {
                console.error('Login failed:', data.error);
            }
        })
        .catch(error => {
            console.error('Login Error:', error);
        });
    };

    const fetchObjectifs = (token) => {
        axios.get('https://api.harmonizefit.com/api/objectifs', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(response => {
            console.log('Objectifs:', response.data);
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des objectifs', error);
        });
    };

    return (
        <section class="h-100 gradient-form" style={{backgroundColor: "#eee;"}}>
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-xl-10">
                <div class="card rounded-3 text-black"   style={{
                    marginTop: '50vh', 
                    transform: 'translateY(-50%)', 
                    backgroundColor: "#f7f7f7" 
                }}>
                <div class="row g-0">
                <div class="col-lg-3">
                </div > 
                    <div class="col-lg-6" >
                    <div class="card-body p-md-5 mx-md-4" style={{ marginTop: '20px', marginBottom: '20px' }}> 

                        <div class="text-center"style={{}} >
                        <img src="img/logo1.png" alt="logo" style={{ width: "150px" }} />
                        </div>

                        <form onSubmit={handleSubmit}>
                        <p className="centered-content">Veuillez vous connecter à votre compte</p>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example11">Nom d'utilisateur</label>
                            <input
                                type="text"
                                id="form2Example11"
                                className="form-control"
                                placeholder="Nom d'utilisateur ou Email"
                                value={username} onChange={e => setUsername(e.target.value)}
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="form2Example22">Mot de passe</label>
                            <input
                                type="password"
                                id="form2Example22"
                                className="form-control"
                                placeholder="Mot de passe"
                                value={password} onChange={e => setPassword(e.target.value)} 
                            />
                        </div>

                        <div className="centered-content text-center pt-1 mb-5 pb-1">
                            <button
                                className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                                type="submit"
                            >
                                Connexion
                            </button>
                        </div>

                        <div className="centered-content d-flex align-items-center justify-content-center pb-4">
                            <p className="mb-0 me-2">Vous n'avez pas de compte ?</p>
                            <a href="/register" className="btn btn-outline-danger">Créer un</a>
                        </div>
                      
                    </form>

                    </div>
                    </div>
                    <div class="col-lg-2" >

                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};


export default LoginForm;
