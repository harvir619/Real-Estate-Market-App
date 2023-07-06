import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

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