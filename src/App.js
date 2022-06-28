import "./App.css";

//import Register from "./components/StudentRegister";
//import { STUDENTS } from "./constants";
import { RECORDS } from "./constants/database"; 
import Forms from "./components/formInput";
function App() {
  return (
    <div className="App">
      {/* <Register Students={STUDENTS} /> */}
      {/* <Counter /> */}
      <Forms People={RECORDS} />
     
    </div>
  );
}

export default App;
