import React from "react";
import styled from "styled-components";
//component
import Line from "../atoms/Line";


interface IProps {
  fontSize?: number;
  fontColor?: string;
  lineWidth: number;
  text: string;
  lineHeight: number;
  lineColor: string;
  yaxis: number;
  xaxis: number;
}

const UnderLine = ({
  fontSize,
  fontColor,
  text,
  lineWidth,
  lineHeight,
  lineColor,
  yaxis,
  xaxis,
}: IProps) => {
    const theme:object={
fontSize,
fontColor,
    }
  return (
    <Wrap>
      <div style={theme}>{text}</div>
      <LocationLine xaxis={xaxis} yaxis={yaxis}>
      <Line width={lineWidth} height={lineHeight} color={lineColor}></Line>
      </LocationLine>
     
    </Wrap>
  );
};

export default UnderLine;

const Wrap=styled.div`
display: flex;
position: relative;
`
const LocationLine=styled.div<{xaxis:number,yaxis:number}>`
position: absolute;
top: ${(props)=>props.yaxis+"px"};
left: ${(props)=>props.xaxis+"px"};
z-index: -1;

`