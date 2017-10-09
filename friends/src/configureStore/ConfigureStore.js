import {createStore} from 'redux';
import FriendReducer from '../reducers/Friends';
export default () => {
  const store = createStore(FriendReducer);
  return store;
}