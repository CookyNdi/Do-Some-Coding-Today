import React from "react";
import Screenshot from "../../asset/1-1.png"

const Jan1 = () => {
  return (
    <div className="ContainerDay" title="1 January 2023">
      <div className="Screenshot">
        <img src={Screenshot} alt="1-1-2023" />
      </div>
      <div className="Tittle">
        <h2>Membuat Website DSCT Part 1</h2>
      </div>
    </div>
  );
};

export default Jan1;
