import React from "react";
import styled from "styled-components";

interface IProps {
  width?: number;
  height?: number;
  color?: string;
}
const Line = ( { width, height, color }: IProps) => {
 
  return <Wrap width={width} height={height} color={color}></Wrap>;
};

export default Line;

const Wrap = styled.div<IProps>`
  ${(props) => props.width && `width:${props.width}` + "px;"}
  ${(props) => props.height && `height:${props.height}` + "px;"}
  ${(props) => props.color && `background-color:${props.color};`}

`;
