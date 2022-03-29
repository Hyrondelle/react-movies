import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Search = () => {
    const [moviesData,setMoviesData] = useState([]);
    const [searchData,setSearchData] = useState('potter');
    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=0a0ffe11da160d3d8acbe09b6f302b21&query='+searchData+'s&language=fr-FR')
        .then((data)=>setMoviesData(data.data.results))}
    ,[searchData]);

    return (
        <div className='search'>
            <div className='search-options'>
                <input type='text' placeholder='choississez un film'
                onChange={(e)=>setSearchData(e.target.value)}></input>
                <div className='btn-topflop'>
                    <button className='topToFlop'>Top<span>➞</span></button>
                    <button className='flopToTop'>Flop<span>➞</span></button>
                </div>
            </div>
            <div className='result'>
                
                {moviesData.map((movie)=><Card movie={movie} key={movie.id}/>)}
            </div>
        </div>
    );
};

export default Search;