import React from "react";
import Screenshot from "../../asset/bruh-day.webp";

const Jan2 = () => {
  return (
    <div className="ContainerDay" title="2 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="2-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Bruh</h2>
      </div>
    </div>
  );
};

export default Jan2;
