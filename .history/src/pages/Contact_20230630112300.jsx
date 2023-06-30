import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { db } from "../firebase.config";
import { toast } from "react-toastify";


function Contact() {
    const [landlord, setLandlord] = useState(null)
    const [message, setMessage] = useState('')
    const [searchParams,getSearchParams] = useSearchParams()
    const params = useParams();
    
    useEffect(() => {     
        const fetchLandlord= async()=> {
            try {
                const docRef = doc(db, 'users', params.landlordId)
                
                const docSnap = await getDoc(docRef)
                
                if (docSnap.exists()) {
                    setLandlord(docSnap.data())
                }
                else {
                    toast.error('Could not fetch landlord')
                }
            } catch (error) {
                toast.error('Could not fetch landlord')    
            }
        }
        
        fetchLandlord()
        
    },[params.landlordId])
    
    return (
        <div>
            <h1>Contact {landlord.name} </h1>
    </div>
  )
}

export default Contact