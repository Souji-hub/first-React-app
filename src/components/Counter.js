import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
    const [hovered, setHovered]= useState(false);
  return (
    <div>
      <FaBeer
        size={32}
        color={count >= 4 ? "red" : "green"}
        onClick={() => setCount(count + 1)}
      />
      <h1 style={{ color: `${hovered ? "yellow" : "blue"}` }}
       onMouseOver={()=>setHovered(true)}
       >{count}</h1>
     <GiWaterDrop 
     size={32}
     color={count >= 4 ? "blue" : "green"}
     onClick={() => setCount(count > 1 ? count - 1 : count)}/>
    </div>
  );
};

export default Counter;
