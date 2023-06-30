import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import { db } from "../firebase.config";


function Contact() {
    const [landlord, setLandlord] = useState(null)
    
    const params = useParams();
    
    const searchParams = useSearchParams();
    
    console.log(params)
    console.log(searchParams)
    
    useEffect(() => { 
        
        const fetchLandlord= async()=> {
            
            const docRef = doc(db, 'users', params.landlordId)
            
            const docSnap = await getDoc(docRef)
            
            if (docSnap.exists()) {
                setLandlord(docSnap.data())
            }
            
        }
        
        fetchLandlord()
        
    })
    
    return (
        <div>
            {landlord.name}
    </div>
  )
}

export default Contact