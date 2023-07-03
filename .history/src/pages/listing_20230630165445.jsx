import { getDoc,doc} from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { db } from '../firebase.config'
import { getAuth } from 'firebase/auth'
import Spinner from '../components/Spinner'
import shareIcon from '../assets/svg/shareIcon.svg'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Listing() {
    const [listing, setListing] = useState(null)
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

    if(loading) {
        return <Spinner/>
    }
   
    return (
        <main>
      {/* <Swiper
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {listing?.imageUrls.map((url, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                background: `url(${url}) center no-repeat`,
                backgroundSize: 'cover',
              }}
              className="swiperSlideDiv"
            ></div>
          </SwiperSlide>
        ))}
      </Swiper> */}
        <swiper-container slides-per-view="3" grid-rows="3"
        mousewheel-force-to-axis="true"
        >
                {listing?.imageUrls.map((url, index) => (
                    <SwiperSlide key={index}>
                        {/* <img src={url} alt="" /> */}
                        <div className='swiperSlideDiv'></div>
                    </SwiperSlide>
                    ))}
        </swiper-container>
            
            
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
                <p className="listingName">{listing.name} - ${
                    listing.offer ?
                        listing.discountedPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                        : listing.regularPrice
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }</p>
                <p className="listingLocation">{listing.location}</p>
                <p className="listingType">
                    For {listing.type==='rent' ? 'Rent' : 'Sale'}
                </p>
                {listing.offer && (
                    <p className="discountPrice">
                        ${listing.regularPrice - listing.discountedPrice} discount
                    </p>
                )}
                <ul className="listingDetailsList">
                    <li>
                        {listing.bedrooms>1?`${listing.bedrooms} Bedrooms`:'1 Bedroom'}
                    </li>
                    <li>
                        {listing.bathrooms>1?`${listing.bathrooms} Bathrooms`:'1 Bathroom'}
                    </li>
                    <li>{listing.parking && 'Parking Spot'}</li>
                    <li>{listing.furnished &&'Furnished'}</li>
                </ul>
                <p className="listingLocationTitle">Location</p>
                
                <div className="leafletContainer">
                    <MapContainer style={{ height: '100%', width: '100%' }}
                        center={[listing.geolocation.lat, listing.geolocation.long]}
                    zoom={13} scrollWheelZoom={false}>
                        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/
                            copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                        />
                        <Marker position={[listing.geolocation.lat, listing.geolocation.long]}>
                            <Popup>{listing.location}</Popup>
                        </Marker>
                    </MapContainer>
                </div>
                
                {auth.currentUser?.uid !== listing.userRef && (
                    <Link to={`/contact/${listing.userRef}?listingName=${listing.name}`}
                        className="primaryButton">
                        Contact Landlord
                    </Link>
                )}
            </div>
        </main>
    )
}

export default Listing