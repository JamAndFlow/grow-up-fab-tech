import React, { useContext } from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ThemeContext } from './context/ThemeContext'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`${theme}`}>
      <Navbar />
      <Routes>
        {/* index is used to make home default entry point */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
