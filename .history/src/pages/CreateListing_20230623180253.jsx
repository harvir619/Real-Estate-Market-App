import { useState } from "react"

function CreateListing() {
    const [geolocationEnabled,setgeolocationEnabled] = useState(true)
    const [formData, setFormData] = useState({
        type: 'rent',
        name: 'rent',
        bedrooms: 1,
        batrooms: 1,
        parking: false,
        furnished: false,
        address: '',
        offer: false,
        regularPrice: 0,
        discountedPrice: 0,
        images: [],
        lattitude: 0,
        longitude: 0
  })
  
    
    return (
    <div>CreateListing</div>
  )
}

export default CreateListing