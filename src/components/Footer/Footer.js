import React from "react";
import { Button } from "../../global.styles";
import {
  FooterContainer,
  FooterDescription,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterSubHeading,
  FooterSubText,
  Form,
  FormInput,
} from "./Footer.styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterDescription>
        <FooterSubHeading>
          Join our excluseive membership to receive the latest news and trends
        </FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time</FooterSubText>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <Button fontBig>Subscribe</Button>
        </Form>
      </FooterDescription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>about us</FooterLinkTitle>
            <FooterLink to="/sign-up">how it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">careers</FooterLink>
            <FooterLink to="/">investors</FooterLink>
            <FooterLink to="/">terms of service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>contact us</FooterLinkTitle>
            <FooterLink to="/sign-up">how it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">careers</FooterLink>
            <FooterLink to="/">investors</FooterLink>
            <FooterLink to="/">terms of service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>videos</FooterLinkTitle>
            <FooterLink to="/sign-up">how it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">careers</FooterLink>
            <FooterLink to="/">investors</FooterLink>
            <FooterLink to="/">terms of service</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>social media</FooterLinkTitle>
            <FooterLink to="/sign-up">how it works</FooterLink>
            <FooterLink to="/">testimonials</FooterLink>
            <FooterLink to="/">careers</FooterLink>
            <FooterLink to="/">investors</FooterLink>
            <FooterLink to="/">terms of service</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
    </FooterContainer>
  );
};

export default Footer;
