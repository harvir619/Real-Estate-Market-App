import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'


function Profile() {
  const [user,setUser]= useState(null)

  const auth=getAuth()
  
  useEffect(()=> {
    setUser(auth.currentUser)
  },[])
  
  return (
    <>
      <h1>
      {auth.currentUser.displayName}
      </h1>
    </>
  )
}

export default Profile