import React from 'react'
import "./nav.css"


 function Navigation({ handleInputChange, query }) {
  return <nav>
    <div className="nav-container">
        <input     onChange={handleInputChange}
          value={query} type="text" placeholder="Enter search in Dark-Cart" className = "search-input" /> 
    </div>
    <div className="profile-container">
    <img width="18" height="18" src="https://img.icons8.com/parakeet/48/user.png" alt="user"/>
    </div>
  </nav>
}
export default Navigation;