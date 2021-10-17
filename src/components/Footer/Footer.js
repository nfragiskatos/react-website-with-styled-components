import React from "react";
import { FaLinkedin, FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";
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
  SocialIconLink,
  SocialIcons,
  SocialMedia,
  SocialMediaIcon,
  SocialMediaLogo,
  SocialMediaWrapper,
  WebsiteRights,
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
            <FooterLink to="/react-website-with-styled-components/sign-up">
              how it works
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              testimonials
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              careers
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              investors
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              terms of service
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>contact us</FooterLinkTitle>
            <FooterLink to="/react-website-with-styled-components/sign-up">
              contact
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              support
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              destinations
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              sponsorships
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>videos</FooterLinkTitle>
            <FooterLink to="/react-website-with-styled-components/sign-up">
              submit video
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              ambassadors
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              agency
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              influencer
            </FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>social media</FooterLinkTitle>
            <FooterLink to="/react-website-with-styled-components/sign-up">
              twitter
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              youtube
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              linkedin
            </FooterLink>
            <FooterLink to="/react-website-with-styled-components/">
              twitch
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrapper>
          <SocialMediaLogo to="/react-website-with-styled-components/">
            <SocialMediaIcon />
            frag
          </SocialMediaLogo>
          <WebsiteRights>FRAG © 2021</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Youtube">
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
              <FaLinkedin />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitch">
              <FaTwitch />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrapper>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
