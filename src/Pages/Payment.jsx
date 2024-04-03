// import React, { useEffect, useState } from 'react'
// import StripeCheckout from 'react-stripe-checkout';
// import axios from 'axios';

// const KEY ="pk_test_51OnsKVJlJafRAzOdGEcCclwPkD62JSOfBW56usdWbnmo84xTL5N04lPyws31OrEH9AE5eW3cSRnfMf8phnKv7bj100HThhpThv"

// function Payment() {
//   const [stripeToken, setStripeToken] = useState(null);

//   const onToken = (token) =>{
//     setStripeToken(token);
//   };

//   useEffect(() =>{
//     const makeRequest = async () =>{
//       try {
//        const res = await fetch("http://localhost:5000/create-payment-intent",
//           {
//             tokenId: stripeToken.id,
//             amount: 2000,
//           }
//         );
//         console.log(res.data);

//       } catch (error) {
//         console.log(error);
        
//       }
//     }
//     stripeToken && makeRequest(); 
//   },[stripeToken]);

//   return (
//     <div
//       style={{
//         height: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//       }}>

//       <StripeCheckout 
//         name= "Lama Shop"
//         image="https://i.ibb.co/Lr42cBp/cart-removebg-preview.png"
//         billingAddress
//         shippingAddress
//         description='Your total is $20'
//         amount={2000}
//         token={onToken}
//         stripeKey= {KEY}
//       >
//         <button
//         style={{
//           border: "none",
//           width: 120,
//           padding: "20px",
//           borderRadius: 5,
//           backgroundColor: "black",
//           color: "white",
//           fontWeight: 800,
//           cursor: "pointer",
//           margin: "auto",
//         }}>
//           Pay Now
//         </button>
//       </StripeCheckout>
//     </div>
//   )
// }

// export default Payment
// // export default makeRequest;
// // "http://localhost:5000/create-payment-intent"


import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const PaymentComponent = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { token } = await stripe.createToken(cardElement);

      const response = await fetch('http://localhost:5000/payment', {
    
      method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Amount in cents
          token,
        }),
      });
   console.log(response)


      if (response.ok) {
        console.log('Payment Successful!');
      } else {
        setError('Payment failed. Please try again.');
      }
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay ${amount}
      </button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default PaymentComponent; 