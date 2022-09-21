import React from "react";
import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import MarkdownList from "./MarkdownList";
import UnderLine from "./UnderLine";

interface IProps {
  text: string;
  expList: Array<string>;
}

const ProfileCard = ({ text, expList }: IProps) => {
  return (
    <>
      <UnderLine
        fontSize={15}
        fontColor="#000000"
        fontWeight="bold"
        text={text}
        lineWidth={118}
        lineHeight={12}
        xaxis={0}
        yaxis={18}
        lineColor="#FEFFC6"
      ></UnderLine>
      <Row style={{ marginTop: "15px" }}>
        <Col lg>
          {" "}
          {expList.map((v, i) => {
            if (i < 3) {
              return (
                <LocationMarkdownList lg={2} index={i}>
                  <MarkdownList
                    fontSize={13}
                    text={v}
                    color="#BBBBBB"
                  ></MarkdownList>
                </LocationMarkdownList>
              );
            }
          })}
        </Col>
        <Col lg>
          {" "}
          {expList.map((v, i) => {
            if (i > 2) {
              return (
                <LocationMarkdownList lg={2} index={i}>
                  <MarkdownList
                    fontSize={13}
                    text={v}
                    color="#BBBBBB"
                  ></MarkdownList>
                </LocationMarkdownList>
              );
            }
          })}
        </Col>
      </Row>
    </>
  );
};

export default ProfileCard;

const LocationMarkdownList = styled(Row)`
  margin-top: 14px;
`;
