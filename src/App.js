import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import ConsultationForm from './components/ConsultationForm'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consultation" element={<ConsultationForm />} />
      </Routes>
    </Router>
  )
}

export default App