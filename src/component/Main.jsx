import { Routes, Route, NavLink } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import About from "./About";
import Pricing from "./Pricing";

export default function Main() {
  return (
    <div className="container text-center">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          ABC App
        </a>
        <br></br>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
          {/* <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul> */}
            <ul className="navbar-nav">
              <li className="nav-item ">
                <NavLink end to="/" className="nav-link">
                  Home
                </NavLink>{" "}
                <br></br>
              </li>
              <li className="nav-item">
                <NavLink end to="/about" className="nav-link">
                  About
                </NavLink>
                <br></br>
              </li>
              <li className="nav-item">
                <NavLink end to="/pricing" className="nav-link">
                  Pricing
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <ul>
            <li>
                <NavLink end to='/'>Home</NavLink>
            </li>
            <li>
                <NavLink end to='/about'>About</NavLink>
            </li>
            <li>
                <NavLink  end to='/pricing'>Pricing</NavLink>
            </li>
        </ul> */}
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </div>
    </div>
  );
}
