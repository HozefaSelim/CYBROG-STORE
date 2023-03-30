import "./ContactUS.css";
import { PrimaryButton, SectionWrapper } from "../../components/index";
import { MdLocationPin, MdEmail, MdCall } from "react-icons/md";
const ContactUs = () => {
  return (
    
      <div className="contact p-4" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="section-title col-lg-7 text-center">
              <h2 className="sm-heading text-uppercase">Contact us</h2>
            </div>
          </div>
          <div className="row con">
            <div className="col-lg-7">
              <form className="contact-form">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="name"
                      type="text"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      className="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                </div>
                <input className="subject" type="text" placeholder="Subject" />
                <textarea cols="30" rows="10" placeholder="Message"></textarea>
                <PrimaryButton>send message</PrimaryButton>
              </form>
            </div>
            <div className="col-lg-5 order-first order-md-last">
              <div className="contact-info d-lg-flex align-content-around flex-wrap">
                <div className="info d-flex">
                  <div className="info-icon d-flex">
                    <MdLocationPin className="icon" />
                  </div>
                  <div className="info-content">
                    <h5 className="text-capitalize">location</h5>
                    <span>B261, Laghouat,122222</span>
                  </div>
                </div>
                <div className="info d-flex">
                  <div className="info-icon d-flex">
                    <MdEmail className="icon" />
                  </div>
                  <div className="info-content">
                    <h5 className="text-capitalize">Email</h5>
                    <span>hothefa1180@gmail.com</span>
                  </div>
                </div>

                <div className="info d-flex">
                  <div className="info-icon d-flex">
                    <MdCall className="icon" />
                  </div>
                  <div className="info-content">
                    <h5 className="text-capitalize">Call us on</h5>
                    <span>9100-000-000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
};

export default ContactUs;
