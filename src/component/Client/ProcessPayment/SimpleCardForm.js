import React, { useContext, useState } from 'react';

import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { paymentContext } from '../../../App';

const SimpleCardForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [successful, setSuccessful] = useState(null)
  const [paymentError, setPaymentError] = useState(null)
  const [ setPaymentInfo] = useContext(paymentContext)

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
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.log('[error]', error);
      setPaymentError(error.message);
      setSuccessful(null)
    } else {
      console.log('[PaymentMethod]', paymentMethod);
      setSuccessful(paymentMethod.id)
      setPaymentError(null);
      setPaymentInfo(paymentMethod.id)
    }
    alert('Booking Successful')
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <br />
        <button className="button" type="submit" disabled={!stripe}>
          Pay With Card
        </button>
      </form>
      {
        paymentError && <p className="text-danger">{paymentError}</p>
      }
      {
        successful && <p className="text-success">Your Payment Is Successful</p>
      }
    </div>
  );
};
export default SimpleCardForm;
