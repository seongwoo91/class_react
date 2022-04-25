import React from 'react';

function YoutubeItem(props){
    console.log("123")
    return (
        <li>
            <img src={"https://image.tmdb.org/t/p/w500"+props.video.poster_path} alt={props.video.poster_path} />
            <p className='title'>{props.video.title}</p>
        </li>
    )
}

const YoutubeList = (props) => {
    console.log("123")
    console.log(props.items.data.results)
  return (
    <div className="youtube__list">
        <ul>
            {props.items.data.results.map((list, index) => (
                <YoutubeItem key={index} video={list} />
            ))}
        </ul>
    </div>
  )
}
export default YoutubeList;