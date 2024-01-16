import { useState, useEffect } from 'react';
import './App.css';
import { recognize } from 'tesseract.js';

function App() {
  const [selectedImg, setSelImg] = useState(null);
  const [textR, setTextres] = useState("result text will appear here");

  const performOCR = () => {
    recognize(selectedImg, 'hin', {
      logger: (e) => console.log(e),
      tessedit_pageseg_mode: 'SINGLE_CHAR', // Note: Use the string value directly
    })
      .then((out) => {
        console.log(out);
        setTextres(out.data.text);
      })
      .catch((error) => console.error('Error during OCR:', error));
  };

  useEffect(() => {
    if (selectedImg) {
      performOCR();
    }
  }, [selectedImg]);

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setSelImg(e.target.files[0]);
  };

  return (
    <div className="App">
      <span>Hi</span>
      <p>
        <label htmlFor="upload">Upload</label>
        <input type="file" id="upload" accept="image/*" onChange={handleChange} />

        {selectedImg && (
          <span className="box-img">
            <img src={URL.createObjectURL(selectedImg)} alt="thumb" />
          </span>
        )}
        {textR && (
          <div className="box-p">
            <p>{textR}</p>
          </div>
        )}
      </p>
    </div>
  );
}

export default App;
