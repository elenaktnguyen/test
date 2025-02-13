function ProjectCard({ img, title, description, link, langs}) {  
    return (
        <div className="project-card-container">
            <div className="project-card-content">
                <a href = {link} target = "blank">
                    <img src={img} alt={title + "image"} className="project-card-img"/>
                </a>
            </div>
            <h2 className="project-card-title"><a href = {link} target = "blank">{title}</a></h2>
            <p className="project-card-description" style = {{fontSize: "large", marginTop: "-10px"}}>{description}</p>

            <div className="project-card-langs">
                {langs && langs.length > 0 ? (
                    langs.map((lang, index) => (
                        <p key={index} className="project-card-lang">{lang}</p>
                    ))
                ) : (
                    <p className="project-card-lang">N/A</p>  // Debugging line
                )}
            </div>
        </div>
    );
}

export default ProjectCard;
