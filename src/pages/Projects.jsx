import Nav from '../components/nav.jsx'
import Footer from '../components/Footer.jsx'
import ProjectCard from '../components/ProjectCard.jsx';
import CardTemplate from "../assets/project_card_image_placeholder.png";
import miso from "../assets/miso_hungry.png";
import sample from "../assets/sample_project.png";
import flipPhone from "../assets/flip_phone.png";


function Projects() {
    return (
        <>
            <Nav/>
            <div className = "proj-slide-1">
                <div className="proj-content-1">
                    <div className="proj-content-1-left">
                        <h1> Project Portfolio</h1>
                        <h4>Elena Nguyen | <a href = "https://www.sfu.ca/fas/computing.html" target = "blank" style={{borderBottom: "1px solid #183252"}}>SFU CS</a></h4>
                        <p>
                        This portfolio showcases a selection of my projects, highlighting my work in design and development.
                        Feel free to browse through to see my skills and experience in practice.
                        </p>
                    </div>
                    <div className="proj-content-1-right">
                        <img src= {flipPhone} ></img>
                    </div>
                </div>

                <div className="proj-content-2">
                    <div className = "proj-content-2-langs">
                        <h2>Languages</h2>
                        <p>Python, C, C++, Java</p>
                        <p>HTML, CSS, JS</p>
                    </div>
                    <hr className="project-divider"></hr>
                    <div className = "proj-content-2-projects">
                        <h2>Project Links</h2>
                        <div className="proj-links">
                            <ProjectCard 
                                img=  {miso}
                                title="Miso Hungry"
                                description="Miso Hungry is designed to help users generate meal ideas based on the ingredients they have at home." 
                                link = "https://github.com/elenaktnguyen/Sample1"
                                langs = {["HTML", "CSS", "JS"]}
                            />
                            <ProjectCard 
                                img=  {sample}
                                title="Sample Project 2" 
                                description="This is a template project for the sake of this mini project. There is nothing else to explore here." 
                                link = "https://github.com/elenaktnguyen/Sample2"
                            />
                        </div>
                    </div>
                    
                </div>  
            </div>
            <Footer/>
        </>
    );
}

export default Projects;