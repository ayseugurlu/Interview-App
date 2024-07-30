import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container d-flex justify-content-center'>

<div className='container text-center p-5'>
      <button
    className="btn btn-outline-warning"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasExample"
    aria-controls="offcanvasExample"
  >
    Fragen
  </button>
      <button
    className="btn btn-outline-warning mx-3"
    type="button"
    
  >
    About
  </button>
  </div>
  
  {/* Sidebar */}
  <div
    className="offcanvas offcanvas-start"
    tabIndex={-1}
    id="offcanvasExample"
    aria-labelledby="offcanvasExampleLabel"
  >
    <div className="offcanvas-header bg-danger-subtle">
      <h5 className="offcanvas-title" id="offcanvasExampleLabel">
      Interview Fragen
      </h5>
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      />
    </div>
    <div className="offcanvas-body">
      <div>
        <h5 className='text-light'>Frontend</h5>
      </div>
      <ul className="list-group">
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/it-fundamental">IT-Fundamental</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="html">HTML</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="css">CSS</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="bootstrap">Bootstrap</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="sass">SASS</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="javascript">JavaScript</NavLink>
        </li>
      </ul>
    </div>
  </div>
</div>

  
  )
}

export default Navbar