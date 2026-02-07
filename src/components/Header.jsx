import React from 'react'
import { FaSearch } from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div>
      <div>
        <h3>MovieApp</h3>
      </div>
      <div>
        <input type='text' placeholder='Search for a movie'/>
        <FaSearch/>
      </div>
      <div>
        <Link to="/">Movies</Link>
      </div>
      <button>
        Log in | Register
      </button>
    </div>
  )
}

export default Header
