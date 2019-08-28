import React from 'react';
import './Styles/projectcard.scss';

const ProjectCard = ({
  info: { projectName, description, fundingAmount, fundingGoal, img, id }
}) => {
  //This takes the fundingGoal, removes the decimal (and what's after) and adds a comma
  const requiredFunds = Math.floor(fundingGoal)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  //This takes the fundingGoal and subtracts the fundingAmount, removes the decimal (and what's after) and adds a comma
  const totalFunded = Math.floor(fundingGoal - fundingAmount)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <div className="project-box">
      <p>Project {id}</p>
      <div className="project-container">
        <h2>{projectName}</h2>
        {description.split('\n').map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
        <p>Funding Required: ${requiredFunds}</p>
        <p>Still Needed: ${totalFunded}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
