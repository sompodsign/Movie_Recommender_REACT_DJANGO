import React from "react";

function Movie(props){

    console.log(props.movie.title)

    return <div className="card movie_card">
        <img src={props.movie.poster}
             className="card-img-top" alt="..."/>
            <div className="card-body">
                <i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom"
                   title="Play Trailer">
                </i>
                <h5 className="card-title">{props.movie.title}</h5>
                <span className="movie_info">{props.movie.year}</span>
                <span className="movie_info float-right"><i className="fas fa-star"></i> {props.movie.rating} / 10</span>
            </div>
    </div>

}

export default Movie;