import { wrap } from "module";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import { FlexRowDiv } from "../../../styles/common";
import SkillCardMemo from "../molecules/SkillCardMemo";
import SkillCardStack from "../molecules/SkillCardStack";

const ShowSkillSection = () => {
  return (
    <Wrap id="Skills">
      <WrapStakAndMemos>
        <Container fluid="md">
          <Row>
            <WrapStacks lg={4} xs>
              <SkillCardStack></SkillCardStack>
            </WrapStacks>
            <WrapMemos lg={8} xs>
              <Row >
                <JustifyCenter  >
                  <SkillCardMemo title="Backend"></SkillCardMemo>
                </JustifyCenter>
                <JustifyCenter >
                  <SkillCardMemo title="Deployment"></SkillCardMemo>
                </JustifyCenter>
              </Row>
              <Row>
                <JustifyCenter>
                  <SkillCardMemo title="Version Control"></SkillCardMemo>
                </JustifyCenter>
                <JustifyCenter>
                  <SkillCardMemo title="Comunication"></SkillCardMemo>
                </JustifyCenter>
              </Row>
            </WrapMemos>
          </Row>
        </Container>
      </WrapStakAndMemos>
    </Wrap>
  );
};

export default ShowSkillSection;

const Wrap = styled.div`
  height: fit-content;
  display: flex;
  justify-content: center;
`;
const WrapStacks=styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
`
const WrapMemos=styled(Col)`
display:flex;
justify-content: center;
  align-items: center;
`
const JustifyCenter=styled(Col)`
display:flex;
justify-content: center;
  align-items: center;
  margin: 10px;
`

const WrapStakAndMemos = styled(FlexRowDiv)`
  display: flex;
  width: 80%;
  height: 852px;
  align-items: center;
  justify-content: center;
`;
