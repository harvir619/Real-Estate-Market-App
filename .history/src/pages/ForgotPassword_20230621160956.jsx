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
  
  const onSubmit = async (e) => {
    e.preventDefault()
    
    const auth = getAuth()
    const user = auth.currentUser
    sendPasswordResetEmail(user,email)
    
  }
  
  return (
    <div className="pageContainer">
        <header>
        <p className="pageHeader">Forgot Password</p>  
        </header>
        <main>
          <form onSubmit={onSubmit}>
            <p>Email</p>
          <input type="email" className="emailInput"
            value={email} onChange={onChange}
            placeholder="Email" id='email'
          />
          <Link className="forgotPasswordLink" to="/sign-in">Sign In</Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill='#ffffff' width='34px' height='34px'/>
            </button>
          </div>
          </form>
        </main>
    </div>
  )
}

export default ForgotPassword