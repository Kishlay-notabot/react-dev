import './App.css';





const Testcomp = () => {
  return (
    <div>
        <h1>Kishlay</h1>
        <h2>@mail.com</h2>

    </div>




  );
 
};





function App() {
  return (
    <div className="App">
     Hello World!
     <div>{userid.name} <hr />{userid.age} {userid.email}</div>
      <Testcomp />


    </div>
  );
};








//props
const userid = {
  name: "KK",
  age: 11,
  email:null,

}

export default App;
