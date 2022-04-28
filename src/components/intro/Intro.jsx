import "./intro.css";
import Me from "../../img/thatGuy.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i_left">
        <div className="i_left-wrapper">
          <h2 className="i_intro">Hello, My name is</h2>
          <h1 className="i_name">John Hughes</h1>
          <div className="i_title">
            <div className="i_title-wrapper">
              <div className="i_title-item">Web Developer</div>
              <div className="i_title-item">UI/UX Designer</div>
              <div className="i_title-item">YOUR NEXT EMPLOYEE</div>
              <div className="i_title-item">WORKAHOLIC</div>
              <div className="i_title-item">there for YOU</div>
            </div>
          </div>
          <p className="i_desc">
           Welcome to my portfolio!
          </p>
        </div>
      
      </div>
      <div className="i_right">
        <div className="i_bg"></div>
        <img src={Me} alt="" className="i_img" />
      </div>
    </div>
  );
};

export default Intro;