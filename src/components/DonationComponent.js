import React, { useEffect } from 'react';

const DonationComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&vault=true';
    script.addEventListener('load', () => {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00' // Change this value to the amount you want to charge
              }
            }]
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then(details => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
        createSubscription: (data, actions) => {
          return actions.subscription.create({
            plan_id: 'YOUR_PLAN_ID' // Replace with your plan ID
          });
        },
        onApprove: (data, actions) => {
          alert('Subscription completed');
        }
      }).render('#paypal-button-container');
    });
    document.body.appendChild(script);
  }, []);

  return (
    <div id="paypal-button-container"></div>
  );
};

export default DonationComponent;