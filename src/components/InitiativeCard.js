import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/initiativecard.css';

const InitiativeCard = ({ id, title, description, imageUrl }) => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate(`/initiative/${id}`);
  };

  return (
    <div className="initiative-card">
      <div className="card-image">
        <img src={imageUrl || "/api/placeholder/400/300"} alt={title} />
      </div>
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
        <button onClick={handleLearnMore} className="learn-more-btn">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default InitiativeCard;