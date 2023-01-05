import React from "react";
import Screenshot from "../../asset/coming.webp";

const Jan15 = () => {
  return (
    <div className="ContainerDay" title="15 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="15-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Not Coming</h2>
      </div>
    </div>
  );
};

export default Jan15;
