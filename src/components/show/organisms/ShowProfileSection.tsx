import React from "react";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Wrap } from "../../../styles/common";

const ShowProfileSection = () => {
  return (
    <Wrap>
      <Row >
        <Col lg={3}>
          <Col lg={12}>이름</Col>
          <Col lg={12}>사진</Col>
        </Col>
        <Col lg={9}>
          <Row>
            <Col lg={6}>겸험1</Col>
            <Col lg={6}>경험2</Col>
          </Row>

          <Row>
            <Col lg={6}>폰번</Col>
            <Col lg={6}>이메일</Col>
          </Row>
        </Col>
      </Row>
    </Wrap>
  );
};

export default ShowProfileSection;
