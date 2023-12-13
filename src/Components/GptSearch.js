import React from 'react'
import GptMovieSuggestion from './GptMovieSuggestion'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <> 
      <div className='fixed -z-10 '>
      <img className='h-screen object-cover w-screen' alt="bg-img"  src="https://assets.nflxext.com/ffe/siteui/vlv3/b4c7f092-0488-48b7-854d-ca055a84fb4f/5b22968d-b94f-44ec-bea3-45dcf457f29e/IN-en-20231204-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
      </div>
      <div className=' md:pt-0'>
      
      <GptSearchBar/>
      <GptMovieSuggestion/>
      </div></>
  
  )
}

export default GptSearch