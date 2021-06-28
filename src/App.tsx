import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';

import {withFoodService} from './component/hoc-helpers'
import Header from './component/header/header';
import Home from './component/pages/home';
import Footer from './component/footer/footer';
import Menu from './component/pages/menu';
import Response from './component/pages/response';
// import Delivery from './component/pages/delivery';
import LogIn from './component/login/loginForm/loginForm';
import DeliveryArea from "./component/deliveryArea/deliveryArea"
import myAccount from './component/myAccount/myAccount';

interface IAppProps {
  foodService?:any;
}

class App extends Component<IAppProps> {

  render() {
    const {foodService} = this.props;
    foodService.getProductsList();
    return (
      <div className="container" >
        <div className="app">
          <Header />
         <div className="app-main-section"> 
           {/* <Menu /> */}
          <BrowserRouter>
            <Switch>
            <Route path="/myAccount" component={myAccount} />
              <Route path="/home" component={Home} />
              <Route path="/menu" component={Menu} />
              <Route path="/delivery" component={DeliveryArea} />
              <Route path="/response" component={Response} />
              <Route path="/logIn" component={LogIn} />
            </Switch>
          </BrowserRouter>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withFoodService()(App);
