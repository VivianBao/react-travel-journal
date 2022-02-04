import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return(
    <>
      <nav className="navbar">
        <span className="navbar-icon"><FontAwesomeIcon icon="globe-asia" size="lg"/></span>
        <p className="navbar-title">my travel journal.</p>
      </nav>
    </>
  )
}
