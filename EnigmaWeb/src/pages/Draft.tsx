import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Draft = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Start loading state as true
  const [error, setError] = useState<string | null>(null);

  const getRandomCardId = (): number => {
    return Math.floor(Math.random() * 15) + 1; // Random between 1 and 1000
  };

  useEffect(() => {
    const fetchCardImage = async () => {
      const cardId = getRandomCardId(); // Generate a random card ID
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(`https://localhost:5001/api/Cards/${cardId}`);
        const card = response.data;

        // Log the response for debugging
        console.log('API Response:', card);

        // Extract the first image URL from the images array
        if (card.images && card.images.length > 0) {
          setImageUrl(card.images[0].url); // Get the URL of the first image
        } else {
          setError('No images found for this card.');
        }
      } catch (err) {
        setError('Failed to fetch card.');
      } finally {
        setLoading(false); // Set loading to false once the fetch is complete
      }
    };

    fetchCardImage(); // Call the function when the component mounts
  }, []); // Empty dependency array ensures this runs once when the component mounts

  return (
    <div className="draft-container">
      <h1>Draft</h1>

      {/* Booster View Section */}
      <div className="booster-view">
        <h2>Booster View</h2>
        {loading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {imageUrl && !loading && <img src={imageUrl} alt="Card Image" />}
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
