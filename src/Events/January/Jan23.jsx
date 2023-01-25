import React from "react";
import Screenshot from "../../asset/1-23.png";

const Jan23 = () => {
  return (
    <div className="ContainerDay" title="23 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="23-1-2023" />
      </div>
      <div className="Tittle">
        <h2>DSCT: Membuat Page Bulan #12</h2>
      </div>
    </div>
  );
};

export default Jan23;
