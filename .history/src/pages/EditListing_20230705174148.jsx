import { useParams } from "react-router-dom"


function EditListing() {
    
    const params = useParams();
    
  return (
      <div>{params.listingId}</div>
  )
}

export default EditListing