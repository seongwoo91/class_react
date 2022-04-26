import React from 'react'

function MovieItem(props){
    console.log("123")    
    return (    
    <li>    
    <img src={"https://image.tmdb.org/t/p/w500"+props.video.poster_path} alt={props.video.poster_path} />    
    <p className='title'>{props.video.title}</p>    
    </li>    
    )    
    }
export default MovieItem