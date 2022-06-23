import React from "react";

const First = ({title,name,age,subjects,isStudent,location,gender}) => {
  console.log("First Props");
  return (
    <div>
      <h1>{title}</h1>
      <p>
        This is to certify that{" "}
        <strong>
          {gender === "M" ? "Mr" : "Ms"}.{name}
        </strong>
        , aged{" "}
        <strong>
          <i>{age}</i>
        </strong>{" "}
        has passed the following subjects:
        
        <ol>
            {subjects.map(s =>(<li>{s}</li>))}
        </ol>
        His location is <strong>State {location.state}, {location.district}, {location.city}</strong>
        </p>
    </div>
  );
};

const Second =() =>{
    return(
        <div><h1>Drink Counter</h1></div>
    );
}
export  {Second}
export default First;
