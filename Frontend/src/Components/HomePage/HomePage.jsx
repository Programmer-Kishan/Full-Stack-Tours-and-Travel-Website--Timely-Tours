import React from 'react';
import Nature from "../../assets/Videos/Nature.mov"

const HomePage = () => {
  return (
    <main className='relative overflow-hidden h-screen -z-30'>
        <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
            <source src={Nature} type="video/mp4"></source>
        </video>
    </main>
  )
}

export default HomePage