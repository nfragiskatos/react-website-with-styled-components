import React from "react";
import { Info, Pricing } from "../../components";
import { homeObjTwo } from "./Data";

const Products = () => {
  return (
    <>
      <Info {...homeObjTwo} />
      <Pricing />
    </>
  );
};

export default Products;
