import { collection, getDocs, query,where,doc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase.config'
import { getAuth } from 'firebase/auth'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'

function Listing() {
    const [listing, setListing] = useState([])
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied,setShareLinkCopied] = useState(null)
    
    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()
    
    useEffect(() => {
        const fetchListing = async () => {
            try {
                // const listingsRef = collection(db, 'listings')
                const docRef = doc(db,'listings',params.listingId)
                
                // const q = query(listingsRef, where('userRef', '==', params.listingId))
                
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