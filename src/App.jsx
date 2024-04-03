// import logo from './logo.svg';
 import './App.css';
//  import {Routes, Route} from 'react-router-dom'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import PaymentComponent from './PaymentComponent';

//  import ProductList from './Pages/Productlist';
//   import Home from './Pages/Home';
// // import Register from './Pages/Register';
// import Login from './Pages/Login';
// // import Navbar from './Component/Navbar';
// import Cart from './Pages/Cart';
// import Product from './Pages/Product';
import Payment from './Pages/Payment';
// import Success from './Pages/Success';

const stripePromise = loadStripe("pk_test_51OnsKVJlJafRAzOdGEcCclwPkD62JSOfBW56usdWbnmo84xTL5N04lPyws31OrEH9AE5eW3cSRnfMf8phnKv7bj100HThhpThv")


function App() {
  return (

   <div>
    {/* <Success /> */}
      <Elements stripe={stripePromise}>
     {/* <Routes> */}
        {/* <Route path="/success" element={ <Success/> } /> */}
      {/* <Payment amount={20} /> */}
      {/* <Route path="/payment" element={ <Payment/> } /> */}
    {/* </Routes> */}
    <Payment amount={20} />
    </Elements>

   </div>
    // <Router>
    //   <Switch>
    //     <Route exact path='/payment'>
    //       <Payment />
    //     </Route>

    //     <Route exact path='/success'>
    //       <Success />
    //     </Route>
    //   </Switch>
    // </Router>

    // <div className="">
    //  <div>

    //   <Success />
    //  </div>
     
     

     
  );
}

export default App;
