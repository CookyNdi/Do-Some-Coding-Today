import React from "react";
import Screenshot from "../../asset/coming.webp";

const Jan30 = () => {
  return (
    <div className="ContainerDay" title="30 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="30-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Not Coming</h2>
      </div>
    </div>
  );
};

export default Jan30;
