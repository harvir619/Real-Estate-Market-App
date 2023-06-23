import { useState } from "react"
import { Link } from "react-router-dom"
import { getAuth, sendPasswordResetEmail } from 'firebase/auth'
import { toast } from 'react-toastify'
import { ReactComponent as ArrowRightIcon } from '../assets/svg/keyboardArrowRightIcon.svg'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  
  const onChange = (e) => {
    setEmail(e.target.value)
  }
  
  return (
    <div>
      <form>
        <h1>Forgot Password</h1>
        <p>Email</p>
        <input type="text" value={email} onChange={onChange} />
      </form>
    </div>
  )
}

export default ForgotPassword