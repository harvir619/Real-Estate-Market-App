import { useEffect, useState } from "react"
import { collection, getDocs,query,where,orderBy,limit,startAfter } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"
import { useParams } from "react-router-dom"


function Category() {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    
    const params = useParams()
    
    useEffect(() => {
        const fetchListings = async () => {
            try {
                //Get reference
                const listingsRef = collection(db, 'listings')
                
                //Create a query
                const q = query(listingsRef,
                    where('type', '==', params.categoryName),
                    orderBy('timestamp', 'desc'),
                    limit(10))
                
                //Execute query
                const querySnap = await getDocs(q)
                
                const listings = []
                
                querySnap.forEach((doc) => {
                    return listings.push({id: doc.id, data: doc.data()})
                })
                
                setListings(listings)
                setLoading(false)
            } catch (error) {
                toast.error('Could not fetch listings')
            }
        }
        fetchListings()
        
    },[])
    
    return (
        <div>
            {loading ? <Spinner /> : listings && (
                listings.forEach(listing => {
                    <h1>{listing.id}</h1>
                })
            )}    
        </div>
  )
}

export default Category