import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { initiativesData } from '@/components/InitiativeSection';

const InitiativeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const initiative = initiativesData.find(
    init => init.id === parseInt(id)
  );

  if (!initiative) {
    return (
      <div className="initiative-detail">
        <h2>Initiative not found</h2>
        <button onClick={() => navigate('/')} className="back-btn">
          Back to Initiatives
        </button>
      </div>
    );
  }

  return (
    <div className="initiative-detail">
      <button onClick={() => navigate('/')} className="back-btn">
        Back to Initiatives
      </button>
      
      <div className="detail-content">
        <img 
          src={initiative.imageUrl} 
          alt={initiative.title}
          className="detail-image" 
        />
        
        <div className="detail-text">
          <h1 className="detail-title">{initiative.title}</h1>
          <p className="detail-description">{initiative.fullDescription}</p>
          
          <div className="detail-actions">
            <button className="action-btn">Get Involved</button>
            <button className="action-btn secondary">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitiativeDetail;