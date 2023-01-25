import React from "react";
import Screenshot from "../../asset/1-17.webp";

const Jan17 = () => {
  return (
    <div className="ContainerDay" title="17 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="17-1-2023" />
      </div>
      <div className="Tittle">
        <h2>DSCT: Mengkoneksikan api #7</h2>
      </div>
    </div>
  );
};

export default Jan17;
