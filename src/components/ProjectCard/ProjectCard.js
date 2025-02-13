import "./ProjectCard.css";

function ProjectCard ({link, img, projectTitle, blurb, description, technologies}){
    return (
        <a href={link} target="_blank" rel="noreferrer" className="link-wrapper">
            <div className="project-card" style={{backgroundImage: `url(${img})` }}>
                <div className="project-card-content">
                    <h3 className="project-title">{projectTitle}</h3>
                    <span className="project-blurb">{blurb}</span>
                </div>

            </div>
        </a>
    );
}
export default ProjectCard;