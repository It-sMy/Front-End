import React from "react";
import styled from "styled-components";
import { FlexCenterDiv } from "../../../styles/common";
import Card from "../atoms/Card";
import Label from "../atoms/Label";
import SkillStack from "./SkillStack";

const SkillCardStack = () => {
  return (
   
      <Card width={212} height={250}>
        <div>
          <LocationLabel>
            <Label
              text="Tech Stack"
              fontSize={15}
              color="#4B86A8
"
            ></Label>
          </LocationLabel>

          <LocationSkillStacks>
            <SkillStack stackExp="Tried"></SkillStack>
            <SkillStack stackExp="Experiencer"></SkillStack>
            <SkillStack stackExp="Expert"></SkillStack>
            <SkillStack stackExp="Master"></SkillStack>
            <SkillStack stackExp="Master"></SkillStack>
          </LocationSkillStacks>
        </div>
      </Card>
   
  );
};

export default SkillCardStack;

const LocationLabel = styled.div`
transform: translate(0px, 16px);
`;
const LocationSkillStacks = styled(FlexCenterDiv)`
  flex-direction: column;
  margin-top: 14px;
  gap: 15px;
`;
