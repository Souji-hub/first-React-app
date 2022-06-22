import React from "react";

const Register =({Batch, Faculty, College, Students }) =>
{
        return (
            <div> Student Register
                <h1>{College}</h1>
                <p>{Faculty}-{Batch}</p>
                <ul>
                    {Students.map(s=>(<li key = {s.id}>
                        <span>{s.name}</span>
                        <span>{s.dob}</span>
                        <span>{s.address}</span>
                    </li>))}
                </ul>
            </div>
            
        )
}

export default Register;