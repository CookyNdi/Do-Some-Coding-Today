import React from "react";
import Screenshot from "../../asset/bocchi.gif";

const Jan10 = () => {
  return (
    <div className="ContainerDay" title="10 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="10-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Dump</h2>
      </div>
    </div>
  );
};

export default Jan10;
