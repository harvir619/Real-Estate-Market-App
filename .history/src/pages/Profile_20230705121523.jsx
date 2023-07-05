import {useEffect, useState } from 'react'
import { getAuth,updateProfile } from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom'
import { updateDoc,doc, collection,getDocs,query,where,orderBy,deleteDoc } from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import arrowRight from '../assets/svg/keyboardArrowRightIcon.svg'
import homeIcon from '../assets/svg/homeIcon.svg'

function Profile() {
  const auth = getAuth()
  const [changeDetails,setChangeDetails] = useState(false)
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email
  })
  const [listings,setListings] = useState(null)
  const [loading,setLoading] = useState(true)
  
  const {name,email} = formData
  const navigate = useNavigate()
  const onLogout = () => {
    auth.signOut()
    navigate('/') 
  }
  
  const onSubmit= async() => {
    try {
      if (auth.currentUser.displayName !== name)
      {
        //Update displayname in fb
        await updateProfile(auth.currentUser,{displayName:name})
      }
      
      //Update in firestore
      const userRef = doc(db,'users',auth.currentUser.uid)
      await updateDoc(userRef,{name})
      
    } catch (error) {
      toast.error('Could not update profile')
    }
  }
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]:e.target.value
    }))
  }
  
  useEffect(() => {
    
    const fetchListings = async () => {
      try {
        const getRef = collection(db, 'listings')
        
        const q = query(getRef,where('userRef','==',auth.currentUser.uid),orderBy('timestampt'))
        
      } catch (error) {
        
      }
    }
    fetchListings()
  },[])
  
  
  return <div className="profile">
    <header className="profileHeader">
      <p className="pageHeader">
        My Profile
      </p>
      <button className="logOut" type="button" onClick={onLogout}>Logout</button>
    </header>
    <main>
      <div className="profileDetailsHeader">
        <p className="profileDetailsText">
          Personal Details</p>
          <p className="changePersonalDetails" onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState)
            }}
          >
            {changeDetails?'done':'change'}
        </p>
      </div>
      <div className="profileCard">
        <form>
          <input
            type='text'
            id='name'
            className={!changeDetails ? 'profileName' : 'profileNameActive'}
            disabled={!changeDetails}
            value={name}
            onChange={onChange}
          />
          <input
            type='email'
            id='email'
            className={!changeDetails ? 'profileEmail' : 'profileEmailActive'}
            disabled={true}
            value={email}
            onChange={onChange}
          />          
        </form>
      </div>
      <Link to="/create-listing" className="createListing">
        <img src={homeIcon} alt="home" />
        <p>Sell or rent your home</p>
        <img src={arrowRight} alt="arrow" />
      </Link>
    </main>
  </div>
}

export default Profile