import React, { useEffect,useState } from 'react'
import { getAuth } from 'firebase/auth'
import { useNavigate,Link } from 'react-router-dom'


function Profile() {
  const auth=getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  const navigate = useNavigate()
  
  const onLogout = () => {
    auth.signOut()
  }
  
  
  return <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">
        My Profile
      </p>
      <button className="logOut" type="button" onClick={onLogout}>Logout</button>
    </header>
  </div>
}

export default Profile