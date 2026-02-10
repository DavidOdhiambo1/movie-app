import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div className='container'>
      <div className='logo'>
        <h3>MovieApp</h3>
      </div>
      <div className='search'>
        <input type='text' placeholder='Search for a movie'/>
        <FaSearch/>
      </div>
      <div className='nav-link'>
        <Link to="/">Movies</Link>
      </div>
      <button className='nav-button'>
        Log in | Register
      </button>
    </div>
  )
}

export default Header
