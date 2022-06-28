import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { FaTrash } from "react-icons/fa";

const Forms = ({ Students }) => {
  const [entries, setEntries] = useState(Students); //defining the states
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");

  const nameRef = useRef(null); //using reference for focus and clear
  const dobRef = useRef(null);
  const addressRef = useRef(null);

  const pressEnterAtName = (e) => {
    if (e.code === "Enter") {
      dobRef.current.focus();
    }
  };
  const pressEnterAtDob = (e) => {
    if (e.code === "Enter") {
      addressRef.current.focus();
    }
  };
  const pressEnterAtAddress = (e) => {
    if (e.code === "Enter") {
      handleAddEntry();
    }
  };
  const handleAddEntry = () => {
    setEntries([
      ...entries,
      {
        id: entries.length + 1,
        name: name,
        dob: dob,
        address: address,
      },
    ]);

    setName("");
    setDob("");
    setAddress("");
    nameRef.current.focus();
  };

  const handleRemoveEntry = (id) => {
    setEntries(entries.filter((a) => a.id !== id));
  };

  return (
    <div>
      <h1> Registration Form</h1>
      <div>
        {/* division for form */}
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
            type="date"
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
            type="text"
            id="Student_Address"
            onChange={(e) => setAddress(e.target.value)}
            value={address}
            ref={addressRef}
            onKeyUp={pressEnterAtAddress}
          />
        </div>
        <div>
          <button onClick={handleAddEntry}>Submit</button>
          <button onClick={() => setEntries([])}>Clear</button>
        </div>
      </div>

      <div>
        {/* division for data */}
        <ul>
          {entries.map((s) => (
            <li key={s.id}>
              <span>{s.id}</span>{"."} <span>{s.name}</span> <span>{s.dob}</span>{" "}
              <span>{s.address}</span>{" "}
              <FaTrash
                color="red"
                size={15}
                onClick={() => handleRemoveEntry(s.id)}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Forms;
