import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lobby from '../pages/Lobby';
import Draft from '../pages/Draft';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app-container">
        <header className="p-4 bg-blue-600 text-white text-center">
          <h1>MTG Draft Simulator</h1>
        </header>

        <main className="p-4">
          <Routes>
            <Route path="/" element={<Lobby />} />
            <Route path="/draft" element={<Draft />} />
          </Routes>
        </main>

        <footer className="p-4 bg-gray-800 text-white text-center">
          <p>MTG Draft Simulator © 2025</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
