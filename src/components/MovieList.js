import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [dataMovie, setDataMovie] = useState([
    {
      "Title": "Money Heist",
      "Year": "2017–2021",
      "imdbID": "tt6468322",
      "Type": "series",
      "Poster": "https://m.media-amazon.com/images/M/MV5BNDJkYzY3MzMtMGFhYi00MmQ4LWJkNTgtZGNiZWZmMTMxNzdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg"
    },
    {
      "Title": "Black Mirror: Bandersnatch",
      "Year": "2018",
      "imdbID": "tt9495224",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BMjM5MzgzMjM3OF5BMl5BanBnXkFtZTgwMzQ2MzQwNzM@._V1_SX300.jpg"
    },
    {
    "Title": "The Silent Sea",
    "Year": "2021–",
    "imdbID": "tt11570202",
    "Type": "series",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMjFkNDNjYTktZjJiNi00Y2U3LWE2NDgtZDM3YjIzMWUzNGM2XkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg"
    },
  ]);

  // useEffect(() => {
  //   const getData = async () => {
  //     const getFrom = await axios.get('http://www.omdbapi.com/?apikey=[a477174f]&')
  //     .then((res) => getFrom);

  //     setDataMovie()
  //   }

  //   getData()
  // }, [])
console.log('dataMovie', dataMovie);
  return (
    <>
      <div className="container">
        <div className="row">
          {
            dataMovie
              ? dataMovie.map((res, imdbID) => (
                <div className="col-md-4 my-4">
                  <div className="card" key={imdbID} >
                  <img src={res.Poster} className="card-img-top" alt=""/>
                    <div className="card-body">
                      <h5 className="card-title">{res.Title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{res.Year}</h6>
                      <button href="#" className="btn btn-primary">Show Details</button>
                    </div>
                  </div>
                </div>
              ))
            : false
          }
        </div>  
      </div>    
    </>
  )
}

export default MovieList;
