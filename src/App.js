// import logo from './logo.svg';
import './App.css';
import First, {Second} from './components/firstcomponents';
//import Second from './components/firstcomponents';
import Register from './components/StudentRegister';
import {STUDENTS} from './constants';
import Counter from './components/Counter';

function App() {
  // console.log(props,"App props");
  return (
    <div className="App">
     <First 
      title={'This is the first component'}
      name= {'Soujanya Subedi'}
      age ={22}
      subjects={['Physics','EM','ECT','EDC','Microprocessor']}
      isStudent={true}
      location ={{
          state: 3,
          district: 'Bhaktapur',
          city: 'Kausaltar'
      }}
      gender={'M'}
      />
    <Second />
    <Register 
        Batch={'074'}
        Faculty={'BEX'}
        College= {'KEC'}
         Students={STUDENTS}
         />
         <Counter />
    </div>
  );
}

export default App;
