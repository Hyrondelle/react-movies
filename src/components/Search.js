import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Search = () => {
    const [moviesData,setMoviesData] = useState([]);
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=0a0ffe11da160d3d8acbe09b6f302b21&query=avengers&language=fr-FR')
        .then((data)=>setMoviesData(data.data.results))}
    ,[]);

    return (
        <div className='search'>
            <div className='result'>
                
                {moviesData.map((movie)=><Card movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
};

export default Search;