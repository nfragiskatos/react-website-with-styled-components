import React from "react";
import { Info } from "../../components";
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from "./Data";

const Home = () => {
  return (
    <>
      <Info {...homeObjOne} />
      <Info {...homeObjTwo} />
      <Info {...homeObjThree} />
      <Info {...homeObjFour} />
    </>
  );
};

export default Home;
