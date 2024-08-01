import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container-fluid col-sm-12  bg-black mb-5'>

<div className='w-100 text-end p-3'>
      <button
    className="btn btn-outline-warning"
    type="button"
  >
  <NavLink to="/" className="nav-link">Home</NavLink>
    
  </button>
      <button
    className="btn btn-outline-warning mx-3"
    type="button"
    data-bs-toggle="offcanvas"
    data-bs-target="#offcanvasStart"
    aria-controls="offcanvasExample"
    data--bs-close="offcanvasExample"
  >
    Fragen
  </button>
      <button
    className="btn btn-outline-warning"
    type="button"
    
  >
  <NavLink to="/about" className="nav-link">About</NavLink>
  </button>
 
  
  {/* Sidebar */}
  <div
    className="offcanvas offcanvas-start text-start"
    tabIndex={-1}
    id="offcanvasStart"
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
    <div className="offcanvas-body" data-bs-dismiss="offcanvas">
      <div>
        <h5 className='text-light'>Frontend</h5>
      </div>
      <ul className="list-group">
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/it-fundamental">IT-Fundamental</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/html">HTML</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/css">CSS</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/bootstrap">Bootstrap</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/sass">SASS</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/javascript">JavaScript</NavLink>
        </li>
        <li className="list-group-item bg-secondary-subtle border-danger-subtle">
          <NavLink className="nav-link" to="/react">React</NavLink>
        </li>
      </ul>
    </div>
  </div>

  </div>
</div>

  
  )
}

export default Navbar