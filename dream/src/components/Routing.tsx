import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NewDreamPage from '../pages/NewDreamPage'

const Routing = () => {
  return (
    <Router>
      <Routes>
        <Route path='/newDream' element={<NewDreamPage />} />
      </Routes>
    </Router>
  )
}

export default Routing
