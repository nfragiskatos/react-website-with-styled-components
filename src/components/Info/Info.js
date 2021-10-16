import React from "react";
import { Container } from "../../global.styles";
import { InfoColumn, InfoRow, InfoSection, TextWrapper } from "./Info.styles";

const Info = ({ lightBg, imgStart }) => {
  return (
    <>
      <InfoSection lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>Home Page</TextWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSection>
    </>
  );
};

export default Info;
