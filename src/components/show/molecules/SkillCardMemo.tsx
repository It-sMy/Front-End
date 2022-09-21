import React from "react";
import styled from "styled-components";
import Card from "../atoms/Card";
import Label from "../atoms/Label";

interface IProps {
  title: string;
}

const SkillCardMemo = ({ title: t }: IProps) => {
  return (
    <Card width={212} height={111}>
      <LocationLabel>{t}</LocationLabel>
    </Card>
  );
};

export default SkillCardMemo;

const LocationLabel = styled.div`
  width: fit-content;
  transform: translate(7px, 7px);

  font-size: 12px;
`;
