import React from "react";
import Screenshot from "../../asset/coming.webp";

const Jan20 = () => {
  return (
    <div className="ContainerDay" title="20 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="20-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Not Coming</h2>
      </div>
    </div>
  );
};

export default Jan20;
