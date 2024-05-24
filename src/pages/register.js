import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Register = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [age, setAge] = useState('');
    const [poids, setPoids] = useState('');
    const [taille, setTaille] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const navigate = useNavigate();  

    const handleRegister = async (event) => {
        event.preventDefault();
    
        try {
            const response = await axios.post('https://api.harmonizefit.com/api/register', {
                username,
                password,
                nom,
                prenom,
                age,
                poids,
                taille,
                email,
                telephone
            });
            console.log('Registration successful:', response.data);
            navigate('/login');
        } catch (error) {
            console.error('Registration failed:', error.response.data);
        }
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
                        <a href="/" > <img src="img/logo1.png" alt="logo" style={{ width: "150px", marginTop: '147px' }} /></a>

                       
                        </div>

                        <form onSubmit={handleRegister}>
                        <p class="centered-content">Veuillez vous s'inscrire</p>

                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example11">Nom d'utilisateur</label>
                            <input type="text" id="form2Example11" class="form-control"
                           value={username} onChange={e => setUsername(e.target.value)} placeholder="Nom d'utilisateur" />
                        </div>
                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="formNom">Nom</label>
                            <input type="text" id="formNom" className="form-control"
                            value={nom} onChange={e => setNom(e.target.value)} placeholder="Nom" />
                        </div>

                        <div className="form-outline mb-4">
                            <label className="form-label" htmlFor="formPrenom">Prénom</label>
                            <input type="text" id="formPrenom" className="form-control"
                            value={prenom} onChange={e => setPrenom(e.target.value)} placeholder="Prénom" />
                        </div>
                        <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="formAge">Age</label>
                        <input type="number" id="formAge" className="form-control"
                        value={age} onChange={e => setAge(e.target.value)} placeholder="Age" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="formPoids">Poids (kg)</label>
                        <input type="number" id="formPoids" className="form-control"
                        value={poids} onChange={e => setPoids(e.target.value)} placeholder="Poids in kg" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="formTaille">Taille (cm)</label>
                        <input type="number" id="formTaille" className="form-control"
                        value={taille} onChange={e => setTaille(e.target.value)} placeholder="Taille in cm" />
                    </div>

                    <div data-mdb-input-init className="form-outline mb-4">
                        <label className="form-label" htmlFor="formTelephone">Téléphone</label>
                        <input type="text" id="formTelephone" className="form-control"
                        value={telephone} onChange={e => setTelephone(e.target.value)} placeholder="Numéro de téléphone" />
                    </div>
                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">Votre Adresse Email</label>

                            <input type="text" id="form2Example22"  value={email} onChange={e => setEmail(e.target.value)}class="form-control" placeholder='Votre Adresse Email' />
                        </div>
                        <div data-mdb-input-init class="form-outline mb-4">
                        <label class="form-label" for="form2Example22">Mot de passe</label>

                            <input type="password" id="form2Example22" class="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Mot de passe" />
                        </div>
                        <br/> 
                        <div class="centered-content text-center pt-1 mb-5 pb-1">
                            <button data-mdb-button-init data-mdb-ripple-init class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit"> S'inscrire</button>
                        </div>

                        <div class="centered-content d-flex align-items-center justify-content-center pb-4">
                            <p class="mb-0 me-2">Vous avez un compte ?</p>
                            <a href="/login" style={{ marginBottom: '30px' }} type="button" data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-danger">Se connecter</a>
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

export default Register;
