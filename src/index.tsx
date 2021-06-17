import React from 'react';
import ReactDOM from 'react-dom';
import { FoodService } from './service';
import { FoodServiceProvider } from './component/food-service-context'

import './index.css';
import App from './App';

const foodService = new FoodService();
ReactDOM.render(
    <FoodServiceProvider value={foodService}>
        <App />
    </FoodServiceProvider>
    , document.getElementById('root'));
