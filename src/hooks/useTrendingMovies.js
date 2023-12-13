import { useDispatch } from "react-redux";
import {  addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";


const useTrendingMovies=()=>{
    const dispatch = useDispatch();

const getTrendingMovies = async () => {
  try {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);

    // Example of dispatching the action with a payload
    dispatch(addTrendingMovies(json.results));
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    // Handle the error, maybe dispatch an action to indicate the error
  }
};

useEffect(() => {
  getTrendingMovies();
}, []);
}
export default useTrendingMovies;