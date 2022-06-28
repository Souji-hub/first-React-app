import React from "react";
import { useState } from "react";

const Register = ({ Students }) => {
  const [entries, setEntries] = useState(Students);
  return (
    <div>
      <ul>
        {entries.map((s) => (
          <li key={s.id}>
            <span>{s.name}</span>
            <span>{s.dob}</span>
            <span>{s.address}</span>
          </li>
        ))}
      </ul>
      {/* <button
        onClick={() =>
          setEntries([
            ...entries,
            {
              id: entries.length + 1,
              name: "John Cena",
              dob: "1999-8-9",
              address: "Lalitpur",
            },
          ])
        }
      >
        Add
      </button>
      <button onClick={() => setEntries([])}>Clear</button> */}
    </div>
  );
};

export default Register;
