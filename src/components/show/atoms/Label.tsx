import React from 'react'
import styled from 'styled-components';

interface IProps{
  text:string;
  fontSize?:number;
  color?:string;
}


const Label = ({text:t,fontSize:f,color:c}:IProps) => {
  const fontConverter:string=f+"px";

  return (
    <Mylabel fontSize={fontConverter} color={c}>{t}</Mylabel>
  )
}

export default Label

const Mylabel=styled.span<{fontSize:string}>`
font-size: ${(props)=>props.fontSize?props.fontSize:"16px"};
color: ${(props)=>props.color?props.color:"black"};
  
`