import React from 'react'
import MovieList from "./MovieList";
import {useSelector} from "react-redux"

const SecondaryContainer = () => {
  const movies=useSelector(store=>store.movies)
  return (
    movies.nowPlayingMovies &&(
    <div className=" bg-black">
      <div className="mt-0 md:-mt-64 relative pl-4 md:pl-10 z-20">
      <MovieList title={"Now Playing "} movies={movies.nowPlayingMovies}/>
      <MovieList title={"Trending"} movies={movies.trendingMovies}/>
      <MovieList title={"Popular"} movies={movies.popularMovies}/>
      <MovieList title={"Upcoming "} movies={movies.upComingMovies}/>
      <MovieList title={"Horror"} movies={movies.nowPlayingMovies}/>
      </div>
  
    </div>
    )
  )
}

export default SecondaryContainer