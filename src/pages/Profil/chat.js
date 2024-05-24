import React, { useState } from 'react';
import axios from 'axios';
import './chatbot.css'; 


const Chatbot = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [showChat, setShowChat] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('jwtToken');
            const response = await axios.post('https://api.harmonizefit.com/api/chat', { question }, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setAnswer(response.data.answer);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const toggleChat = () => {
        setShowChat(!showChat);
    };

    return (
        <div>
        <div className="chat-icon" onClick={toggleChat}>
            <img src="/img/chatbot-icon.png" alt="Chat Icon" />
        </div>
        {showChat && (
            <div className="chat-popup">
                <div className="chat-popup-header">
                    <h2>Chatbot</h2>
                    <button onClick={toggleChat} className="close-btn">&times;</button>
                </div>
                <form onSubmit={handleSubmit} className="container">
                    <div className="row mb-3">
                        <div className="col-md-3">
                            <label htmlFor="question" className="form-label">Posez votre question</label>
                            <input
                                type="text"
                                className="form-control"
                                id="question"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                placeholder="Posez votre question"
                            />
                        </div>
                    </div>
                    <div className="text-center pt-1 mb-5 pb-1">
                        <button
                            className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                            type="submit"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
                {answer && <div className="mt-3">
                    <h4>Réponse:</h4>
                    <p>{answer}</p>
                </div>}
            </div>
        )}
    </div>
    );
};

export default Chatbot;
