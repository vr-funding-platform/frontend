import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects.map(proj => (
                <p>{proj.projectName}</p>
            ))}
        </div>
    )
}

export default ProjectList
