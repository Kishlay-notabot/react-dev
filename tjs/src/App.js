import { useState } from 'react';
import './App.css';

function App() {
  const [selectedImg, setSelImg] = useState(null)
  const handleChange = e => {
    console.log(e.target.files[0])
    setSelImg(e.target.files[0])
  }
  return (
    <div className="App">
      <p>Hi</p>
      <p><label htmlFor='upload'>Upload</label>
      <input type='file' id='upload' accept='image/*' onChange={handleChange} />
      
      
      {selectedImg && (
        <div className='box-img'>
          <img src={selectedImg} alt='thumb' />
        </div>
      )}
      
      
      </p>
    </div>
  );
}

export default App;
