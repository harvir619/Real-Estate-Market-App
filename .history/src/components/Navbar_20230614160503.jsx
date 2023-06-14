import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import OfferIcon  from '../assets/svg/localOfferIcon.svg'
import ExploreIcon from '../assets/svg/exploreIcon.svg'
import PersonOutlineIcon from '../assets/svg/personOutlineIcon.svg'


function Navbar() {
  return (
      <footer className="navbar">
          <nav className="navbarNav">
              <ul className="navbarListItems">
                  <li className="navbarListItem">
                      <ExploreIcon fill='#2c2c2c'
                        //   className="navbarIcon"
                          width='36px' height='36px' />
                      <p>Explore</p>
                  </li>
                  <li className="navbarListItem">
                      <OfferIcon fill='#2c2c2c'
                        //   className="navbarIcon"
                          width='36px' height='36px' />
                      <p>Offer</p>
                  </li>
                  <li className="navbarListItem">
                      <PersonOutlineIcon fill='#2c2c2c'
                        //   className="navbarIcon"
                          width='36px' height='36px' />
                      <p>PersonOutline</p>
                  </li>
                  
              </ul>
          </nav>
      </footer>
  )
}

export default Navbar