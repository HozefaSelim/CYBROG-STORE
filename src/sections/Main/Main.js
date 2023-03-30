import "./Main.css";
import p1 from "../../assets/images/img-1.png";
import { PrimaryButton } from "../../components/index";
const Main = () => {
  return (
    <div className="her-main row">
      <div className="hero-main col-lg-5">
        <div className="hero-text">
          <h6 className="hero-subtitle">Welcome To CYBROG</h6>
          <h4 className="hero-title">
            <em>CYBROG</em>
            <br /> Every Thing That You Need
          </h4>

          <PrimaryButton>Shop Now</PrimaryButton>
        </div>
      </div>
      <img className="Hero-img col-lg-7 col-md-12" src={p1} />
      <hr className="hr" />
    </div>
  );
};

export default Main;
