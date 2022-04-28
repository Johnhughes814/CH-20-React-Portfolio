import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl_texts">
        <h1 className="pl_title">Projects:</h1>
        <p className="pl_desc">
          
        </p>
      </div>
      <div className="pl_list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} projectLink={item.projectLink} gitHubLink={item.gitHubLink} description={item.description} tech={item.tech}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
