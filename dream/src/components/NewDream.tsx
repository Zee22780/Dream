import React from 'react'
import { Button } from '@mui/material'

const NewDream = () => {
  return (
    <>
      <div className='flex flex-col justify-center mx-auto w-full'>
      <h1>Add Your Dream Here:</h1>
        <div>
          <form action="" >
            <p>Date of Dream:</p>
            <input type="date"/>
            <p>Dream Details:</p>
            <input className='border w-[500px] h-[500px]' type="text" placeholder='' /><br />
            <Button 
              variant='outlined'
              type="submit">
                Submit
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default NewDream
