import axi from "./axiosConfig";
import React, {useEffect, useState} from "react"
import {Button} from '@material-ui/core';
import Movie from "./components/Movie"

function App() {

    const [movie, setMovie] = useState({});

    function fetchMovie() {
        axi.get("/api/v1").then(r => setMovie(r.data.movie));
    }

    useEffect(() => {
        fetchMovie()
    }, [])

    function handleClick() {
        fetchMovie()
    }

    return (
        <div>
            <Movie movie={movie}/>
            <p>
                <Button className="btn" variant="contained" color="secondary" onClick={handleClick}>Next</Button>
            </p>
        </div>
    );
}

export default App;