import React from "react";
import { Info, Pricing } from "../../components";
import { homeObjFour } from "./Data";

const Services = () => {
  return (
    <>
      <Pricing />
      <Info {...homeObjFour} />
    </>
  );
};

export default Services;
