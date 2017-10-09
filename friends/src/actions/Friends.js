import axios from 'axios';

export const addFriend =({name,age,email = 'placeholder@email.com'} = {}) => {
  axios.post('http://localhost:5000/new-friend',{name,age,email}).then((response) =>console.log(response)).catch((error) => console.log(error));
  return {
    type: 'ADD_FRIEND',
    friend: {
      name,
      age,
      email
    }
  }
};

export const setFriends = (friends) => {
  console.log(' set friends was called.', friends);
  return {
    type: 'SET_FRIENDS',
    friends
  }
};

export const removeFriend = (index) => {
  axios.delete('http://localhost:5000/delete-friend',{data:{index}});
  console.log(index);
  return {
    type: 'REMOVE_FRIEND',
    index
  }
};