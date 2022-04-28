import "./project.css";

const Project = ({ img, link, gitHubLink, projectLink, description, tech }) => {
  return (
    <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p_img" />
      </a>
      <div className="p_gh">
        <a href={gitHubLink} className="p_img" target="_blank" rel="noreferrer">GitHub</a> 
      </div>
      <div className="p_demo">
        <a href={projectLink} target="_blank" rel="noreferrer">Demo</a>
      </div>
      <div>{description}</div>
      <div>{tech}</div>
    </div>
  );
};
export default Project;
