import React, { createContext, useContext, useState, useEffect } from 'react';


interface Dream {
  id: string
  date: string
  dream_details: string
}

interface DreamContextProps {
  dreams: Dream[]
  addDream: (newDream: Dream) => void
}

const DreamContext = createContext<DreamContextProps | undefined>(undefined)

export const DreamProvider: React.FC = ({ children }) => {
  const [dreams, setDreams] = useState<Dream[]>([])
  
  //gets dreams stored in localStorage
  useEffect(() => {
    const listOfDreams = localStorage.getItem('dream')
    if (listOfDreams) {
      setDreams(JSON.parse(listOfDreams))
    }
  }, [])

  const addDream = (newDream: Dream) => {
    setDreams((prevDreams) => [...prevDreams, newDream])
  }

  return (
    <DreamContext.Provider value={{ dreams, addDream}}>
      {children}
    </DreamContext.Provider>
  )
}

export const useDreamContext = () => {
  const context = useContext(DreamContext)

  if(!context) {
    throw new Error('useDreamContext must be used within a DreamProvider')
  }
  return context
}