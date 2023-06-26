import { useState, useEffect, useRef } from "react"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { useNavigate } from "react-router-dom"
import Spinner  from "../components/Spinner"

function CreateListing() {
    const [geolocationEnabled, setgeolocationEnabled] = useState(true)
    const [loading, setLoading] = useState(false)
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
    
    const { type, name, bedrooms, batrooms, parking, furnished,
        address, offer, regularPrice, discountedPrice, images, lattitude, longitude }
    = formData
  
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
    }, [isMounted])
    
    if (loading) {
        return <Spinner/>
    }
    
    const onSubmit = () => {
        
    }
    
    return (
        <div className="profile">
            <header>
                <p className="pageHeader">Create a Listing</p>
            </header>
            
            <main>
                <form onSubmit={onSubmit}></form>
            </main>
            
        </div>
  )
}

export default CreateListing