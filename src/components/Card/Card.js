import "./Card.css";
import { Link } from "react-router-dom";
const Card = ({ id, title, price, category, description, image }) => {
  return (
    <Link to={`/${id}`}>
      <div className="our-products">
        <div className="product card">
          <div className="product-img">
            <img className="img-fluid" src={image} alt="product" />
            <div className="overlay">
              <div className=" myBtn1 text-uppercase">More Details</div>
            </div>
          </div>
          <div className="product-content">
            <div className="product-name">{title}</div>
            <div className="product-price">
              <span className="price">$ {price}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default Card;
