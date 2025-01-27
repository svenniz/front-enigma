import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Booster } from '../types/Booster';

const Draft: React.FC = () => {
    const [booster, setBooster] = useState<Booster | null>(null);

  // Fetch booster data when the component mounts
  useEffect(() => {
    const fetchBooster = async () => {
      try {
        const response = await axios.get<Booster>('https://localhost:5001/api/Booster/create');
        setBooster(response.data);
      } catch (error) {
        console.error('Error fetching booster:', error);
      }
    };
    fetchBooster(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="draft-container">
      <h1>Draft</h1>

      {/* Booster View Section */}
      <div>
      <h2>Booster Pack</h2>
      <div className="row mb-2">
        {booster ? (
          booster.cards.map((card) => (
            <div key={card.id} className="card">
              {card.images.length > 0 ? (
                <img src={card.images[0].url} alt={card.name} />
              ) : (
                <p>No image found for this card</p>
              )}
            </div>
          ))
        ) : (
          <p>Loading booster...</p>
        )}
      </div>
    </div>

      {/* Deck View Section */}
      <div className="deck-view">
        <h2>Deck View</h2>
        {/* You can add deck-related components here */}
      </div>
    </div>
  );
};

export default Draft;
