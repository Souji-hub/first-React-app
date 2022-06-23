import React from "react";
import { useState } from "react";

const Register = ({ Batch, Faculty, College, Students }) => {
  const [entries, setEntries] = useState(Students);
  return (
    <div>
      {" "}
      Student Register
      <h1>{College}</h1>
      <p>
        {Faculty}-{Batch}
      </p>
      <ul>
        {entries.map((s) => (
          <li key={s.id}>
            <span>{s.name}</span>
            <span>{s.dob}</span>
            <span>{s.address}</span>
          </li>
        ))}
      </ul>
      <button
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
      <button onClick={() => setEntries([])}>Clear</button>
    </div>
  );
};

export default Register;
