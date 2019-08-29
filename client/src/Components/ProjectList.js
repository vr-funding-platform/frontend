import React from 'react';
import ProjectCard from './ProjectCard';
import './Styles/projectlist.scss';

const ProjectList = ({ projects }) => {
    return (
        <div className="proj-list">
            {projects.map(proj => (
                <ProjectCard info={proj} key={proj.id} />
            ))}
        </div>
    )
}

export default ProjectList
