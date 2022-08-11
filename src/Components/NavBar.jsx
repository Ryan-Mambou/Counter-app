import React from 'react'

function NavBar({numberOfCounters}) {
  return (
    <nav className="navbar bg-light">
    <div className="container-fluid">
    <a className="navbar-brand" href="#">
      Navbar{' '} 
      <span className="badge badge-pill badge-secondary">
        {numberOfCounters}
      </span>
      </a>
  </div>
</nav>
  )
}

export default NavBar;