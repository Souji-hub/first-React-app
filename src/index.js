import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App name={'M"E"RN'} address="text" age={5} marks={[10, 20, 30, 40]}
    location={{
      latitude: 27.464,
      longitude: 88.455
    }}
    active={false}
    onSubmit = {() => console.log("Submitted")} />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
