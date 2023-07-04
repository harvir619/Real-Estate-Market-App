import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore'
import { db } from '../firebase.config'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
import Spinner from './Spinner'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);


function Slider() {
    const [loading, setLoading] = useState([])
    const [listings,setListings] = useState(null)  
  
    useEffect(() => {
        
      const fetchListings = async () => {
        
        //Get a reference
        const listingsRef = collection(db, 'listings')
        
        //Create a query
        const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
        
        //Execute a query
        const querySnap = await getDocs(q)
        
        const listings = []
        
        querySnap.forEach((doc) => {
          return listings.push({id: doc.id, data:doc.data})
        })
        
          
      }
      
    }, [])
    
    const navigate = useNavigate()
    
  return (
    <div>Slider</div>
  )
}

export default Slider