import React from "react";
import styled from "styled-components";

interface IProps {
  fontSize?: Number;
  color?: string;
  children:JSX.Element,
}
const Li = ({ fontSize: f, color: c ,children}: IProps) => {
   
  return <MyDot fontSize={f} color={c}>{children}</MyDot>;
};

export default Li;

const MyDot = styled.li<IProps>`
  color: ${(props) => props.color?props.color:"black"};
  font-size:  ${(props) => props.fontSize?props.fontSize.toString()+"px":"black"};
`;
