import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/pin.png";

const Contact = () => {



  return (
    <div className="c">
      <div className="c_wrapper">
        <div className="c_left">
          <h1 className="c_title">Contact</h1>
          <div className="c_info">
            <div className="c_info-item">
              <img src={Phone} alt="" className="c_icon" />
              phone here
            </div>
            <div className="c_info-item">
              <img className="c_icon" src={Email} alt="" />
              8hughes.john@gmail.com 
            </div>
            <div className="c_info-item">
              <img className="c_icon" src={Address} alt="" />
              address here
            </div>
          </div>
        </div>
        <div className="c_right">
         FILLER INFO / GRAPHICS / ???
        </div>
      </div>
    </div>
  );
};

export default Contact;