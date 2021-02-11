import './App.css';
import { useState, useEffect } from 'react';

function url(path) {
  return process.env.NODE_ENV === "development" ?
  `http://localhost:1234${path}` : path
}

function App() {
  const [data, setData] = useState("Do you see this?")



  return (
    <div className="App">
      <header className="App-header">
        <h2>API DATA: {data}</h2>
      </header>
    </div>
  );
}

export default App;
