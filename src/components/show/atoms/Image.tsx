import React from 'react'
import styled from 'styled-components';
import dummy from"../../../assets/images/dummy24px.png"

interface IProps{
imageUrl?:string,
size?:number
}
const Image = (props:IProps) => {
    const {imageUrl ,size}=props;
    
    console.log(typeof(dummy))
  return (
    <MyImg src={imageUrl?imageUrl:dummy} size={size} alt="없음"></MyImg>
  )
}

export default Image

const MyImg=styled.img<IProps>`
   ${(props)=>props.size&&`width:${props.size}`+"px;"}
   ${(props)=>props.size&&`height:${props.size}`+"px;"}
`