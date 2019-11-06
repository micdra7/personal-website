import React from 'react';
import './Project.scss';

const Project = ({ name, description, imgSrc, githubLink, siteLink }) => {
    return (
        <div className="project">
            <h3>{name}</h3>
            <aside className="image">
                {/* eslint-disable-next-line no-undef */}
                <img src={process.env.PUBLIC_URL + '/assets/images/' + imgSrc} alt={'Project: ' + name} />
            </aside>
            <section className="description">
                <p>
                    {description}
                </p>
                <div className="buttons">
                {
                    githubLink && githubLink.length > 0 ?
                    <a href={githubLink} className="github">
                        GitHub
                    </a> :
                    <></>
                }

                {
                    siteLink && siteLink.length > 0 ?
                    <a href={siteLink} className="site">
                        Live demo
                    </a> :
                    <></>
                }
                </div>
            </section>
        </div>
    );
};

export default Project;