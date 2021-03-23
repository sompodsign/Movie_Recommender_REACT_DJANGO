import axi from "./axiosConfig";
import React, {useEffect, useState} from "react"
import {Button} from '@material-ui/core';
import Movie from "./components/Movie"
import Filter from "./components/filterForm";

function App() {

//     const override = css`
//   display: block;
//   margin: 0 auto;
//   border-color: red;
// `;

    const [movie, setMovie] = useState({});
    // let [loading, setLoading] = useState(true);
    // let [color, setColor] = useState("#ffffff");

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
        <div className="outer">
            <Filter />
            <Movie movie={movie}/>
            <p>
                <Button className="btn" variant="contained" color="secondary" onClick={handleClick}>Next</Button>
            </p>
        </div>
    );
}

export default App;

//TODO: will implement loading spinner while fetching data.