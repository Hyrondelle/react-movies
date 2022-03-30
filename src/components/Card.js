import React from 'react';
const image = require('../asset/liregenerique.png');

const Card = (props) => {
    return (
        <div className='card'>
            <div className='card-container'>
                <img src={props.movie.backdrop_path?"https://image.tmdb.org/t/p/original"+props.movie.backdrop_path:image} alt='movie' className='image'></img>
                <div className='movie-options'>
                    <h3>{props.movie.title}</h3>
                    <div className='date-vote'>
                        <p className='date'>{props.movie.release_date}</p>
                        <p className='vote'><span>★</span>{props.movie.vote_average}</p>
                    </div>
                    <p className='description'>{props.movie.overview}</p>
                    <input type='button' value="ajoutez aux favoris"></input>
                </div>
            </div>
        </div>
    );
};

export default Card;