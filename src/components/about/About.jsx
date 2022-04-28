import "./about.css";
import PlaceholderImage from "../../img/guy.png";

const About = () => {
  return (
    <div className="a">
      <div className="a_left">
        <div className="a_card bg"></div>
        <div className="a_card">
          <img src="https://cdn.pixabay.com/photo/2016/10/02/19/51/chip-1710300_960_720.png" alt="" className="a_img" />
        </div>
      </div>
      <div className="a_right">
        <h1 className="a_title">About Me</h1>
        <p className="a_sub">
          One Sentence here perhaps this long this long this long this long this long this long this long this long this long this long.
        </p>
        <p className="a_desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
        </p>
        <div className="a_sub">
          <img src={PlaceholderImage} alt="" className="a_sub-img" />
          <div className="a_sub-texts">
            <h4 className="a_sub-title">Skills</h4>
            <p className="a_sub-desc">
             TEST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;