import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FlexCenterDiv, FlexColumnDiv } from "../../../styles/common";
import { IntroImage } from "../../../styles/image";
import UnderLine from "../molecules/UnderLine";

const ShowIntroSection = () => {
  return (
    <Container>
      <IntroCard id="Intro">
        <Col lg={{ span: 6, order: "last" }}>
          <IntroImage></IntroImage>
        </Col>
        <Col lg={6}>
          <IntroStackAndName>
            <FlexColumnDiv>
              <Greeting>안녕하세요</Greeting>
              <UnderLine fontSize={23} text="FrontEnd" lineColor="#FEFFC6" lineWidth={159} lineHeight={15} xaxis={-10} yaxis={15}></UnderLine>
              <Name>유대훈입니다.</Name>
            </FlexColumnDiv>
          </IntroStackAndName>
        </Col>
      </IntroCard>
    </Container>
  );
};

const IntroCard = styled(Row)`
  background: linear-gradient(
      180deg,
      rgba(157, 217, 242, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 74.48%
    ),
    #ffffff;
`;

const IntroStackAndName = styled(FlexCenterDiv)`
  height: 100%;
  text-align: left;
`;
const Greeting=styled.div`
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 51px;
`
const Name=styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-top: 29px;
`

export default ShowIntroSection;
