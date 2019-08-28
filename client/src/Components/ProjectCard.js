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
      <p className="project-num">Project {id}</p>
      <h2 className="project-title">{projectName}</h2>
      <div className="project-container">
        <div className="left-project-container">
          <div className="proj-image-container">
            <img src={img} className="project-image" alt={projectName} />
          </div>
          <div className="funding-elements">
            <p className="funding-amount">
              FUNDING REQUIRED: <span>${requiredFunds}</span>
            </p>
            <p className="funding-amount">
              STILL NEEDED: <span>${totalFunded}</span>
            </p>
          </div>
        </div>
        <div className="right-project-container">
          {description.split('\n').map((item, i) => {
            return (
              <p className={`project-description_` + i} key={i}>
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
