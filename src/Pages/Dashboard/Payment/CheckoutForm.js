import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';


const CheckoutForm = ({ booking }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [cardError, setCardError] = useState('');
  const [success, setSuccess] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');
  const stripe = useStripe();
  const elements = useElements();
  const { productName, resellPrice,name, email, _id } = booking;
  console.log(booking)
  

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://elite-laptop-server.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify({ resellPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resellPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log(error.message)
      setCardError(error.message);
    }
    else {
      setCardError('');
    }
    setSuccess('');
    setProcessing(true)
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: name,
            email: email,

          },
        },
      },
    );

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {

      console.log('card info', card);
      // store payment info in the database

      const payment = {
        resellPrice,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,

      }
      fetch('https://elite-laptop-server.vercel.app/payments', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify(payment)
      })
        .then(res => res.json())
        .then(data => {
          console.log('Inside final data:', data);
          if (data.insertedId) {
            setSuccess('Congrats! Your payment completed');
            setTransactionId(paymentIntent.id);
          }
        })
    }
    setProcessing(false)
    console.log(paymentIntent)


  }
  return (
    <>
      <form className='w-96' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className='btn btn-sm btn-primary text-white mt-4'
          type="submit"
          disabled={!stripe || !clientSecret || processing}
          >
          Pay
        </button>
      </form>
      {cardError &&
        <p className='text-red-500 my-4 '>{cardError}</p>
      }
      {
        success && <div>
          <p className='text-green-500'>{success}</p>
          <p>Your transacrionId: <span className='font-bold'>{transactionId}</span></p>
        </div>
      }
    </>
  );
};

export default CheckoutForm;