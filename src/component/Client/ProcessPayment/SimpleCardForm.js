import React, { useState } from 'react';

import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [successful, setSuccessful] = useState(null)
  const [error, setError] = useState(null)

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const cardElement = elements.getElement(CardElement);

    // Use your card Element with other Stripe.js APIs
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setError(error);
      setSuccessful(null)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setSuccessful('Success')
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <br/>
      <button className="button" type="submit" disabled={!stripe}>
        Pay With Card
      </button>
      {
          successful ? <p className="text-success">Payment Success</p> : <p className="text-danger">Error While Transaction. Try Again</p>
      }
      
    </form>
  );
};
export default SimpleCardForm;
