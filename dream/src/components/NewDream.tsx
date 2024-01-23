import React from 'react'
import { useState, useEffect, ChangeEvent} from 'react'
import { Button } from '@mui/material'

interface FormData {
  date: string;
  dream_details: string;
}


const NewDream = () => {
  //manages the state of the newDream form. As user types input into text area, it is captured 
  const [formData, setFormData] = useState<FormData>({
    "date": '',
    "dream_details": ''
  })

  //This manages the state of the collection of dreams
  const [ dreams, setNewDreams ] = useState(() => {
    const listOfDreams = localStorage.getItem("dream");
    if (listOfDreams) {
      return JSON.parse(listOfDreams)
    } else {
      return []
    }
  })

  //The event type is ChangeEvent and we need to specify the type of the elements we are changing (input and text area)
  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    const { name, value } = event.target
    setFormData({...formData, [name]: value })
    // console.log("formData:", formData)
  }

  //Gives each dream an id#
  const id = dreams.length + 1

  const handleSubmit = (event: React.FormEvent, date: string, dream_details: string) => {
    event.preventDefault();
    setNewDreams((prev: object) => [
        ...dreams,
        {
          id:id,
          date: date,
          dream_details: dream_details,
        }
    ])
    setFormData({date:"", dream_details:""})
  }

  return (
    <>
      <div className='flex flex-col justify-center mx-auto w-full'>
      <h1 className='text-2xl flex justify-center'>Add Your Dream Here</h1>
        <div>
          <form action="" 
            onSubmit={(event) => handleSubmit(event, formData.date, formData.dream_details)}
          >
            <p>Date of Dream:</p>
            <input 
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              />
            <p>Dream Details:</p>
            <textarea 
              className='border italic w-[500px] h-[500px] cursor-text placeholder-opacity-25'
              placeholder='Provide dream details'
              name="dream_details"
              value={formData.dream_details}
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
