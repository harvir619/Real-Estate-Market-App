import { useEffect, useState } from "react"
import { collection, getDocs,query,where,orderBy,limit,startAfter } from "firebase/firestore"
import { db } from "../firebase.config"
import { toast } from "react-toastify"


function Category() {
    const [listing,setListing] = useState()
    
    useEffect(() => {
        
    })
    
    return (
    <div>Category</div>
  )
}

export default Category