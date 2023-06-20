import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Explore from './pages/Explore'
import Profile from './pages/Profile'
import ForgotPassword from './pages/ForgotPassword'
import Offers from './pages/Offers'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Navbar from './components/Navbar'
import {ToastContainer} from 'react-toastify'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/forgot-password' element={<ForgotPassword/>} />
          <Route path= '/offers' element={<Offers/>} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp/>} />
        </Routes>
        {<Navbar/>}
      </Router>
    </>
  )
}

export default App
