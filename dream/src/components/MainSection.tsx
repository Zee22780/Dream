import React, { useState, useEffect } from 'react'
import AllDreams from './AllDreams'



const MainSection = () => {
 
  return (
    <>
      <div className='border-l grid-cols-4'>
        <div className='ml-5'> 
          <AllDreams  />
        </div>
      </div>
    </>
  )
}

export default MainSection
