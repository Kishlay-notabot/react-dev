import './App.css';
import { useState } from 'react';




//test comp was a component with simple h1 tags and the @email content from the vid but now it is converted to a prop for multiple instances of usage.
const Testcomp = (args) => {
  return (
    <div>
        <h1>{args.name}</h1>
        <h2>{args.age}</h2>
        {args.email}

    </div>




  );
 
};





function App() {
  const incage = () => {
  setAge(age = age+1);}
  let [age, setAge] = useState(0); 
  // here we are using let because const cannot be re assigned but in the video it was running with const
  const isBlue = true;
  const names = ["ak", "bk","kk"];
  const [inputValue, setIPvalue] = useState("")
  const handleInputChange = (event) => {
    setIPvalue(event.target.value)
  }
  return (
    //51:03

    <div className="App">
     Hello World!<br />
     <p>{names[0]} is fetched from an array</p>
     <p>{names[2]} is fetched from an array</p>
    {/* completed ep3 now doing hooks and states */}
    {/* click control +/ to comment out  */}
    <p>{age}<button onClick={incage}>click</button> </p>

    {/* 11/9/23 states and hooks*/}
    <input type='text'onChange={handleInputChange}/><br />
    {inputValue}
    <h1 style={{color: isBlue? "blue": "red"}}>Hi there its blue if true</h1>
     conditional rendering:
    {age >= 18? <h1>up</h1>: <h2>small</h2>}
     Variables:
     <div>{testprop.name} <hr />{testprop.age} {testprop.email}</div>
      
    <br /> <br /> component test[now converted to prop]:
      
      <Testcomp name="Kishlay" age={11} email="@mail.com" />
      <p>Use "" for strings and {} for divs.</p>

      Prop test: <br />

      <Userid label="Click me!" /><br /><br />
      <Userid label="DON'T" />  <hr />
      <Userid label="its a prop!" />


    </div>
  );
};


//7/9/2023 now doing CSS


//9/9/2023 conditional css/rendering


const Userid = (props) => {
  return (
    <button>
      {props.label}
    </button>
  );
};
//props
const testprop = {
  name: "KK",
  age: "nah",
  email:null,
}


//hello

export default App;
