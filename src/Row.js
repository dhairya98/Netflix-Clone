import movieTrailer from 'movie-trailer'
import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import axios from './axios'
import './Row.css'
// import movieTrailer from 'movie-trailer'
// Because of export default, we are calling axios, else we would have called instance

const baseUrl = "https://image.tmdb.org/t/p/original/"

function Row({title, fetchUrl, isLargeRow}) { 
    const [movies, setMovies]= useState([])
    const [trailerUrl, setTrailerUrl]= useState("")

    useEffect(()=>{
        // Snippet of code that runs based on a certain condition
        // Reload when Row gets updated ; [] only run once
        async function fetchData(){
            const request =  await axios.get(fetchUrl)
            // Axios is the alias of instance
            // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123
            // console.log(request.data.results)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        }
    }

    const handleClick= (movie)=>{
        if(trailerUrl){
            setTrailerUrl('')
            // For Trailer already being played
        } else {
            movieTrailer(movie?.name || "") // Movie name there (Not there --> catch [error])
            .then(url => {
                // https://www.youtube.com/watch?v=yQEondeGvKo , we need end key
                const urlParams = new URLSearchParams(new URL(url).search) //Pre-defined Parameter for URLs
                console.log(urlParams)
                setTrailerUrl(urlParams.get('v'))
                // console.log(urlParams.get('v'))
            }).catch((error)=> console.log(error))
        }
    }

    // console.table(movies)
    return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row__posters'>
            {/* Several Row Posters |=|=|=|=|=|  */}
            {movies.map((movie)=>(
                <img 
                key = {movie.id}
                onClick={()=>{
                    handleClick(movie)
                }}
                // key to render in the most efficient way, doesn't rerenders the whole row
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`} 
                src={`${baseUrl}${
                    isLargeRow? movie.poster_path: movie.backdrop_path 
                    // 
                }`} 
                alt={movie.name}></img>
            ))}
        </div>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        {/* {console.log(trailerUrl)} */}
        {/* Takes 2 args:- videoId and opts */}
        {/* Container -> Posters */}
    </div>
  )
}

export default Row