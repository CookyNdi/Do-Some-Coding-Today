import React from "react";
import Screenshot from "../../asset/bocchi.gif";

const Jan11 = () => {
  return (
    <div className="ContainerDay" title="11 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="11-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Dump</h2>
      </div>
    </div>
  );
};

export default Jan11;
