import React from 'react';
import {connect} from 'react-redux';
import Friend from './FriendItem';
import AddFriend from './AddFriend'
import {addFriend, removeFriend} from "../actions/Friends";

//stateless functional component in-use since its only job is to render.
const Friends = (props) => (
  <div>
    <AddFriend handleOnSubmit={props.submitData}/>
    {props.friends.map((friend,index) => <li key={index}>
      <Friend {...friend} index ={index} removeData ={props.removeData}/>
    </li>)}
  </div>
);

const mapDisPatchToProps = (dispatch) => {
  return {
    submitData :(name,age,email) => {
      console.log('submit data is clicked', name,age,email);
      dispatch(addFriend({name,age,email}));
    },
    removeData: (index) => {
      console.log('removeData is clicked',index);
      dispatch(removeFriend(index));
    }
  }
};

const mapStateToProps = (state) => {
  return {
    friends: [...state.friends]
  }
};

export default connect(mapStateToProps,mapDisPatchToProps)(Friends);