import "./OurCustomers.css";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import p1 from "../../assets/images/1.jpg";
import p2 from "../../assets/images/2.jpg";
import p3 from "../../assets/images/3.jpg";
import { SectionWrapper, SectionHeader } from "../../components/index";

const OurCustomers = () => {
  return (
    <div id="testimonials">
      <SectionWrapper>
        <SectionHeader>Our Customers</SectionHeader>
        <div className="container-fluid ">
          <OwlCarousel items={2} className="owl-theme " loop autoplay={true}>
            <div className="item opinion-col-01">
              <div className="media align-items-center">
                <div className="img">
                  <img src={p1} alt="" />
                </div>
                <div className="media-body">
                  <h6>Hamza</h6>
                </div>
              </div>
              <p>
                "With a commitment to quality  excellent project management skills,over 150,000 SKUs and a quarter million images. "
              </p>
            </div>
            <div className="item opinion-col-01">
              <div className="media align-items-center">
                <div className="img">
                  <img src={p2} alt="" />
                </div>
                <div className="media-body">
                  <h6>Sara</h6>
                </div>
              </div>
              <p>
              "The professional relationship with our SunTec content team has proven to be beneficial beyond our expectations."
              </p>
            </div>
            <div className="item opinion-col-01">
              <div className="media align-items-center">
                <div className="img">
                  <img src={p3} alt="" />
                </div>
                <div className="media-body">
                  <h6>Omer</h6>
                </div>
              </div>
              <p>
              " They have been super  super helpful, responsive, and  We look forward to maintaining our relationship for the long term"
              </p>
            </div>
          </OwlCarousel>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default OurCustomers;
