import './App.css';




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
  return (
    <div className="App">
     Hello World!<br />

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
