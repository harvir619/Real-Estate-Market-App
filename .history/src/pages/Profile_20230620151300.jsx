import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'


function Profile() {

  const auth=getAuth()
  
  useEffect(()=> {
    console.log(auth.currentUser)
  },[])
  
  return (
    <div>{auth.currentUser}</div>
  )
}

export default Profile