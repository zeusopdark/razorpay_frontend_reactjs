import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from "./component/Home.jsx"
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/paymentsuccess" element={<Home />} />
    </Routes>
  )
}

export default App