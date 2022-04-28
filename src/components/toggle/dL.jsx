import "./dL.css";
import Sun from "../../img/sunS.png";
import lcd from "../../img/moonS.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };
  return (
    <div className="toggle">
      <img src={Sun} alt="" className="toggleIcon" />
      <img src={lcd} alt="" className="toggleIcon" />

      {/* // this div element */}
      <div
        className="darkLightToggle"
        onClick={handleClick}
        style={{ left: theme.state.darkMode ? 0 : 25 }}
      ></div>
    </div>
  );
};

export default Toggle;