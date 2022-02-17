import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import GifList from './components/GifList';
import GifForm from './components/GifForm';
import { getGifs } from './actions';
import data from './data/gifs';
import './App.css';

function App(props) {
  const { loading, error, getGifs } = props;
  // console.log(props);

    // ** slices of state **
  // const gifs = data;
  // const loading = false;
  // const error = '';

  useEffect(() => {
    getGifs();
  }, []);

  return (
    <div className="App">
      <h1>Async Redux Project</h1>
      <h2> Search for Gifs</h2>
      <GifForm />

      {
        (error !== "") && <h3>{error}</h3>
      }

      {
        loading ? <h3>Loading...</h3> : <GifList />
      }

    </div>
  );
}

const mapStateToProps = state => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapActionsToProps = () => {
  return {
    fetchStart
  }
}

export default connect(mapStateToProps, { getGifs })(App);

// rdqOVrR8QiWAO6A5R3i5yuQqIZBlQ1Af
