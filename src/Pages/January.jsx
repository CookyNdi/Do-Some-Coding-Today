import React, { useEffect } from "react";
import Navigationbar from "../Components/Navigationbar";
import JanuaryContent from "../Components/JanuaryContent";

const January = () => {
  useEffect(() => {
    document.title = "January | Do Some Coding Today ";
  });
  return (
    <div>
      <Navigationbar />
      <JanuaryContent />
    </div>
  );
};

export default January;
