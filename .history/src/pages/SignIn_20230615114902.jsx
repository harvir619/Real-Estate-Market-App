import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {ReactComponent as ArrowRightIcon} from '../assets/svg/keyboardArrowRightIcon.svg'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'

function SignIn() {
  const [,] = useState()
  const navigate = useNavigate()
  
  return (
    <div>
      <Link to='/sign-up'>Sign Up</Link>
    </div>
  )
}

export default SignIn