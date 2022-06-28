import "./App.css";

//import Register from "./components/StudentRegister";
import { STUDENTS } from "./constants";

import Forms from "./components/formInput";
function App() {
  return (
    <div className="App">
      {/* <Register Students={STUDENTS} /> */}
      {/* <Counter /> */}
      <Forms Students={STUDENTS} />
     
    </div>
  );
}

export default App;
