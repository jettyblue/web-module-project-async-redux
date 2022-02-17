import React, { useState, useEffect } from 'react';
import axios from 'axios';

import GifList from './components/GifList';
import GifForm from './components/GifForm';
import data from './data/gifs';
import './App.css';

function App(props) {
  const gifs = data;
  const loading = false;
  const error = '';

  // const [dogData, setDogData] = useState([]);
  // const [error, setError] = useState(null);


  // useEffect(() => 
  //   axios.get("https://api.giphy.com/v1/gifs/search?api_key=rdqOVrR8QiWAO6A5R3i5yuQqIZBlQ1Af&q=dogs")
  //   .then(res => {
  //     console.log(res.data.data)
  //   })
  //   .catch(err => {
  //     console.error(err)
  //   }) 
  // )


  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <h2> Search for Gifs</h2>
      <GifForm />

      {
        loading? <h3>Loading...</h3> : <GifList gifs={gifs} />
      }

    </div>
  );
}

export default App;

// rdqOVrR8QiWAO6A5R3i5yuQqIZBlQ1Af

