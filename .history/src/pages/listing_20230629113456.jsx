import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


function Listing() {
    const [listing, setListing] = useState([])
    
    const navigate = useNavigate()
    const param = useParams()
    
    useEffect(() => {
        
    })
    
  return (
    <div>Listing</div>
  )
}

export default Listing