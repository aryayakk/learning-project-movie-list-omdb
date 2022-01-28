/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataDetail, setDetail] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const getFrom = await axios.get('http://www.omdbapi.com/?apikey=a477174f&s=Avengers')
      const result = getFrom.data.Search;

      setDataMovie(result);
    }

    getData()
  }, [])
console.log('dataMovie', dataMovie);

  const showDetail = async (e) => {
    const clicked = e.target.value;
    const show = await axios.get(`http://www.omdbapi.com/?apikey=a477174f&i=${clicked}`)
    console.log('show', show);
    setDetail(show.data)
  }

  return (
    <>
      <div className="container">
        <div className="row mt-5">
          <h1 className="text-warning">Jajal Movie DB</h1>
          {
            dataMovie
              ? dataMovie.map((res) => (
                <div className="col-md-4 my-4" key={res.imdbID}>
                  <div className="card">
                  <img src={res.Poster} className="card-img-top" alt="" />
                    <div className="card-body">
                      <h5 className="card-title">{res.Title}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">{res.Year}</h6>
                      <button href="#" className="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" onClick={showDetail} value={res.imdbID}>Show Details</button>
                    </div>
                  </div>
                </div>
              ))
            : false
          }
        </div>  
      </div>

      {/* MODAL */}
      <div className="modal fade" id="movieDetailModal" tabIndex="-1" aria-labelledby="movieDetailModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="movieDetailModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-3">
                    <img src="" className="img-fluid" />
                  </div>

                  <div className="col-md">
                    <ul className="list-group">
                      <li className="list-group-item"><h4>{dataDetail.Title} {dataDetail.Year}</h4></li>
                      <li className="list-group-item"><strong>Director : </strong>{dataDetail.Director}</li>
                      <li className="list-group-item"><strong>Actors : </strong>{dataDetail.Actors}</li>
                      <li className="list-group-item"><strong>Writer : </strong>{dataDetail.Writer}</li>
                      <li className="list-group-item"><strong>Plot : </strong>{dataDetail.Plot}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MovieList;
