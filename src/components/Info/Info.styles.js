import styled from "styled-components";

export const InfoSection = styled.div`
  color: ${({ theme }) => theme.palette.secondary.main};
  padding: 160px 0;
  background: ${({ lightBg, theme }) =>
    lightBg ? theme.palette.secondary.main : theme.palette.primary.main};
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine, theme }) =>
    lightTopLine ? theme.palette.secondary.dark : theme.palette.primary.main};
  text-transform: capitalize;
  font-size: 18px;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
`;

export const Headline = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  text-transform: capitalize;
  color: ${({ lightText, theme }) =>
    lightText ? theme.palette.secondary.light : theme.palette.primary.main};
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ lightTextDesc, theme }) =>
    lightTextDesc ? theme.palette.secondary.main : theme.palette.primary.main};
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 500px;
`;
