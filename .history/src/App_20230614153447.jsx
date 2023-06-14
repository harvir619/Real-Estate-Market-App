import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/" element={<Profile/>} />
          
          
        </Routes>
      </Router>
    </>
  )
}

export default App
