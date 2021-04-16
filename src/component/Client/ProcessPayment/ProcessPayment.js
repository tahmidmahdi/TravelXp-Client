import React from 'react';


import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement } from '@stripe/react-stripe-js';
import SimpleCardForm from './SimpleCardForm';

const stripePromise = loadStripe('pk_test_51Ie0zJGATSeXoP25qCQAtGoc9gsrgPD8xBcltMXAGvLt6vDf6TDy49UVQBTFHxPlkDoHByjAkepepJbqhz0UWkeX00Ldq3hi40');

const ProcessPayment = () => {
    
    return (
        <Elements stripe={stripePromise}>
           <SimpleCardForm></SimpleCardForm>
        </Elements>

    );
};

export default ProcessPayment;