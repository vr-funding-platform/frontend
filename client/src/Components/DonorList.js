import React, {useEffect, useState} from "react";
import DonorCard from "./Donor";

function DonorList(props) {
  

  return (
    <section className="Donor-List">
      <div>
        <DonorCard projects={props.projects}/> 
    </div>
    </section>
  );
}



 

 



export default DonorList;
