import { useState } from "react";

const User = ({ name }) => {
  const [count,setCount] = useState(0);
  const [count1] = useState(0);
  return (
    <div className="user-card">
      <h1>Name: {name}</h1>
      <h1>Count = {count}</h1>
      <h1>Count1 = {count1}</h1>
    </div> 
  );
};

export default User;