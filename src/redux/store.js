/*jshint esversion: 6 */

import { createStore} from 'redux';

import rootReducers from './reducers';

const store= createStore(rootReducers,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );
window.store = store;
export default store;

