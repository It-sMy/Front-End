import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { FlexCenterDiv, FlexColumnDiv } from "../../../styles/common";
import { IntroImage } from "../../../styles/image";

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
                <div>안녕하세요</div>
                <div>스택입니다.</div>
                <div>송하준 입니다.</div>
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

export default ShowIntroSection;
