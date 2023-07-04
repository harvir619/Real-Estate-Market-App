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
            try {
              //Get a reference
              const listingsRef = collection(db, 'listings')
              
              //Create a query
              const q = query(listingsRef, orderBy('timestamp', 'desc'), limit(5))
              
              //Execute a query
              const querySnap = await getDocs(q)
              
              const listings = []
              
              querySnap.forEach((doc) => {
                return listings.push({id: doc.id, data:doc.data()})
              })
              
              setListings(listings)
              setLoading(false)
              console.log(listings)
        } catch (error) {
              toast.error('Could not fetch listings')
        }
      }
    fetchListings()
      
    }, [])
    
  const navigate = useNavigate()
  
  if(loading) {
    return <Spinner />
  }
  
  return (
    listings && (
      <>
        <p className="exploreHeading">Recommended</p> 
        <Swiper slidesPerView={1} pagination={{ clickable: true }}>
          {listings.map(({ data, id }) => (
            <SwiperSlide key={id} onClick={() => navigate(`/category/${data.type}/${id}`)}>
              <div style={{
                background: `url(${data.imageUrls[0]})
                center no-repeat`,
                backgroundSize: 'cover'
              }} className="swiperSlideDiv">
                
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    )
  )
}

export default Slider