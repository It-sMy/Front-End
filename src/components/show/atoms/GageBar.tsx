import React from "react";
import styled from "styled-components";

interface Iprops {
  stackExp: "Tried" | "Experiencer" | "Expert" | "Master";
}

const GageBar = ({ stackExp: s }: Iprops) => {
  let expConvertor: string = "";
  if (s === "Tried") expConvertor = "25%";
  if (s === "Experiencer") expConvertor = "50%";
  if (s === "Expert") expConvertor = "75%";
  if (s === "Master") expConvertor = "100%";
  return (
    <>
      <Wrap>
        <Gage expConvertor={expConvertor}>
          <Text>{s}</Text>
        </Gage>
      </Wrap>
    </>
  );
};

export default GageBar;

const Wrap = styled.div`
  width: 101px;
  height: 16px;
  background: #a0a0a0;
  border-radius: 20px;
  z-index: 0;
  position: relative;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Gage = styled.div<{ expConvertor: string }>`
  background: #3ed1ff;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  width: ${(props) => (props.expConvertor ? props.expConvertor : "0%")};
  height: 16px;
  z-index: 1;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  ${(props) => props.expConvertor==="100%" && "border-radius:20px;"}
`;
const Text = styled.div`
  position: absolute;
  width: 101px;
  height: 16px;
  left: 0;
  line-height: 15px;
  font-weight: 700;
`;
