import React from "react";

import { images } from "../../constants";

const SubHeading = ({title,text}) => (
  <div 
    style={{
      marginBottom: "1rem",
    }}
  >
    <p className="p__cormorant">{title}</p>
    <p className="p__cormorant">{text}</p>
    <img src={images.spoon} alt="spoon" className="spoon__img" />
  </div>
);

export default SubHeading;
