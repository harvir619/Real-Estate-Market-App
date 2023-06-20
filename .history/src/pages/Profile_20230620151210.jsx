import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'


function Profile() {

  const auth=getAuth()
  
  useEffect(()=> {
    console.log(auth.currentUser)
  },[])
  
  return (
    <div>Profile</div>
  )
}

export default Profile