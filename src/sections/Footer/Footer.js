import "./Footer.css";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from "react-icons/bs";
const Footer = () => {
  return (
    <section className="footer text-center" id="about">
      <div className="container">
        <div className="col-lg-7 m-auto">
          <h2>About US</h2>
          <p>
            Hello and welcome to CYBROG, the place to find the best
            products for every taste and occasion. We thoroughly
            check the quality of our goods, working only with reliable suppliers
            so that you only receive the best quality product.
          </p>
          <div className="footer-icons d-flex justify-content-center">
            <div className="icon">
              <a
                href="https://www.facebook.com/profile.php?id=100011569279364"
                target="_blank"
              >
                <BsFacebook />
              </a>
            </div>
            <div className="icon">
              <a href="#i_dont_have_twitter_yet" target="_blank">
                <BsTwitter className="icon-1" />
              </a>
            </div>
            <div className="icon">
              <a href="https://instagram.com/hozefa_alsalim" target="_blank">
                <BsInstagram className="icon-1" />
              </a>
            </div>
            <div className="icon">
              <a
                href="#i_dont_have_twitter_yet"
                target="_blank"
              >
                <BsLinkedin className="icon-1" />
              </a>
            </div>
            <div className="icon">
              <BsYoutube className="icon-1" />
            </div>
          </div>
        </div>
      </div>
      <div className="under-footer font-weight-normal">
        Copyright &copy; Desgined By{" "}
        <span className="auother">HUZEYFE EL SELIM</span> 2023
      </div>
    </section>
  );
};

export default Footer;
