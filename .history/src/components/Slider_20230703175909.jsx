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
        
        const q = query(collection(db,'listings'))
      }
      
    }, [])
    
    const navigate = useNavigate()
    
  return (
    <div>Slider</div>
  )
}

export default Slider