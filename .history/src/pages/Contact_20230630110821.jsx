import { useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"


function Contact() {
    const [landlord, setLandlord] = useState(null)
    
    const params = useParams();
    
    const searchParams = useSearchParams();
    
    console.log(params)
    console.log(searchParams)
    return (
    <div>Contact</div>
  )
}

export default Contact