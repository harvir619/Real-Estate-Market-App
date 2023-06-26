import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Spinner  from "../components/Spinner"

function CreateListing() {
    const [geolocationEnabled,setgeolocationEnabled] = useState(true)
    const [formData, setFormData] = useState({
        type: 'rent',
        name: 'rent',
        bedrooms: 1,
        batrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
        images: [],
        lattitude: 0,
        longitude: 0
  })
  
    const auth = getAuth()
    const nav = useNavigate()
    
    const isMounted = useRef(true)
    
    useEffect(() => {
        if (isMounted) {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setFormData({...formData, userRef: user.uid})
                } else {
                    nav('/sign-in')
                }
            })
        }
        
        return () => {
            isMounted.current=false
        }
    },[isMounted])
    
    return (
    <div>CreateListing</div>
  )
}

export default CreateListing