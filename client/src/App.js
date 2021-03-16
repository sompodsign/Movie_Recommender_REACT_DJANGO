import axi from "./axiosConfig";
import {useState} from "react"
import React from 'react';
import {Button} from '@material-ui/core';
import List from "./components/List"

function App() {

    const [movie, setMovie] = useState({})

    async function handleClick() {
        await axi.get("/api/v1").then(r => setMovie(r.data.movie));
    }

    console.log(movie);

    return (
        <div>
            {
                Object.keys(movie).length !== 0 && <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img style={{width: 400, height: 500}} src={movie.poster} alt="poster"/>
                        </div>
                        <div className="flip-card-back">
                            <List movie={movie.title}/>
                            <List movie={movie.overview}/>
                            <List movie={movie.genre}/>
                            <List movie={movie.rating}/>
                        </div>
                    </div>
                </div>
            }



            <Button variant="contained" color="secondary" onClick={handleClick}>Suggest</Button>
        </div>
    );
}

export default App;
