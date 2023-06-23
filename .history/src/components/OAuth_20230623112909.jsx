import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { doc, setDoc, getDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'


function OAuth() {
    const navigate = useNavigate()
    const location = useLocation()
    
    
  return (
      <div className='socialLogin'>
          <p>Sign {location.pathname==='/sign-up'?'up':'in'} with</p>
    </div>
  )
}

export default OAuth