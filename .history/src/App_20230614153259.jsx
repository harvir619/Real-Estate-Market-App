import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
