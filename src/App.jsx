import { useState } from "react";
import './App.css';
function App() {
  const [input, setInput] = useState(0);
  const [result, setResult] = useState(null);

  const inputHandler = (e) => setInput(e.target.value);

  function convertTemperature() {
    if (input !== '') {
      const celsius = ((input - 32) * 5) / 9;
      setResult(celsius.toFixed(1));
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      convertTemperature();
    }
  };

  return (
    <div id="main-container" className="container mt-5 d-flex flex-column align-items-center justify-content-center">
      <h1 id="title" className="mb-4 text-warning">Temperature Converter</h1>

      <label htmlFor="f-temperature" className="form-label">
        Enter Temperature (°F):
      </label>
      <input
        type="number"
        id="f-temperature"
        className="form-control w-50 mb-3"
        onChange={inputHandler}
        value={input}
        onKeyDown={handleKeyPress}
      />

      <p className="result mb-2 text-warning">Result (Celsius): <strong>{result !== null ? result : "--"}</strong></p>

      <button
        className="btn btn-warning"
        id="convert-result"
        onClick={convertTemperature}
      >
        Convert
      </button>
    </div>
  );
}

export default App;
