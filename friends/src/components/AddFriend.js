import React from 'react';



export default (props) =>(
  <div>
    <form onSubmit={(e) => {
          e.preventDefault();
          props.handleOnSubmit(e.target.name.value,e.target.age.value,e.target.email.value);
          e.target.name.value = ''; // gotta find a way to make these better
          e.target.age.value = '';
          e.target.email.value = '';
    }}>
      <label>Name <input type="text" name="name" required/></label>
      <label>Age:<input type="text" name="age" required/></label>
      <label>Email<input type="email" name="email"/></label>
      <button>Submit</button>
    </form>
  </div>
);
