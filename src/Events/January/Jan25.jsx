import React from "react";
import Screenshot from "../../asset/coming.webp";

const Jan25 = () => {
  return (
    <div className="ContainerDay" title="25 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="25-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Not Coming</h2>
      </div>
    </div>
  );
};

export default Jan25;
