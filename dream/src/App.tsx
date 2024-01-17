import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import PageLayout from './components/PageLayout';
import NewDreamPage from './pages/NewDreamPage';

function App() {
  return (
    <Router >
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<PageLayout />} />
          <Route path="/newDream" element={<NewDreamPage />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
