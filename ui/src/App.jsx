import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home'

function App() {
  return (
      <Routes>
        {/* index is used to make home default entry point */}
        <Route index element={<Home />} />
      </Routes>
  )
}

export default App
