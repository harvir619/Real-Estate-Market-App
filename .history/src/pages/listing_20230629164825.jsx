import { collection, getDocs, query,where,doc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase.config'
import { getAuth } from 'firebase/auth'

function Listing() {
    const [listing, setListing] = useState([])
    const [loading,setLoading] = useState(true)
    
    const navigate = useNavigate()
    const params = useParams()
    
    useEffect(() => {
        const fetchListing = async () => {
            try {
                const listingsRef = collection(db, 'listings')
                
                const q = query(listingsRef, where('userRef', '==', params.listingId))
                
                console.log(q)
                
                const querySnap = await getDocs(q)
                
                const listing = []
                
                querySnap.forEach((doc) => {
                    return listing.push({id:doc.id,data:doc.data()})
                })
                
                setListing(listing)
                setLoading(false)
                
                console.log(listing)
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchListing()
        
    },[])
    
  return (
    <div>Listing</div>
  )
}

export default Listing