import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Card from '../components/Card';

const Best = () => {
    
    const [listData,setListData] = useState([]);
    let nbMoviesId = [];
        if(localStorage.length!==0){     
            for(let i = 0; i < localStorage.length; i++){
                nbMoviesId.push(localStorage.key(i))    
            }       
        } 
    let j =0;
    useEffect(()=>{ 
        for(j=0;j<nbMoviesId.length;j++){
            axios.get('https://api.themoviedb.org/3/movie/'+nbMoviesId[j]+'?api_key=0a0ffe11da160d3d8acbe09b6f302b21&language=fr-FR')
        .then((res) =>setListData((listData)=>[...listData,res.data]))
        }
        
    },[j])  
        

    return (
        <div className='best'>
            <Navigation/>
            <h2>Coups de coeur ❤️</h2>
            <div className='best-movies'>
                {localStorage.length>0?(
                    listData.map((movie)=><Card key={movie.id} movie={movie}/>)
                ):
                  (<div className='noMovies'>vous n'avez pas encore ajouté de film</div>)
            }
            </div>
        </div>
    );
};

export default Best;