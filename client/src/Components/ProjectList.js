import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectList = ({ projects }) => {
    return (
        <div>
            {projects.map(proj => (
                <ProjectCard info={proj} key={proj.id} />
            ))}
        </div>
    )
}

export default ProjectList
