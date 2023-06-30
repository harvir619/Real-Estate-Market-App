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
        <div className="pageContainer">
            <header>
                <p className="pageHeader">Contact Landlord</p>
            </header>
            
            {landlord !== null && (
                <main>
                    <div className="contactLandlord">
                        <div className="landlordName">{landlord?.name}</div>
                    </div>
                </main>
            )}
            
        </div>                         
    )
}

export default Contact