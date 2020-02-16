import React from 'react';
import './Projects.scss';
import { projects } from '../../../data';
import Project from '../../presentational/Project/Project';

const Projects: React.FC = () => {

    const renderedProjects = projects.map((project) => (
        <Project name={project.name} description={project.description}
            img={project.img} githubLinks={project.githubLinks}
            siteLink={project.siteLink} key={project.name} />
    ));

    return (
        <div className='projects'>
            {renderedProjects}
        </div>
    );
};

export default Projects;
