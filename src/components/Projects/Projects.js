import ProjectCard from "../ProjectCard/ProjectCard";
import SIGMABIRD from "../../assets/SIGMABIRD.png";
import RETTIWT from "../../assets/RETTIWT.png";
import "./Projects.css";

const projects = [
    {
        link: "https://hanbanthan.github.io/SigmaBird/",
        img: SIGMABIRD,
        projectTitle: "SIGMABIRD",
        blurb: "A hardest game ever",
        description: "",
        technologies: ["Javascript","CSS","HTML"],
    },
    {
        link: "https://rettiwt-liufaqktp-giaps-projects-4eaf0c61.vercel.app/",
        img: RETTIWT,
        projectTitle: "RETTIWT",
        blurb: "A basic social media app",
        description: "",
        technologies: ["React","Tailwind","Next","Mongo"],
    },
];


function Projects() {
    return (
        <div className="projects section" id="projects">
            <h2 className="section-header">Projects</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <ProjectCard
                        key = { index }
                        link = { project.link }
                        img = { project.img }
                        projectTitle= { project.projectTitle }
                        blurb= { project.blurb }
                        description= { projects.description }
                        technologies= { project.technologies }
                    />
                ))}
            </div>
        </div>
    );
}
export default Projects;