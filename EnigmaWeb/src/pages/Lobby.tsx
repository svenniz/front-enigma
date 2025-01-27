import React from 'react';
import { useNavigate } from 'react-router-dom';

const Lobby: React.FC = () => {
    const navigate = useNavigate();
  
    return (
      <div className="lobby">
        <h2 className="text-xl font-bold mb-4">Welcome to the Lobby</h2>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={() => navigate('/draft')}
        >
          Start Draft
        </button>
      </div>
    );
  };
  
  export default Lobby;