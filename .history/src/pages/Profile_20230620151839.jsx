import React, { useEffect } from 'react'
import { getAuth } from 'firebase/auth'


function Profile() {
  const [loggedin,setLoggedIn]= useState(false)

  const auth=getAuth()
  
  useEffect(()=> {
    console.log(auth.currentUser)
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