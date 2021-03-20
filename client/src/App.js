import axi from "./axiosConfig";
import React, {useState, useEffect} from "react"
import {Button} from '@material-ui/core';
import Movie from "./components/Movie"

function App() {

    const [movie, setMovie] = useState({});

    useEffect(()=> {
        axi.get("/api/v1").then(r => setMovie(r.data.movie));
    }, [])

    function handleClick(){

    }

    return (
        <div>

                <Movie movie={movie}/>
{/*// Object.keys(movie).length !== 0 &&*/}

            <p>
                <Button className="btn" variant="contained" color="secondary" onClick={handleClick}>Suggest</Button>
            </p>
        </div>
    );
}

export default App;