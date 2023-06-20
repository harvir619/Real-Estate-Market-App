import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'


function Profile() {
  const [user,setUser]= useState({})

  const auth=getAuth()
  
  useEffect(()=> {
    setUser(auth.currentUser)
  },[])
  
  return (
    <div>
      <h1>
      {auth.currentUser.displayName}
      </h1>
    </div>
  )
}

export default Profile