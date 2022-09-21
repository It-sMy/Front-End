import React from "react";
import styled from "styled-components";
interface IProps {
  width: number;
  height: number;
  children?: JSX.Element;
}

const Card = ({ width: w, height: h, children: c }: IProps) => {
  return (
    <Wrap width={w} height={h}>
      {c}
    </Wrap>
  );
};

export default Card;

const Wrap = styled.div<IProps>`
  min-width: ${(props) => props.width + "px"};
  min-height: ${(props) => props.height + "px"};
  width: 100%;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
`;
