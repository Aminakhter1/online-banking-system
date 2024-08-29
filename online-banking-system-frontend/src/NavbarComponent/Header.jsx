import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import RoleNav from "./RoleNav";

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg custom-bg text-color" style={{backgroundColor:"rgb(63, 5, 111)"}}>
        <div className="container-fluid text-color">
          <img
          style={{backgroundColor:"white"}}
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt=""
          />
          <Link to="/" className="navbar-brand">
            <i>
              <b className=" ms-1" style={{color:"white"}}>Banking System</b>
            </i>
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
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{textColor:"white"}}>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/about"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color" style={{color:"white"}}>About Us</b>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/contact"
                  className="nav-link active"
                  aria-current="page"
                >
                  <b className="text-color" style={{color:"white"}}>Contact Us</b>
                </Link>
              </li>
              
            </ul>

            <RoleNav />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
