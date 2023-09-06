import './App.css';





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
      
    <br /> <br /> component test:
      
      <Testcomp />

      Prop test: <br />
      <Userid label="Click me!" /><br /><br />
      <Userid label="DON'T" />  

    </div>
  );
};







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
  age: 11,
  email:null,
}

export default App;
