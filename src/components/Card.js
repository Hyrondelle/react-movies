import React from 'react';

const Card = (props) => {
    return (
        <div className='card'>
            <div>
                <h3>{props.movie.title}</h3>
            </div>
        </div>
    );
};

export default Card;