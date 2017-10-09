import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import { setFriends } from "./actions/Friends";
import configureStore from './configureStore/ConfigureStore';
import registerServiceWorker from './registerServiceWorker';

import axios from 'axios';


const store = configureStore();
// const newFriend = {name:'new friend', age: 1, email:'default@gmail.com'};
// console.log(store.getState());
// console.log(axios.get('http://localhost:5000/friends').then((response) => console.log('this is the get response', response)));
// console.log('thi is axios post call',axios.post('http://localhost:5000/new-friend',newFriend)
//   .then((response) => console.log('response to postcall',response))
//   .catch((error) => console.log(error)));

axios.get('http://localhost:5000/friends').then((response) => store.dispatch(setFriends(response.data)));
console.log('store state',store.getState());

ReactDOM.render(
  <Provider store ={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
