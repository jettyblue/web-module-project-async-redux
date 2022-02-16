import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);


  useEffect(() => 
    axios.get("http://www.omdbapi.com/?t=superbad&apikey=59398ee2")
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.error(err)
    }) 
  )



  return (
    <div className="App">
      Async Redux Project
    </div>
  );
}

export default App;