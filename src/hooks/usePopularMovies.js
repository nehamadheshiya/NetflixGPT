import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";


const usePopularMovies=()=>{
    const dispatch = useDispatch();

const getPopularMovies = async () => {
  try {
    const data = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);

    // Example of dispatching the action with a payload
    dispatch(addPopularMovies(json.results));
  } catch (error) {
    console.error("Error fetching now playing movies:", error);
    // Handle the error, maybe dispatch an action to indicate the error
  }
};

useEffect(() => {
  getPopularMovies();
}, []);
}
export default usePopularMovies;