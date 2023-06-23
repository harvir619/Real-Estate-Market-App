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
        <div className="category">
            
            <header>
                <p className="pageHeader">
                    {params.categoryName === 'rent' ? 'Places for Rent' : 'Places for Sale'}
                </p>
            </header>
            
            {loading ? <Spinner /> : listings && listings.length > 0 ? (
                <>
                    <main>
                        <ul className="categoryListings">
                            {listings.map(listing =>
                                (<h1>{listing.data.name}aa</h1>)
                            )}
                        </ul>
                    </main>
                </>
            ):<p>No Listing for {params.categoryName}</p>}    
        </div>
  )
}

export default Category