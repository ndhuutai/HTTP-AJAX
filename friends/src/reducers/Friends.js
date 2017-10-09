const FriendDefaultState = {friends : []};

export default (state = FriendDefaultState, action) => {
  switch(action.type) {
    case 'ADD_FRIEND':
      return {
        ...state, // lay out current state's properties, which include friends property and any other that
                  // might be added on later.
        friends: [
          ...state.friends, // lay out and copy previous friends' items.
          { // append new friend object on the friends array.
            name: action.friend.name,
            age: action.friend.age,
            email: action.friend.email
          }
        ]
      };
    case 'SET_FRIENDS':
      console.log('inside reducer', action.friends);
      return {
        ...state,
        friends : [...state.friends,...action.friends]
      };
    case 'REMOVE_FRIEND' :
      console.log('index being removed:', action.index);
      return {
        ...state,
        friends : state.friends.filter((friend,index) => action.index !== index)
      };
    default: return state;
  }
}