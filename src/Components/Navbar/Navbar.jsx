import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const handleScroll = ()=>{
      if (window.scrollY > 50){
        setScrolled(true)
      }else{
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return ()=> window.removeEventListener("scroll", handleScroll)

  }, [])

  return (
    <>
      <nav className= {`navbar navbar-expand-lg fixed-top ${scrolled ? "scrolled" : ""}`}>
        <div className="container">
          <Link
            className="navbar-brand fs-2 text-uppercase fw-bold text-white"
            to=""
          >
            Start Framework
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav gap-2 ms-auto mb-2 mb-lg-0">
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold px-2 mt-2 mt-md-0 rounded-3"
                  aria-current="page"
                  to="about"
                >
                  about
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link  text-uppercase text-white fw-bold px-2 mt-2 mt-md-0 rounded-3"
                  to="portfolio"
                >
                  portfolio
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink
                  className="nav-link text-uppercase text-white fw-bold px-2 mt-2 mt-md-0 rounded-3"
                  to="contact"
                >
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
