import React from "react";
import { Info, Pricing } from "../../components";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Info {...homeObjFour} />
      <Pricing />
    </>
  );
};

export default Home;
