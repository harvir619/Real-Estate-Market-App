import React, { useEffect,useState } from 'react'
import { getAuth } from 'firebase/auth'


function Profile() {
  const [formData,setFormData]= useState(null)

  const auth=getAuth()
  
  useEffect(()=> {
    setUser(auth.currentUser)
  },[])
  
  return formData ? <h1>{formData.displayName}</h1> :'Not Logged In'
}

export default Profile