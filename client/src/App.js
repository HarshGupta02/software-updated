import './App.css';
import { Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Registeration from './Components/Registeration';
import Login from './Components/Login';
import Personal from './Components/Personal';
import Logout from './Components/Logout';
import Home from './Components/Home';
import Payment from './Components/Payment';
import { createContext, useReducer } from 'react';
import { initialState, reducer} from '../src/reducer/UseReducer';
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"

export const UserContext = createContext();

const promise = loadStripe(
  'pk_test_51KR8R1SIj9g28rKLoublcGWKYTSVVnGEqAPy2HorkcYA3er9HabaZSBZs2yV37nakwLfv7NtnOjAyETW3yOVD8iN00Wtujn5Wj'
);

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <Header/>
      <Navbar/>
      <Route path = "/home">
        <Home/>
      </Route>
      <Route path = "/personal">
        <Personal/>
      </Route>
      <Route path = "/login">
        <Login/>
      </Route>
      <Route path = "/registeration">
        <Registeration/>
      </Route>
      <Route path = "/payment">
        <Elements stripe={promise}>
          <Payment />
        </Elements>
      </Route>
      <Route path = "/logout">
        <Logout/>
      </Route>
      <Footer />
    </UserContext.Provider>
    </>
  );
}

export default App;