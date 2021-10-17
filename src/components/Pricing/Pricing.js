import React from "react";
import { GiCrystalBars, GiCutDiamond, GiRock } from "react-icons/gi";
import { Button } from "../../global.styles";
import {
  PricingCard,
  PricingCardCost,
  PricingCardFeature,
  PricingCardFeatures,
  PricingCardIcon,
  PricingCardInfo,
  PricingCardLength,
  PricingCardPlan,
  PricingContainer,
  PricingHeading,
  PricingSection,
  PricingWrapper,
} from "./Pricing.styles";

const Pricing = () => {
  return (
    <PricingSection>
      <PricingWrapper>
        <PricingHeading>Our Services</PricingHeading>
        <PricingContainer>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <GiRock />
              </PricingCardIcon>
              <PricingCardPlan>level one</PricingCardPlan>
              <PricingCardCost>$99.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>100 New Users</PricingCardFeature>
                <PricingCardFeature>$10,000 Budget</PricingCardFeature>
                <PricingCardFeature>Retargeting analytics</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <GiCrystalBars />
              </PricingCardIcon>
              <PricingCardPlan>level two</PricingCardPlan>
              <PricingCardCost>$199.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>1000 New Users</PricingCardFeature>
                <PricingCardFeature>$50,000 Budget</PricingCardFeature>
                <PricingCardFeature>Lead Gen Analytics</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
          <PricingCard to="/sign-up">
            <PricingCardInfo>
              <PricingCardIcon>
                <GiCutDiamond />
              </PricingCardIcon>
              <PricingCardPlan>level three</PricingCardPlan>
              <PricingCardCost>$599.99</PricingCardCost>
              <PricingCardLength>per month</PricingCardLength>
              <PricingCardFeatures>
                <PricingCardFeature>Unlimited Users</PricingCardFeature>
                <PricingCardFeature>Unlimited Budget</PricingCardFeature>
                <PricingCardFeature>24/7 Support</PricingCardFeature>
              </PricingCardFeatures>
              <Button primary>Choose Plan</Button>
            </PricingCardInfo>
          </PricingCard>
        </PricingContainer>
      </PricingWrapper>
    </PricingSection>
  );
};

export default Pricing;
