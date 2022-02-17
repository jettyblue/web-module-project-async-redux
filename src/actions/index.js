import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getGifs = () => {
    return ( dispatch => {
        dispatch({ type: FETCH_START });
        axios.get('https://api.giphy.com/v1/gifs/search?api_key=rdqOVrR8QiWAO6A5R3i5yuQqIZBlQ1Af&q=dogs')
          .then(res => {
            // console.log(res.data.data);
            dispatch({ type: FETCH_SUCCESS, payload: res.data.data });
          })
          .catch(err => {
            console.error(err)
          })
    })
}

export const fetchStart = () => {
    return ({ type: FETCH_START })
}

export const fetchSuccess = gifs => {
    return ({ type: FETCH_SUCCESS, payload: gifs })
}