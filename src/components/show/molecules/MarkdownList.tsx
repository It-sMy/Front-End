import React from 'react'
import styled from 'styled-components';
import Label from '../atoms/Label';
import {FlexRowDiv}from"../../../styles/common"
import Li from '../atoms/Li';


interface Iprops{
    fontSize?:number;
    text:string;
    width:Number;
    color?:string;
  
}

const MarkdownList = ({fontSize,text,width,color,}:Iprops) => {
  return (
    <Wrap width={150}>
        <Li fontSize={fontSize} ><Label text={text} fontSize={fontSize}></Label></Li>
    
    </Wrap>
  )
}

export default MarkdownList

const Wrap=styled(FlexRowDiv)<{width:Number}>`
width: ${(props)=>props.width.toString()+"px"};
`