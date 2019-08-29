import React, {useEffect, useState} from "react";
import axios from "axios";
import DonorCard from "./Donor";


function DonorList() {
const [projects, setProjects] = useState();
  
    useEffect(() => {
        const getProjects = () => {
        axios
        .get('https://vr-overlord-server.herokuapp.com/projects/')
        .then(res => {
            setProjects(res.data);
            console.log(res.data);
        })
        .catch(err => {
            console.log('Error on axios call', err);
        });
        } 
        getProjects();
    }, []);

  return (
    <section className="Donor-List">
      <div>
    {projects.map(projects => {
     return <DonorCard name={projects.projectName} funding={projects.fundingAmount} goal={projects.fundingGoal} />
    })}
    </div>
    </section>
  );
}

export default DonorList;
