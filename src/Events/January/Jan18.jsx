import React from "react";
import Screenshot from "../../asset/coming.webp";

const Jan18 = () => {
  return (
    <div className="ContainerDay" title="18 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="18-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Not Coming</h2>
      </div>
    </div>
  );
};

export default Jan18;
