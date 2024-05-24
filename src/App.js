import React from 'react';
import AppRouter from './routes/AppRouter'; 
import { AuthProvider } from './pages/Profil/AuthProvider'; 
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <AppRouter />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;