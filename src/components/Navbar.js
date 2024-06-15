import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes, FaArrowUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const navMenuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    navMenuRef.current.classList.toggle("active");
  };

  const handleStickyNavbar = () => {
    const navbarElement = document.getElementById("navbar");
    if (window.scrollY >= 80) {
      navbarElement.classList.remove("navbar");
      navbarElement.classList.add("active");
      setIsNavbarSticky(true);
    } else {
      setIsNavbarSticky(false);
      navbarElement.classList.remove("active");
      navbarElement.classList.add("navbar");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => {
      window.removeEventListener("scroll", handleStickyNavbar);
    };
  }, [handleStickyNavbar]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header>
      <nav id="navbar" className={isNavbarSticky ? "active" : "navbar"}>
        <h1>
          Landing <span>Page</span>
        </h1>

        <ul
          className={`nav-menu ${isMenuOpen ? "active" : ""}`}
          ref={navMenuRef}
        >
          <li className="nav-item">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="services" smooth={true} duration={500}>
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>

        <div className="humberger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <FaTimes size={30} style={{ color: "#f8f8f8" }} />
          ) : (
            <FaBars size={30} style={{ color: "#f8f8f8" }} />
          )}
        </div>
      </nav>

      <div id="home" className="landing-page">
        {/* Landing page content goes here */}
        <h2>Welcome to our Landing Page</h2>
        <p>This is the home section.</p>
      </div>

      <div id="services" className="landing-page">
        <h2>Our Services</h2>
        <p>This is the services section.</p>
      </div>

      <div id="about" className="landing-page">
        <h2>About Us</h2>
        <p>This is the about section.</p>
      </div>

      <div id="contact" className="landing-page">
        <h2>Contact Us</h2>
        <p>This is the contact section.</p>
      </div>

      <button className="scroll-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </header>
  );
}

export default Navbar;
