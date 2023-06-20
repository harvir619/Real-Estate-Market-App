import React, { useEffect,useState } from 'react'
import { getAuth } from 'firebase/auth'


function Profile() {
  const auth=getAuth()
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })

  
  return <></>
}

export default Profile