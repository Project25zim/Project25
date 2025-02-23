import React from 'react';
import '../css/donationOptions.css';

const DonationOptions = ({ onClose }) => {
  const donationLinks = [
    {
      label: 'GoFundMe',
      url: 'https://www.gofundme.com/f/help-project25-help-open-tribe-foundation-school/donate?source=btn_donate_guarantee'
    },
    {
      label: 'PayPal',
      url: 'https://www.paypal.com/donate?hosted_button_id=XXXXXXXXXXXX'
    },
    {
      label: 'Patreon',
      url: 'https://www.patreon.com/project25'
    }
  ];

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <h2 className="section-title">Choose a Donation Option</h2>
        <div className="donation-buttons">
          {donationLinks.map((link, index) => (
            <a key={index} href={link.url} className="btn btn-coral" target="_blank" rel="noopener noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonationOptions;