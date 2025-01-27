import React, { useState } from 'react';
import axios from 'axios';

const CardImage = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getRandomCardId = (): number => {
    // Generate a random number for the Card ID
    return Math.floor(Math.random() * 1000) + 1; // Example: Random between 1 and 1000
  };

  const fetchCardImage = async () => {
    const cardId = getRandomCardId();
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`/api/cards/${cardId}`);
      const card = response.data;

      if (card && card.image) {
        setImageUrl(card.image); // Assuming card.image contains the URL of the image
      } else {
        setError('Image not found for this card.');
      }
    } catch (err) {
      setError('Failed to fetch card.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchCardImage} disabled={loading}>
        {loading ? 'Loading...' : 'Get Random Card'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && !loading && <img src={imageUrl} alt="Card Image" />}
    </div>
  );
};

export default CardImage;
