import { collection, getDoc, query,where,doc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase.config'
import { getAuth } from 'firebase/auth'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'

function Listing() {
    const [listing, setListing] = useState([])
    const [loading, setLoading] = useState(true)
    const [shareLinkCopied,setShareLinkCopied] = useState(false)
    
    const navigate = useNavigate()
    const params = useParams()
    const auth = getAuth()
    
    useEffect(() => {
        const fetchListing = async () => {
            try {
                const docRef = doc(db,'listings',params.listingId)
                
                const docSnap = await getDoc(docRef)
                
                if (docSnap.exists()) {
                    setListing(docSnap.data())
                    setLoading(false)
                }
                
            } catch (error) {
                console.log(error)
            }
        }
        
        fetchListing()
        
    },[navigate,params.listingId])
    
  return (
    <div>Listing</div>
  )
}

export default Listing