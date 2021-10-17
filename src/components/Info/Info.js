import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../global.styles";
import {
  Headline,
  Img,
  ImgWrapper,
  InfoColumn,
  InfoRow,
  InfoSection,
  Subtitle,
  TextWrapper,
  TopLine,
} from "./Info.styles";

const Info = ({
  lightBg,
  imgStart,
  lightTopLine,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  lightTextDesc,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSection lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Headline lightText={lightText}>{headline}</Headline>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/React-With-Styled-Components/sign-up">
                  <Button big>{buttonLabel}</Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSection>
    </>
  );
};

export default Info;
