import React, { Component } from "react";
// import ComponentAccordian from "./components-accordion";
import { NavLink } from 'react-router-dom';




class Sidebar extends Component {
  render() {
    return (
      <> 
    
            <div>
          
        
      <aside id="sidebar" class="sidebar">

<ul class="sidebar-nav" id="sidebar-nav">

  <li class="nav-item">
    <a class="nav-link " href="index.html">
      <i class="bi bi-grid"></i>
      <span>Dashboard</span>
    </a>
  </li>



  

  

  <li class="nav-heading">Pages</li>

  <li class="nav-item">
      

      <NavLink class="nav-link" to="/pages-profile">Profile</NavLink>

    {/* <a class="nav-link collapsed" href="users-profile.html">
      <i class="bi bi-person"></i>
      <span>Profile</span>
    </a> */}
  </li>

  <li class="nav-item">
  <NavLink class="nav-link" to="/pages-faq">F.A.Q</NavLink>
    {/* <a class="nav-link collapsed" href="pages-faq.html">
      <i class="bi bi-question-circle"></i>
      <span>F.A.Q</span> */}
    {/* </a> */}
  </li>

  <li class="nav-item">
  <NavLink class="nav-link" to="/pages-contact">Contact</NavLink>
    {/* <a class="nav-link collapsed" href="pages-contact.html">
      <i class="bi bi-envelope"></i>
      <span>Contact</span>
    </a> */}
  </li>

  <li class="nav-item">
  <NavLink class="nav-link" to="/pages-register">Register</NavLink>
    {/* <a class="nav-link collapsed" href="pages-register.html">
      <i class="bi bi-card-list"></i>
      <span>Register</span>
    </a> */}
  </li>

  <li class="nav-item">
  <NavLink class="nav-link" to="/login">Login</NavLink>
    {/* <a class="nav-link collapsed" href="pages-login.html">
      <i class="bi bi-box-arrow-in-right"></i>
      <span>Login</span>
    </a> */}
  </li>

  <li class="nav-item">
    {/* <a class="nav-link collapsed" href="pages-error-404.html">
      <i class="bi bi-dash-circle"></i>
      <span>Error 404</span>
    </a> */}
     <NavLink class="nav-link" to="/pages-error">Error 404</NavLink>
    
  </li>

  <li class="nav-item">
    {/* <a class="nav-link collapsed" href="pages-blank.html">
      <i class="bi bi-file-earmark"></i>
      <span>Blank</span>
    </a> */}
     <NavLink class="nav-link" to="/pages-blank">Blank</NavLink>
  </li>

  <li class="nav-item">
    {/* <a class="nav-link collapsed" href="pages-blank.html">
      <i class="bi bi-file-earmark"></i>
      <span>Blank</span>
    </a> */}
     <NavLink class="nav-link" to="/emplist">EmployeeList</NavLink>
  </li>
</ul>

</aside>

      </div>

      </>

  )
  }
}

export default Sidebar;


