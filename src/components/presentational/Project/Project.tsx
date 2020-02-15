import React from 'react';
import './Project.scss';

export interface ProjectProps {
    name: string;
    description: string;
    img: any;
    githubLinks: string[];
    siteLink: string;
}

const Project: React.FC<ProjectProps> = ({ name, description, img, githubLinks, siteLink }) => {

    const github = githubLinks && githubLinks.length > 0 ?
        githubLinks.map((link, index) => (
            <a href={link} key={link} className='github'>
                {index === 0 ? 'Frontend' : 'Backend'}
            </a>
        )) :
        <a className='disabled'>Github</a>;

    const site = siteLink.length > 0 ?
        (
            <a href={siteLink} className='site'>
                Live website
            </a>
        ) :
        <a className='disabled'>Website</a>;

    return (
        <div className='project'>
            <h3>{name}</h3>
            <aside className='image'>
                <img src={img} alt={`Project ${name}`} />
            </aside>
            <section className='description'>
                <p>{description}</p>
                <div className='links'>
                    {github}
                    {site}
                </div>
            </section>
        </div>
    );
};

export default Project;
