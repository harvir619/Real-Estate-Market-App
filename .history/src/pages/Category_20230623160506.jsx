import { useEffect, useState } from "react"
import { collection, getDocs,query,where,orderBy,limit,startAfter } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"
import Spinner from "../components/Spinner"


function Category() {
    const [listings, setListings] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        
    })
    
    return (
    <div>Category</div>
  )
}

export default Category