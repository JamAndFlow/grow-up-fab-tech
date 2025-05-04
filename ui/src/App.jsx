import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        {/* index is used to make home default entry point */}
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
