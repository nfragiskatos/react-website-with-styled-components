import React from "react";
import { Button } from "../../global.styles";
import {
  FooterContainer,
  FooterDescription,
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
    </FooterContainer>
  );
};

export default Footer;
