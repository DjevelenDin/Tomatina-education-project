import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import DeliveryArea from "./components/deliveryArea/deliveryArea"

// import map from './components/map';
// import deliveryArea from '../src/components/map/deliveryArea/deliveryArea';

// function App() {
//   return (
//     <div className="App">
//     <h1>Доставка та оплата!</h1>
//     <deliveryArea/>
//     </div>
//   );
// }

export default class App extends React.Component {
  render() {
    return (
      <div className="container app">
        <DeliveryArea/>
      </div>
    );
  }
}


