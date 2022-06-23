import { useState } from "react";
import { FaBeer } from "react-icons/fa";
import { GiWaterDrop } from "react-icons/gi";
import React from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
    const [hovered, setHovered]= useState('');
  return (
    <div>
      <FaBeer
        size={32}
        color={hovered==='plus' ? "red" : "green"}
        onClick={() => setCount(count + 1)}
        // onMouseOver={()=> setHovered('plus')}
        onMouseEnter={()=> setHovered('plus')}
        onMouseLeave={()=> setHovered('none')}
      />
      <h1 style={{ color: `${count>=4 ? "yellow" : "blue"}` }}
       
       >{count}</h1>
     <GiWaterDrop 
     size={32}
     color={hovered==='minus' ? "blue" : "green"}
     onClick={() => setCount(count > 1 ? count - 1 : count)}
    //  onMouseOver={()=> setHovered('minus')}
     onMouseEnter={()=> setHovered('minus')}
     onMouseLeave={()=> setHovered('none')}
     />
    </div>
  );
};

export default Counter;
