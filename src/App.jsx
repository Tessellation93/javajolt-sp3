import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import Home from './pages/Home.jsx'
import Vision from './pages/Vision.jsx'
import Endpoints from './pages/Endpoints.jsx'
import Ideas from './pages/Ideas.jsx'

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/endpoints" element={<Endpoints />} />
          <Route path="/ideas" element={<Ideas />} />
        </Routes>
      </main>
    </>
  )
}

export default App
