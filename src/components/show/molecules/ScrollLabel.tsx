import React, { SetStateAction } from "react";
import { text } from "stream/consumers";
import styled from "styled-components";
import { JsxEmit } from "typescript";
import Label from "../atoms/Label";

interface Iprops {
  text: string;
  fontsize?: Number;
  color?: string;
  scrollHeight: number;
//   children: JSX.Element;
}
const refShowBody:HTMLElement|null=document.getElementById("root")

const ScrollLabel = (props:Iprops) => {
    const {text,fontsize,color,scrollHeight,}=props;



    const scrollSection=function(scrollHeight:number){
      console.log(scrollHeight)
      
      if(refShowBody){
        console.log(scrollHeight)
       window.scrollTo(0,scrollHeight)
      }
    }
  return (
    <Wrap onClick={()=>{scrollSection(scrollHeight)}}>
      <Label text={text} fontSize={fontsize} color={color}></Label>
    </Wrap>
  );
};

export default ScrollLabel;

const Wrap=styled.div`
cursor: pointer;
`