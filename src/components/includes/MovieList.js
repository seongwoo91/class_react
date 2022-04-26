import React from 'react';
import MovieItem from './MovieItem';


function MovieList(props) {
  console.log(props)
  console.log("123")
  return (
    <div className='youtube__list'>
      <ul>
        {props.videos.map((video, index) => (
          <MovieItem key={index} video={video} />
        ))}
      </ul>
    </div>
  )
}
export default MovieList