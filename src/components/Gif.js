import React from 'react';

const Gif = (props) => {
    const { gif } = props;

    return(
        <div className='gif'>
            <h3>{gif.title}</h3>
            <img width="200" src={gif.images.original.url}/>
            <p> <strong>Source:</strong> <br></br>{gif.username} </p>
            <p> <strong>Rating:</strong> {gif.rating} </p>
            <a target="_blank" href={gif.url}><button>Check it out on Giphy</button></a>
        </div>
    )
}

export default Gif;