import React from 'react'
import { useState, useEffect, ChangeEvent} from 'react'
import { Button } from '@mui/material'

const NewDream = () => {
  //1. ✅ Capture the input information (onChange) & date
  //2. User clicks submit button and both the input and date get saved as an object in local storage (onClick)
  //3. After user clicks submit, form gets cleared and date is cleared (handleSubmit?)
  
  //manages the state of the newDream form. As user types input into text area it is captured 
  const [newDream, setNewDream] = useState({})

  const handleChange = (event: ChangeEvent) =>{
    console.log("this is: ", event)
    setNewDream(event.target)
  }



  return (
    <>
      <div className='flex flex-col justify-center mx-auto w-full'>
      <h1 className='text-2xl flex justify-center'>Add Your Dream Here</h1>
        <div>
          <form action="" >
            <p>Date of Dream:</p>
            <input type="date"/>
            <p>Dream Details:</p>
            <textarea 
              className='border w-[500px] h-[500px]'
              onChange={handleChange}
            /><br />
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
