import React from 'react'
import videobg from '../Assests/videobg.mp4'

const Home = () => {
  return (
    <div className='main'>

      
      <video src={videobg} autoPlay  loop muted />
        <div className='content'>
        <h1> Hello React js </h1>
        <p>Welcome to the page guys</p>
        </div>

      </div>
  )
}

export default Home