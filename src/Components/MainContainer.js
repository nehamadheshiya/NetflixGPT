import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const movies=useSelector(store =>store.movies?.nowPlayingMovies);
    if(movies===null) return; //early return or use(!movies)
    const mainMovies=movies[0]
    // console.log(mainMovies);

    const{original_title,overview,id}=mainMovies

  return (
    <div className='pt-[30%] bg-black md:pt-0'>
        <VideoTitle  title={original_title} overview={overview}/>
        <VideoBackGround movieId={id}/>
    </div>
  )
}

export default MainContainer