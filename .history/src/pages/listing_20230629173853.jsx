import { getDoc,doc} from 'firebase/firestore'
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
        <main>
            {/* Slider */}
            
            <div className="shareIconDiv" onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                setShareLinkCopied(true)
                setTimeout(() => {
                    setShareLinkCopied(false)
                },2000)
            }}>
                <img src={shareIcon} alt="" />
            </div>
            
            {shareLinkCopied && <p className="linkCopied">Link Copied</p>}
            <div className="listingDetails">
                <p className="listingName">{listing.name} - {listing.offer ? listing.discountedPrice : listing.regularPrice}}</p>
            </div>
        </main>
    )
}

export default Listing