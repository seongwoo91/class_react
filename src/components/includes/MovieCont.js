import React from 'react'
import MovieList from './MovieList';

function MovieCont(props) {
  return (
    <section className="youtube__cont">
      <div className="container">
        <div className="youtube__inner">
            <MovieList items={props.lists}/>
        </div>
      </div>
    </section>
  )
}

export default MovieCont;