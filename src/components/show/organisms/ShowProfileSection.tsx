import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Wrap } from "../../../styles/common";
import UnderLine from "../molecules/UnderLine";
import Image from "../atoms/Image";
import ProfileCard from "../molecules/ProfileCard";

const ShowProfileSection = () => {
  const expList: Array<string> = [
    "TS / Express 기반의 REST API 서버 개발",
    "AWS EC2를 활용한 클라우드 개발",
    "Socket.io를 이용한 채팅 구현 경험",
    "TS / Express 기반의 REST API 서버 개발",
    "AWS EC2를 활용한 클라우드 개발",
    "Socket.io를 이용한 채팅 구현 경험",
  ];
  const phList: Array<string> = ["010-3786-7729"];
  const emailList:Array<string>=["sjssmsqkqh1@gmail.com"]
  return (
    <Wrap id="Profile">
      <Row>
        <Col lg={3}>
          <Col lg={12}>
            <UnderLine
              fontSize={25}
              fontColor="#000000"
              text="유대훈"
              lineWidth={118}
              lineHeight={12}
              xaxis={0}
              yaxis={18}
              lineColor="#FEFFC6"
            ></UnderLine>
          </Col>
          <Col lg={12}>
            <Image width={118} height={164}></Image>
          </Col>
        </Col>
        <Col lg={9}>
          <Row>
            <Col lg={12}>
              <ProfileCard text="핵심 경험" expList={expList}></ProfileCard>
            </Col>
          </Row>

          <Row>
            <Col lg={6}>
              <ProfileCard text="P.H" expList={phList}></ProfileCard>
            </Col>
            <Col lg={6}>
              <ProfileCard text="E-mail" expList={phList}></ProfileCard>
            </Col>
          </Row>
        </Col>
      </Row>
    </Wrap>
  );
};

export default ShowProfileSection;
