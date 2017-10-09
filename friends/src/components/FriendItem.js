import React from 'react';

export default (props) => {
  return (<div>
    <p>Name: {props.name}</p>
    <p>Age: {props.age}</p>
    <p>Email: {props.email}</p>
    <button onClick ={() => props.removeData(props.index)}>Remove</button>
  </div>);
};