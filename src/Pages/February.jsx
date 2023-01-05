import React, { useEffect } from "react";
import Navigationbar from "../Components/Navigationbar";
import FebruaryContent from "../Components/FebruaryContent";

const February = () => {
  useEffect(() => {
    document.title = "February | Do Some Coding Today ";
  });
  return (
    <div>
      <Navigationbar />
      <FebruaryContent />
    </div>
  );
};

export default February;
