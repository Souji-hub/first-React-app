import React from "react";
import { useState } from "react";
import {useRef} from "react";


const Forms = ({Students}) => {

  const [entries, setEntries] = useState(Students);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [record,setRecord] = useState();

  const nameRef = useRef(null);
  const dobRef = useRef(null);
  const addressRef = useRef(null);

  const pressEnterAtName =(e) =>
  {
        if(e.code ==="Enter")
        {
            dobRef.current.focus();
        }
  };
  const pressEnterAtDob =(e) =>
  {
        if(e.code ==="Enter")
        {
            addressRef.current.focus();
        }
  };
  const pressEnterAtAddress =(e) =>
  {
        if(e.code ==="Enter")
        {

            nameRef.current.focus();
            setName=('');
            setDob=('');
            setAddress=('');
        }
  };
  return (
    <div>
       
      
      <h1> Registration Form</h1>
      <div>
        <label for="Student_Name">Name: </label>
        <input
          type={Text}
          id="Student_Name"
          onChange={(e) => setName(e.target.value)}
          value={name}
          ref={nameRef}
          onKeyUp={pressEnterAtName}
        />
      </div>
      <div>
        <label for="Student_Dob">DOB: </label>
        <input
          type={Text}
          id="Student_Dob"
          onChange={(e) => setDob(e.target.value)}
          value={dob}
          ref={dobRef}
          onKeyUp={pressEnterAtDob}

        />
      </div>
      <div>
        <label for="Student_Address">Address: </label>
        <input
          type={Text}
          id="Student_Address"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
          ref={addressRef}
          onKeyUp={pressEnterAtAddress}
        />
        </div>
        <div>
          <button 
          onClick={() =>
            setEntries([
              ...entries,
              {
                id: entries.length + 1,
                name: name,
                dob: dob,
                address: address,
              },
            ])
          }>Submit</button>
          <button onClick={() => setEntries([])}>Clear</button>
          </div>
      
    
      <ul>
        {entries.map((s) => (
          <li key={s.id}>
            <span>{s.name}</span>
            <span>{s.dob}</span>
            <span>{s.address}</span>
          </li>
        ))}
      </ul>
    </div>
    
  );
};

export default Forms;
