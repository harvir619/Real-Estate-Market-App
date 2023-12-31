import { Link } from 'react-router-dom'
import rentCategoryImage from '../assets/jpg/rentCategoryImage.jpg'
import sellCategoryImage from '../assets/jpg/sellCategoryImage.jpg'

function Explore() {
  return (
    <div className='explore'>
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      
      <main>
        {/* Sider */}
        
        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to='/category/rent'>
            <img src={rentCategoryImage} alt="rent" className='exploreCategoryImg' />
          </Link>
          <p className='exploreCategoryName'>Places for rent</p>
          <Link to='/category/sell'>
            <img src={sellCategoryImage} alt="sell" className='exploreCategoryImg' />
          </Link>
          <p className='exploreCategoryName'>Places for sell</p>
        </div>
        
      </main>
      
    </div>
  )
}

export default Explore