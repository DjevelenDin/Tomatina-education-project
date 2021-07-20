import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { withFoodService } from "./component/hoc-helpers";
import Header from "./component/header/header";
import Home from "./component/pages/home";
import Footer from "./component/footer/footer";
import { Menu } from "./component/pages/menu";
import Response from "./component/pages/response";
import Delivery from "./component/pages/delivery";
import LogIn from "./component/pages/logIn";
import DeliveryArea from "./component/deliveryArea/deliveryArea";
import Breakfast from "./component/pages/breakfast";
import Dessert from "./component/pages/dessert";
import Drinks from "./component/pages/drinks";
import FitSandwich from "./component/pages/fitSandwich";
import Salad from "./component/pages/salad";
import SaladPasta from "./component/pages/saladPasta";
import Soups from "./component/pages/soups";
import history from 'history'

interface IAppProps {
  foodService?: any;
}

class App extends Component<IAppProps> {
  render() {
    const { foodService } = this.props;
    foodService.getProductsList();
    return (
      <div className="container">
        <BrowserRouter>
          <div className="app">
            <Header />
            <div className="app-main-section">
              {/* <Menu /> */}
              <Switch>
                <Route path="/home" component={Home} />
                <Route path="/menu" exact component={Menu} />
                <Route path="/menu/breakfast" component={Breakfast}/>
                <Route path="/menu/dessert" component={Dessert}/>
                <Route path="/menu/drinks" component={Drinks}/>
                <Route path="/menu/fitSandwich" component={FitSandwich}/>
                <Route path="/menu/salad" component={Salad}/>
                <Route path="/menu/saladPizza" component={SaladPasta}/>
                <Route path="/menu/soups" component={Soups}/>
                <Route path="/delivery" component={DeliveryArea} />
                <Route path="/response" component={Response} />
                <Route path="/logIn" component={LogIn} />
              </Switch>
            </div>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default withFoodService()(App);
