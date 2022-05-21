import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
const Navbar = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="navbar-wrapper">
          <div
            role="button"
            onClick={() => scrollTo("#home")}
            className="name"
            tabIndex={0}
          >
            Portfolio
          </div>
          <div className="links-wrapper">
            <a className="nav-links" href="#about">About</a>
            <a className="nav-links" href="#skills">Skills</a>
            <a className="nav-links" href="#work">Projects</a>
            <a className="nav-links" href="#contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
