import React from 'react'
import styled from 'styled-components';
import Label from '../atoms/Label';
import {FlexRowDiv}from"../../../styles/common"
import Li from '../atoms/Li';


interface Iprops{
    fontSize?:number;
    text:string;
    color?:string;
  
}

const MarkdownList = ({fontSize,text,color,}:Iprops) => {
  return (
    <Wrap >
        <Li fontSize={fontSize} ><Label text={text} fontSize={fontSize}></Label></Li>
    
    </Wrap>
  )
}

export default MarkdownList

const Wrap=styled(FlexRowDiv)`
width: fit-content;
`