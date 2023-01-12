import React from "react";
import Screenshot from "../../asset/bocchi.gif";

const Jan9 = () => {
  return (
    <div className="ContainerDay" title="9 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="9-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Dump</h2>
      </div>
    </div>
  );
};

export default Jan9;
