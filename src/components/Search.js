import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Search = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [searchData, setSearchData] = useState('a');
    const [topOrFlop, setTopOrFlop] = useState(null);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=0a0ffe11da160d3d8acbe09b6f302b21&query=' + searchData + 's&language=fr-FR')
            .then((data) => setMoviesData(data.data.results))
    }
        , [searchData]);

    return (
        <div className='search'>
            <div className='search-options'>
                <input type='text' 
                    placeholder='choississez un film'
                    onChange={(e) => setSearchData(e.target.value)}>
                </input>
                <div className='btn-topflop'>
                    <button 
                        onClick={()=>setTopOrFlop('topToFlop')}
                        className='topToFlop'>Top<span>➞</span>
                    </button>
                    <button 
                        onClick={()=>setTopOrFlop('flopToTop')}
                        className='flopToTop'>Flop<span>➞</span>
                    </button>
                </div>
            </div>
            <div className='result'>
               {moviesData
                    .sort((a,b) =>{
                    if(topOrFlop==='topToFlop'){
                        return b.vote_average - a.vote_average}
                    else if(topOrFlop==='flopToTop'){
                        return a.vote_average - b.vote_average}
                    })
                    .map((movie) => 
                    <Card movie={movie} key={movie.id} />)}                   
            </div>
        </div>
    );
};

export default Search;