import React from 'react';
import './Projects.scss';
import Project from '../Project/Project';

const Projects = ({ projectList }) => {

    const renderedProjects = projectList.map(project => (
        <Project name={project.name} description={project.description} imgSrc={project.imgSrc}
            githubLink={project.githubLink} siteLink={project.siteLink} key={project.name} />
    ));
    
    return (
        <div className="projects">
            {renderedProjects}
        </div>
    );
};

export default Projects;