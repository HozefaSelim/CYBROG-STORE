import "./Header.css";
import { Link} from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CartIcon } from "../../components/index";
import { NavHashLink } from 'react-router-hash-link';
const Header = () => {
  return (
    <div className="navbar navbar-expand-md  cyborg-navbar">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainmenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainmenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                ABOUT
              </a>
            </li>

            <li className="nav-item">
              <Link to="/products" className="nav-link">
                PRODUCTS
              </Link>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link">
                TESTIMONIALS
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                CONTACT
              </a>
            </li>
            <li className="nav-item">
              <Link to="Cart">
                <CartIcon/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
