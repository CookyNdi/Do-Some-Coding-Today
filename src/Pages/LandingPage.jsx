import React, { useEffect } from "react";
import Navigationbar from "../Components/Navigationbar";
import JanuaryContent from "../Components/JanuaryContent";

const LandingPage = () => {
  useEffect(() => {
    document.title = "Do Some Coding Today";
  });
  return (
    <div>
      <Navigationbar />
      <JanuaryContent />
    </div>
  );
};

export default LandingPage;
