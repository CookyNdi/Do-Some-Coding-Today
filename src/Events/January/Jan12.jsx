import React from "react";
import Screenshot from "../../asset/coming.webp";

const Jan12 = () => {
  return (
    <div className="ContainerDay" title="12 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="12-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Not Coming</h2>
      </div>
    </div>
  );
};

export default Jan12;
